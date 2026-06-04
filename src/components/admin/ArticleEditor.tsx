"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Article, createArticle, updateArticle } from '@/lib/articleStore';
import { supabase } from '@/lib/supabase';
import RichTextEditor from './RichTextEditor';
import styles from './ArticleEditor.module.css';

interface ArticleEditorProps {
  article: Article | null;
  onClose: () => void;
  onSave: (article: Article) => void;
}

const CATEGORIES = ['Leaders Talk', 'Workshop', 'Sự kiện', 'Tin tức', 'Phỏng vấn'];

function getTodayDate(): string {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function ArticleEditor({ article, onClose, onSave }: ArticleEditorProps) {
  const isNew = !article;
  const [title, setTitle] = useState(article?.title ?? '');
  const [category, setCategory] = useState(article?.category ?? 'Leaders Talk');
  const [date, setDate] = useState(article?.date ?? getTodayDate());
  const [author, setAuthor] = useState(article?.author ?? '');
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? '');
  const [coverImage, setCoverImage] = useState(article?.coverImage ?? '');
  const [content, setContent] = useState(article?.content ?? '');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [previewError, setPreviewError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const buildData = (status: 'published' | 'draft'): Omit<Article, 'id'> => {
    return {
      title: title.trim(),
      category,
      date,
      author: author.trim(),
      excerpt: excerpt.trim(),
      coverImage: coverImage.trim(),
      content,
      status,
      pinned: article?.pinned ?? false,
      order: article?.order ?? Date.now(),
    };
  };

  const handleSave = async (status: 'published' | 'draft') => {
    if (!title.trim()) return;
    setSaving(true);
    setSaveError('');
    try {
      const data = buildData(status);
      let saved: Article;
      if (isNew) {
        saved = await createArticle(data);
      } else {
        await updateArticle(article!.id, data);
        saved = { ...article!, ...data };
      }
      onSave(saved);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setSaveError(`Lưu thất bại: ${msg}`);
    } finally {
      setSaving(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Kiểm tra loại file
    if (!file.type.startsWith('image/')) {
      setUploadError('Chỉ chấp nhận file ảnh (JPG, PNG, WebP, GIF...)');
      return;
    }
    // Giới hạn 5MB
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Ảnh quá lớn, vui lòng chọn ảnh dưới 5MB');
      return;
    }

    setUploading(true);
    setUploadError('');
    try {
      const ext = file.name.split('.').pop();
      const fileName = `covers/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error: upErr } = await supabase.storage
        .from('article-covers')
        .upload(fileName, file, { upsert: false });

      if (upErr) throw upErr;

      const { data: urlData } = supabase.storage
        .from('article-covers')
        .getPublicUrl(fileName);

      setCoverImage(urlData.publicUrl);
      setPreviewError(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setUploadError(`Lỗi upload: ${msg}`);
    } finally {
      setUploading(false);
      // Reset file input để có thể chọn lại cùng file
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = async () => {
    // Nếu là ảnh đã upload lên Supabase Storage → xóa file
    const supabaseBase = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseBase && coverImage.startsWith(supabaseBase)) {
      try {
        // Lấy path sau "/object/public/article-covers/"
        const marker = '/object/public/article-covers/';
        const idx = coverImage.indexOf(marker);
        if (idx !== -1) {
          const filePath = coverImage.slice(idx + marker.length);
          await supabase.storage.from('article-covers').remove([filePath]);
        }
      } catch {
        // Bỏ qua lỗi xóa file — vẫn xóa khỏi form
      }
    }
    setCoverImage('');
    setPreviewError(false);
    setUploadError('');
  };

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.headerLabel}>{isNew ? 'BÀI VIẾT MỚI' : 'CHỈNH SỬA BÀI VIẾT'}</span>
            {!isNew && (
              <h2 className={styles.headerTitle}>{article.title}</h2>
            )}
          </div>
          <button className={styles.closeBtn} onClick={onClose} title="Đóng">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Title */}
          <div className={styles.field}>
            <label className={styles.label}>TIÊU ĐỀ <span className={styles.required}>*</span></label>
            <input
              className={styles.input}
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Nhập tiêu đề bài viết..."
            />
          </div>

          {/* Row: Category | Date | Author */}
          <div className={styles.row3}>
            <div className={styles.field}>
              <label className={styles.label}>DANH MỤC <span className={styles.required}>*</span></label>
              <input
                className={styles.input}
                list="categories-list"
                value={category}
                onChange={e => setCategory(e.target.value)}
                placeholder="Leaders Talk"
              />
              <datalist id="categories-list">
                {CATEGORIES.map(c => <option key={c} value={c} />)}
              </datalist>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>NGÀY ĐĂNG</label>
              <input
                className={styles.input}
                value={date}
                onChange={e => setDate(e.target.value)}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>TÁC GIẢ</label>
              <input
                className={styles.input}
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Tên tác giả"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className={styles.field}>
            <label className={styles.label}>MÔ TẢ NGẮN</label>
            <textarea
              className={styles.textarea}
              rows={3}
              value={excerpt}
              onChange={e => setExcerpt(e.target.value)}
              placeholder="Mô tả ngắn gọn về bài viết..."
            />
          </div>

          {/* Cover Image */}
          <div className={styles.field}>
            <label className={styles.label}>ẢNH BÌA</label>

            {/* Upload row: nút tải lên + ô URL */}
            <div className={styles.coverRow}>
              <input
                className={styles.input}
                value={coverImage}
                onChange={e => { setCoverImage(e.target.value); setPreviewError(false); setUploadError(''); }}
                placeholder="https://... hoặc /ten-anh.jpg"
                style={{ flex: 1 }}
              />
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleUpload}
              />
              <button
                type="button"
                className={styles.uploadBtn}
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                title="Tải ảnh từ máy tính"
              >
                {uploading ? (
                  <span className={styles.uploadSpinner} />
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                )}
                {uploading ? 'Đang tải...' : 'Tải ảnh lên'}
              </button>
            </div>

            <p className={styles.helpText}>Tải ảnh từ máy tính hoặc nhập URL ảnh (tối đa 5MB)</p>

            {/* Upload error */}
            {uploadError && (
              <p className={styles.previewError}>⚠ {uploadError}</p>
            )}

            {/* Preview + nút xóa */}
            {coverImage && !previewError && (
              <div className={styles.previewWrap}>
                <div className={styles.imagePreview}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverImage}
                    alt="Xem trước ảnh bìa"
                    onError={() => setPreviewError(true)}
                  />
                </div>
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={handleRemoveImage}
                  title="Xóa ảnh"
                  aria-label="Xóa ảnh bìa"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                  Xóa ảnh
                </button>
              </div>
            )}
            {previewError && (
              <div className={styles.previewWrap}>
                <p className={styles.previewError}>⚠ Không thể tải ảnh từ URL này</p>
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={handleRemoveImage}
                  title="Xóa ảnh"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                  Xóa ảnh
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className={styles.field}>
            <label className={styles.label}>NỘI DUNG BÀI VIẾT</label>
            <RichTextEditor value={content} onChange={setContent} />
          </div>

        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button
            className={styles.draftBtn}
            onClick={() => handleSave('draft')}
            disabled={!title.trim() || saving}
          >
            {saving ? 'Đang lưu...' : 'Lưu bản nháp'}
          </button>
          <div className={styles.footerRight}>
            {saveError && (
              <p style={{ fontSize: 13, color: '#e53e3e', margin: 0, maxWidth: 320, textAlign: 'right' }}>
                ⚠ {saveError}
              </p>
            )}
            <button className={styles.cancelBtn} onClick={onClose}>Hủy</button>
            <button
              className={styles.publishBtn}
              onClick={() => handleSave('published')}
              disabled={!title.trim() || saving}
            >
              {saving ? 'Đang đăng...' : 'Đăng bài'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

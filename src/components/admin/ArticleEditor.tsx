"use client";

import React, { useState, useEffect } from 'react';
import { Article, createArticle, updateArticle } from '@/lib/articleStore';
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
  const [previewError, setPreviewError] = useState(false);

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
    } finally {
      setSaving(false);
    }
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
            <input
              className={styles.input}
              value={coverImage}
              onChange={e => { setCoverImage(e.target.value); setPreviewError(false); }}
              placeholder="https://... hoặc /ten-anh.jpg"
            />
            <p className={styles.helpText}>Nhập URL ảnh hoặc đường dẫn tương đối (ví dụ: /cover.png)</p>
            {coverImage && !previewError && (
              <div className={styles.imagePreview}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImage}
                  alt="Xem trước ảnh bìa"
                  onError={() => setPreviewError(true)}
                />
              </div>
            )}
            {previewError && (
              <p className={styles.previewError}>⚠ Không thể tải ảnh từ URL này</p>
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

"use client";

import React, { useRef, useEffect, useCallback, useState } from 'react';
import styles from './RichTextEditor.module.css';

// Restore a saved selection range back into the editor
function restoreRange(range: Range | null) {
  if (!range) return;
  const sel = window.getSelection();
  if (!sel) return;
  sel.removeAllRanges();
  sel.addRange(range);
}

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const PRESET_COLORS = [
  { label: 'Black', value: '#0D0B0A' },
  { label: 'Orange', value: '#FF5200' },
  { label: 'Red', value: '#E53E3E' },
  { label: 'Blue', value: '#2B6CB0' },
  { label: 'Gray', value: '#718096' },
  { label: 'White', value: '#FFFFFF' },
];

/* ── Inline CTA dialog ─────────────────────────────────────────────────── */
interface CtaDialogProps {
  onInsert: (label: string, url: string) => void;
  onClose: () => void;
}
function CtaDialog({ onInsert, onClose }: CtaDialogProps) {
  const [label, setLabel] = useState('Đăng ký ngay');
  const [url, setUrl]     = useState('https://');
  const labelRef = useRef<HTMLInputElement>(null);

  useEffect(() => { labelRef.current?.focus(); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!label.trim() || !url.trim()) return;
    onInsert(label.trim(), url.trim());
  };

  return (
    <div className={styles.ctaOverlay} onMouseDown={e => e.stopPropagation()}>
      <div className={styles.ctaDialog}>
        <div className={styles.ctaHeader}>
          <span className={styles.ctaTitle}>Chèn nút CTA</span>
          <button type="button" className={styles.ctaClose} onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit} className={styles.ctaForm}>
          <label className={styles.ctaLabel}>
            Tên nút
            <input
              ref={labelRef}
              className={styles.ctaInput}
              value={label}
              onChange={e => setLabel(e.target.value)}
              placeholder="Đăng ký ngay"
            />
          </label>
          <label className={styles.ctaLabel}>
            URL liên kết
            <input
              className={styles.ctaInput}
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://..."
              type="url"
            />
          </label>
          {/* Preview */}
          {label && (
            <div className={styles.ctaPreviewWrap}>
              <span className={styles.ctaPreviewLabel}>Xem trước:</span>
              <span className={styles.ctaPreviewBtn}>{label}</span>
            </div>
          )}
          <div className={styles.ctaActions}>
            <button type="button" className={styles.ctaCancelBtn} onClick={onClose}>Hủy</button>
            <button type="submit" className={styles.ctaInsertBtn} disabled={!label.trim() || !url.trim()}>
              Chèn vào bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ── Main editor ────────────────────────────────────────────────────────── */
export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const isInternalChange = useRef(false);
  const [ctaOpen, setCtaOpen] = useState(false);
  const savedRange = useRef<Range | null>(null); // persists selection across dialog open

  // Save current cursor/selection before losing focus
  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedRange.current = sel.getRangeAt(0).cloneRange();
    }
  };

  useEffect(() => {
    if (editorRef.current && !isInternalChange.current) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const exec = useCallback((command: string, val?: string) => {
    document.execCommand(command, false, val);
    editorRef.current?.focus();
    const html = editorRef.current?.innerHTML ?? '';
    isInternalChange.current = true;
    onChange(html);
    setTimeout(() => { isInternalChange.current = false; }, 0);
  }, [onChange]);

  const handleInput = useCallback(() => {
    const html = editorRef.current?.innerHTML ?? '';
    isInternalChange.current = true;
    onChange(html);
    setTimeout(() => { isInternalChange.current = false; }, 0);
  }, [onChange]);

  const handleInsertImage = () => {
    const url = prompt('Nhập URL ảnh:');
    if (url) exec('insertImage', url);
  };

  const handleInsertLink = () => {
    const url = prompt('Nhập URL liên kết:');
    if (url) exec('createLink', url);
  };

  const handleCtaInsert = (label: string, url: string) => {
    // Restore cursor position before inserting
    editorRef.current?.focus();
    restoreRange(savedRange.current);
    const ctaHtml = `<a href="${url}" style="display:inline-block;background:#FF5200;color:#ffffff;font-family:'Be Vietnam Pro',sans-serif;font-weight:700;font-size:0.88rem;padding:0.7rem 1.8rem;border-radius:8px;text-decoration:none;letter-spacing:0.04em;margin:1rem 0;">${label}</a><br>`;
    exec('insertHTML', ctaHtml);
    savedRange.current = null;
    setCtaOpen(false);
  };

  const ToolBtn = ({ title, onClick, children, active }: {
    title: string;
    onClick: () => void;
    children: React.ReactNode;
    active?: boolean;
  }) => (
    <button
      type="button"
      title={title}
      className={`${styles.toolBtn} ${active ? styles.active : ''}`}
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
    >
      {children}
    </button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        {/* Text style */}
        <ToolBtn title="Bold" onClick={() => exec('bold')}><b>B</b></ToolBtn>
        <ToolBtn title="Italic" onClick={() => exec('italic')}><i>I</i></ToolBtn>
        <ToolBtn title="Underline" onClick={() => exec('underline')}><u>U</u></ToolBtn>
        <ToolBtn title="Strikethrough" onClick={() => exec('strikeThrough')}><s>S</s></ToolBtn>

        <div className={styles.sep} />

        {/* Headings */}
        <ToolBtn title="Heading 2" onClick={() => exec('formatBlock', '<h2>')}>H2</ToolBtn>
        <ToolBtn title="Heading 3" onClick={() => exec('formatBlock', '<h3>')}>H3</ToolBtn>
        <ToolBtn title="Paragraph" onClick={() => exec('formatBlock', '<p>')}>P</ToolBtn>

        <div className={styles.sep} />

        {/* Alignment */}
        <ToolBtn title="Align Left" onClick={() => exec('justifyLeft')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3zm0 4h12v2H3zm0 4h18v2H3zm0 4h12v2H3z"/></svg>
        </ToolBtn>
        <ToolBtn title="Align Center" onClick={() => exec('justifyCenter')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3zm3 4h12v2H6zm-3 4h18v2H3zm3 4h12v2H6z"/></svg>
        </ToolBtn>
        <ToolBtn title="Align Right" onClick={() => exec('justifyRight')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3zm6 4h12v2H9zm-6 4h18v2H3zm6 4h12v2H9z"/></svg>
        </ToolBtn>

        <div className={styles.sep} />

        {/* Lists */}
        <ToolBtn title="Bullet List" onClick={() => exec('insertUnorderedList')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm3-10h13v2H7zm0 5h13v2H7zm0 5h13v2H7z"/></svg>
        </ToolBtn>
        <ToolBtn title="Numbered List" onClick={() => exec('insertOrderedList')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/></svg>
        </ToolBtn>

        <div className={styles.sep} />

        {/* Color picker */}
        <div className={styles.colorGroup}>
          <span className={styles.colorLabel}>A</span>
          <div className={styles.colorSwatches}>
            {PRESET_COLORS.map(c => (
              <button
                key={c.value}
                type="button"
                title={c.label}
                className={styles.colorSwatch}
                style={{ background: c.value, border: c.value === '#FFFFFF' ? '1px solid #ccc' : 'none' }}
                onMouseDown={(e) => { e.preventDefault(); exec('foreColor', c.value); }}
              />
            ))}
          </div>
        </div>

        <div className={styles.sep} />

        {/* Link & Image */}
        <ToolBtn title="Insert Link" onClick={handleInsertLink}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
        </ToolBtn>
        <ToolBtn title="Insert Image" onClick={handleInsertImage}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
        </ToolBtn>

        {/* CTA Button — saves selection then opens custom inline dialog */}
        <ToolBtn
          title="Chèn nút CTA"
          active={ctaOpen}
          onClick={() => {
            if (!ctaOpen) saveSelection();
            setCtaOpen(v => !v);
          }}
        >
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: ctaOpen ? '#fff' : '#FF5200', letterSpacing: '0.03em' }}>CTA</span>
        </ToolBtn>

        <div className={styles.sep} />

        {/* Clear */}
        <ToolBtn title="Clear Formatting" onClick={() => exec('removeFormat')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/></svg>
        </ToolBtn>
      </div>

      {/* ── CTA inline popup ── */}
      {ctaOpen && (
        <CtaDialog
          onInsert={handleCtaInsert}
          onClose={() => setCtaOpen(false)}
        />
      )}

      <div
        ref={editorRef}
        className={styles.editorArea}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        data-placeholder="Nhập nội dung bài viết tại đây..."
      />
    </div>
  );
}

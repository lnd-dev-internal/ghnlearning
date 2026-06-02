"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import type { Article } from '@/lib/articleStore';
import styles from './ArticleDetailModal.module.css';

interface Props {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleDetailModal({ article, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!article) return;
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
    gsap.fromTo(panelRef.current,   { opacity: 0, y: 28, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.38, ease: 'power3.out' });
  }, [article]);

  if (!article) return null;

  const handleClose = () => {
    gsap.to(panelRef.current,   { opacity: 0, y: 16, scale: 0.97, duration: 0.22, ease: 'power2.in' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: onClose });
  };

  return (
    <div ref={overlayRef} className={styles.overlay} onClick={handleClose}>
      <div ref={panelRef} className={styles.panel} onClick={e => e.stopPropagation()}>

        {/* Cover + X button */}
        <div className={styles.cover}>
          <Image
            src={article.coverImage || '/Wst5.png'}
            alt={article.title}
            fill
            className={styles.coverImg}
            sizes="640px"
            quality={85}
          />
          <div className={styles.coverOverlay} />
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Đóng">✕</button>
        </div>

        {/* Article body */}
        <div className={styles.body}>
          {/* Meta row */}
          <div className={styles.meta}>
            <span className={styles.categoryBadge}>{article.category}</span>
            <span className={styles.author}>{article.author}</span>
          </div>

          {/* Title */}
          <h2 className={styles.title}>{article.title}</h2>

          {/* Date */}
          <p className={styles.date}>{article.date}</p>

          {/* Content HTML */}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
}

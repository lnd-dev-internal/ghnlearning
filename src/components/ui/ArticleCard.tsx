"use client";
import Image from 'next/image';
import type { Article } from '@/lib/articleStore';
import styles from './ArticleCard.module.css';

interface Props {
  article: Article;
  onClick: () => void;
  featured?: boolean;
}

export default function ArticleCard({ article, onClick, featured }: Props) {
  return (
    <button
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      onClick={onClick}
      aria-label={`Đọc bài: ${article.title}`}
    >
      {/* Cover */}
      <div className={styles.cover}>
        <Image
          src={article.coverImage || '/Wst5.png'}
          alt={article.title}
          fill
          className={styles.coverImg}
          sizes="(max-width: 768px) 100vw, 560px"
        />
        <div className={styles.coverOverlay} />
        {featured && (
          <span className={styles.featuredBadge} aria-label="Nổi bật">⭐ NỔI BẬT</span>
        )}
        <span className={styles.categoryBadge}>{article.category}</span>
      </div>

      {/* Right side (body + footer) — needed for horizontal layout */}
      <div className={styles.rightPane}>
        <div className={styles.body}>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.excerpt}>{article.excerpt}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.date}>{article.date}</span>
          <span className={styles.author}>{article.author}</span>
        </div>
      </div>
    </button>
  );
}

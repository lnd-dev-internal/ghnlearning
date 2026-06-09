"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useArticles } from '@/lib/articleStore';
import ArticleCard from '@/components/ui/ArticleCard';
import ArticleDetailModal from '@/components/ui/ArticleDetailModal';
import type { Article } from '@/lib/articleStore';
import styles from './page.module.css';

export default function KyTruocPage() {
  const allArticles = useArticles();
  const [selected, setSelected] = useState<Article | null>(null);

  const published = allArticles.filter(a => a.status === 'published');
  const featured  = published.filter(a => a.pinned).sort((a, b) => a.order - b.order);
  const regular   = published.filter(a => !a.pinned).sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>

      {/* ── Navigation bar ── */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navBack}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Tổng quan
        </Link>
        <Link href="/" className={styles.navLogo}>
          <Image
            src="/5 logos.png"
            alt="Leaders Talk"
            width={500}
            height={40}
            className={styles.navLogoImg}
          />
        </Link>
        <Link href="/admin" className={styles.navAdmin}>Admin</Link>
      </nav>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroAccent} />
          <h1 className={styles.heroTitle}>NHỮNG KỲ TRƯỚC</h1>
          <p className={styles.heroSub}>
            Những buổi chia sẻ, workshop và kết nối giữa những nhà lãnh đạo hàng đầu
          </p>
        </div>
      </header>

      <main className={styles.main}>
        {published.length === 0 ? (
          <div className={styles.empty}>
            <p>Chưa có bài viết nào được đăng.</p>
          </div>
        ) : (
          <>
            {/* ── Featured row (pinned) ── */}
            {featured.length > 0 && (
              <section className={styles.featuredSection}>
                <div className={styles.sectionLabel}>
                  <span className={styles.sectionDot} />
                  NỔI BẬT
                </div>
                <div className={styles.featuredGrid}>
                  {featured.map(article => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onClick={() => setSelected(article)}
                      featured
                    />
                  ))}
                </div>
              </section>
            )}

            {/* ── Regular articles grid ── */}
            {regular.length > 0 && (
              <section className={styles.regularSection}>
                {featured.length > 0 && (
                  <div className={styles.sectionLabel}>
                    <span className={styles.sectionDot} />
                    TẤT CẢ CÁC KỲ
                  </div>
                )}
                <div className={styles.grid}>
                  {regular.map(article => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onClick={() => setSelected(article)}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      {/* ── Article detail modal ── */}
      <ArticleDetailModal
        article={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

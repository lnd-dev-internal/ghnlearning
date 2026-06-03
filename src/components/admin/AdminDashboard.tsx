"use client";
import { useState } from 'react';
import Image from 'next/image';
import type { Article } from '@/lib/articleStore';
import { useArticles, updateArticle, deleteArticle } from '@/lib/articleStore';
import ArticleEditor from './ArticleEditor';
import styles from './AdminDashboard.module.css';


export default function AdminDashboard() {
  const articles = useArticles();
  const [editTarget, setEditTarget] = useState<Article | null | undefined>(undefined);

  // undefined = closed, null = new article, Article = editing

  const sorted = [...articles].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return a.order - b.order;
  });

  const toggleStatus = async (a: Article) => {
    await updateArticle(a.id, { status: a.status === 'published' ? 'draft' : 'published' });
  };

  const togglePin = async (a: Article) => {
    await updateArticle(a.id, { pinned: !a.pinned });
  };

  const handleDelete = async (a: Article) => {
    if (window.confirm(`Xóa bài "${a.title.slice(0, 60)}"?`))
      await deleteArticle(a.id);
  };

  const handleSave = (_article: Article) => {
    // ArticleEditor đã tự gọi createArticle/updateArticle rồi
    // Chỉ cần đóng modal — realtime subscription sẽ tự refresh danh sách
    setEditTarget(undefined);
  };

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image src="/5 logos.png" alt="Leaders Talk" width={140} height={28} className={styles.headerLogo} />
          <span className={styles.headerTag}>ADMIN</span>
        </div>
        <a href="/ky-truoc" className={styles.headerLink}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M8.5 2.5L3.5 7L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Về những kỳ trước
        </a>
      </header>

      {/* Content */}
      <main className={styles.main}>
        {/* List header */}
        <div className={styles.listHeader}>
          <div>
            <h2 className={styles.listTitle}>Danh sách bài viết ({articles.length})</h2>
            <p className={styles.listHint}>Nhấn vào trạng thái hoặc ghim để thay đổi nhanh</p>
          </div>
          <button className={styles.addBtn} onClick={() => setEditTarget(null)}>
            + Thêm bài viết
          </button>
        </div>

        {/* Table */}
        <div className={styles.tableWrap}>
          {sorted.length === 0 ? (
            <div className={styles.empty}>
              Chưa có bài viết nào. Nhấn <strong>+ Thêm bài viết</strong> để bắt đầu.
            </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thArticle}>BÀI VIẾT</th>
                  <th className={styles.thCat}>DANH MỤC</th>
                  <th className={styles.thStatus}>TRẠNG THÁI</th>
                  <th className={styles.thPin}>GHIM</th>
                  <th className={styles.thOrder}>THỨ TỰ</th>
                  <th className={styles.thActions}></th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(a => (
                  <tr key={a.id} className={styles.row}>
                    {/* Article */}
                    <td className={styles.tdArticle}>
                      <div className={styles.articleCell}>
                        <div className={styles.thumbWrap}>
                          <Image
                            src={a.coverImage || '/Wst5.png'}
                            alt=""
                            fill
                            className={styles.thumb}
                            sizes="56px"
                          />
                        </div>
                        <div className={styles.articleInfo}>
                          <p className={styles.articleTitle}>{a.title}</p>
                          <p className={styles.articleAuthor}>{a.author}</p>
                        </div>
                      </div>
                    </td>
                    {/* Category */}
                    <td className={styles.tdCat}>
                      <span className={styles.catBadge}>{a.category}</span>
                    </td>
                    {/* Status */}
                    <td className={styles.tdStatus}>
                      <button
                        className={`${styles.statusBtn} ${a.status === 'published' ? styles.statusPub : styles.statusDraft}`}
                        onClick={() => toggleStatus(a)}
                        title="Nhấn để thay đổi"
                      >
                        <span className={styles.statusDot} />
                        {a.status === 'published' ? 'Hiện thị' : 'Bản nháp'}
                      </button>
                    </td>
                    {/* Pin */}
                    <td className={styles.tdPin}>
                      <button
                        className={styles.pinBtn}
                        onClick={() => togglePin(a)}
                        title={a.pinned ? 'Bỏ ghim' : 'Ghim'}
                        aria-label={a.pinned ? 'Bỏ ghim' : 'Ghim bài viết'}
                      >
                        {a.pinned ? '⭐' : '☆'}
                      </button>
                    </td>
                    {/* Order */}
                    <td className={styles.tdOrder}>{a.order}</td>
                    {/* Actions */}
                    <td className={styles.tdActions}>
                      <button className={styles.editBtn} onClick={() => setEditTarget(a)}>Sửa</button>
                      <button className={styles.deleteBtn} onClick={() => handleDelete(a)}>Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Editor modal */}
      {editTarget !== undefined && (
        <ArticleEditor
          article={editTarget}
          onClose={() => setEditTarget(undefined)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

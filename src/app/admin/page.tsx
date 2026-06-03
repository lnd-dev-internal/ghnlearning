"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AdminDashboard from '@/components/admin/AdminDashboard';
import styles from './page.module.css';

const PASSWORD = '321654';
const SESSION_KEY = 'lt_admin_auth';

export default function AdminPage() {
  const [authed, setAuthed]   = useState(false);
  const [input, setInput]     = useState('');
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ok = sessionStorage.getItem(SESSION_KEY) === PASSWORD;
    setAuthed(ok);
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, PASSWORD);
      setAuthed(true);
      setError('');
    } else {
      setError('Mật khẩu không đúng. Vui lòng thử lại.');
      setInput('');
    }
  };

  if (loading) return null;
  if (authed)  return <AdminDashboard />;

  // ── Login screen ─────────────────────────────────────────────────────────
  return (
    <div className={styles.loginPage}>
      {/* Decorative grid */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.logoWrap}>
          <Image src="/5 logos.png" alt="Leaders Talk" width={200} height={40} className={styles.logo} />
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>ADMIN</h1>
        <p className={styles.sub}>Nhập mật khẩu để truy cập trang quản trị</p>

        {/* Form */}
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputWrap}>
            <input
              type="password"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Mật khẩu"
              className={styles.input}
              autoFocus
              autoComplete="current-password"
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submitBtn} disabled={!input}>
            Đăng nhập
          </button>
        </form>

        <a href="/" className={styles.backLink}>← Về trang chủ</a>
      </div>
    </div>
  );
}

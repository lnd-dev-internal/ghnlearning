"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AdminDashboard from '@/components/admin/AdminDashboard';
import styles from './page.module.css';

export default function AdminPage() {
  const [authed, setAuthed]   = useState(false);
  const [input, setInput]     = useState('');
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Auth state is decided server-side via the httpOnly session cookie.
  useEffect(() => {
    fetch('/api/admin/session', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => setAuthed(!!d.authed))
      .catch(() => setAuthed(false))
      .finally(() => setLoading(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: input }),
      });
      if (res.ok) {
        setAuthed(true);
        setInput('');
      } else {
        const msg = (await res.json().catch(() => ({})))?.error ?? 'Đăng nhập thất bại.';
        setError(msg);
        setInput('');
      }
    } catch {
      setError('Không kết nối được tới máy chủ.');
    } finally {
      setSubmitting(false);
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

          <button type="submit" className={styles.submitBtn} disabled={!input || submitting}>
            {submitting ? 'Đang kiểm tra…' : 'Đăng nhập'}
          </button>
        </form>

        <a href="/" className={styles.backLink}>← Về trang chủ</a>
      </div>
    </div>
  );
}

'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useFormConfig } from '@/lib/formStore';
import type { FormField } from '@/lib/formStore';
import styles from './RegistrationModal.module.css';

/* ─── Props ─────────────────────────────────────────────────────────────── */

interface RegistrationModalProps {
  onClose: () => void;
}

/* ─── Component ─────────────────────────────────────────────────────────── */

type SubmitState = 'idle' | 'submitting' | 'success';

export default function RegistrationModal({ onClose }: RegistrationModalProps) {
  const formConfig = useFormConfig();

  const overlayRef  = useRef<HTMLDivElement>(null);
  const panelRef    = useRef<HTMLDivElement>(null);
  const successRef  = useRef<HTMLDivElement>(null);

  const [values, setValues]   = useState<Record<string, string>>({});
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [state, setState]     = useState<SubmitState>('idle');

  /* ── Entrance animation ───────────────────────────────────────────────── */

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' },
    );
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: 0.05 },
    );
  }, []);

  /* ── Body scroll lock ─────────────────────────────────────────────────── */

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* ── Escape key ───────────────────────────────────────────────────────── */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Close with exit animation ────────────────────────────────────────── */

  const handleClose = useCallback(() => {
    gsap.to(panelRef.current, { opacity: 0, y: 20, scale: 0.97, duration: 0.22, ease: 'power2.in' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.28, ease: 'power2.in', onComplete: onClose });
  }, [onClose]);

  /* ── Field change handler ─────────────────────────────────────────────── */

  const handleChange = useCallback((fieldId: string, value: string) => {
    setValues(prev => ({ ...prev, [fieldId]: value }));
    setErrors(prev => {
      const next = { ...prev };
      delete next[fieldId];
      return next;
    });
  }, []);

  /* ── Validation ───────────────────────────────────────────────────────── */

  const validate = useCallback((): boolean => {
    if (!formConfig) return false;
    const newErrors: Record<string, string> = {};

    for (const field of formConfig.fields) {
      const val = (values[field.id] ?? '').trim();

      if (field.required && !val) {
        newErrors[field.id] = 'Trường này là bắt buộc';
      } else if (field.type === 'email' && val) {
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(val)) {
          newErrors[field.id] = 'Email không hợp lệ';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formConfig, values]);

  /* ── Submit ───────────────────────────────────────────────────────────── */

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formConfig || !validate()) return;

    setState('submitting');

    // Build payload: { fields: [{ value, sheetHeader }] }
    const payload = {
      fields: formConfig.fields.map(field => ({
        id: field.id,
        value: (values[field.id] ?? '').trim(),
        sheetHeader: field.sheetHeader,
      })),
    };

    try {
      const params = new URLSearchParams();
      params.append('payload', JSON.stringify(payload));

      await fetch(formConfig.appsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });

      setState('success');

      // Animate success icon
      requestAnimationFrame(() => {
        if (successRef.current) {
          gsap.fromTo(
            successRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
          );
        }
      });

      // Auto-close after 2s
      setTimeout(() => handleClose(), 2000);
    } catch (err) {
      console.error('Registration submit error:', err);
      setState('idle');
    }
  }, [formConfig, values, validate, handleClose]);

  /* ── Render field ─────────────────────────────────────────────────────── */

  const renderField = (field: FormField) => {
    const val = values[field.id] ?? '';
    const hasError = !!errors[field.id];

    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={field.type}
            className={`${styles.input} ${hasError ? styles.inputError : ''}`}
            placeholder={field.placeholder ?? ''}
            value={val}
            onChange={e => handleChange(field.id, e.target.value)}
          />
        );

      case 'textarea':
        return (
          <textarea
            className={`${styles.textarea} ${hasError ? styles.inputError : ''}`}
            placeholder={field.placeholder ?? ''}
            value={val}
            onChange={e => handleChange(field.id, e.target.value)}
            rows={3}
          />
        );

      case 'select':
        return (
          <div className={styles.selectWrapper}>
            <select
              className={`${styles.select} ${hasError ? styles.inputError : ''}`}
              value={val}
              onChange={e => handleChange(field.id, e.target.value)}
            >
              <option value="">{field.placeholder ?? 'Chọn...'}</option>
              {(field.options ?? []).map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <span className={styles.selectArrow}>▼</span>
          </div>
        );

      case 'radio':
        return (
          <div className={styles.radioGroup}>
            {(field.options ?? []).map(opt => (
              <label
                key={opt}
                className={`${styles.radioLabel} ${val === opt ? styles.radioLabelChecked : ''}`}
              >
                <input
                  type="radio"
                  name={field.id}
                  className={styles.radioInput}
                  value={opt}
                  checked={val === opt}
                  onChange={() => handleChange(field.id, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  /* ─── Render ──────────────────────────────────────────────────────────── */

  return (
    <div ref={overlayRef} className={styles.overlay} onClick={handleClose}>
      <div ref={panelRef} className={styles.panel} onClick={e => e.stopPropagation()}>

        {/* ── Success state ─────────────────────────────────────────── */}
        {state === 'success' ? (
          <div ref={successRef} className={styles.successOverlay}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className={styles.successTitle}>Đăng ký thành công!</h3>
            <p className={styles.successDesc}>
              Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ sớm nhất!
            </p>
          </div>
        ) : !formConfig ? (
          /* ── No active config ────────────────────────────────────── */
          <div className={styles.emptyState}>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Đóng">✕</button>
            <span className={styles.emptyIcon}>📋</span>
            <p className={styles.emptyText}>Hiện tại chưa mở đăng ký</p>
          </div>
        ) : (
          /* ── Form ────────────────────────────────────────────────── */
          <>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Đóng">✕</button>
            {formConfig.headerImage && (
              <div className={styles.headerImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={formConfig.headerImage} alt="" className={styles.headerImg} />
              </div>
            )}
            <div className={styles.header}>
              <h2 className={styles.headerTitle}>{formConfig.title}</h2>
              {formConfig.description && (
                <p className={styles.headerDesc}>{formConfig.description}</p>
              )}
            </div>

            <form className={styles.formBody} onSubmit={handleSubmit} noValidate>
              {formConfig.fields.map(field => (
                <div key={field.id} className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    {field.label}
                    {field.required && <span className={styles.required}>*</span>}
                  </label>
                  {renderField(field)}
                  <span className={styles.errorMsg}>{errors[field.id] ?? ''}</span>
                </div>
              ))}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={state === 'submitting'}
              >
                {state === 'submitting' ? (
                  <>
                    <span className={styles.spinner} />
                    Đang gửi...
                  </>
                ) : (
                  'Đăng ký ngay'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

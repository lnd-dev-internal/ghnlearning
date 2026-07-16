"use client";

import Link from "next/link";
import { useState } from "react";
import { NvxlSection, nvxlSections } from "@/lib/b2b/operations";
import styles from "./NvxlSubPage.module.css";

export default function NvxlSubPage({ section }: { section: NvxlSection }) {
  const [query, setQuery] = useState("");
  const cards = section.cards?.filter((card) => card.title.toLocaleLowerCase("vi").includes(query.toLocaleLowerCase("vi"))) ?? [];

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar} aria-label="Nội dung Nhân viên Xử lý B2B">
        <div className={styles.sidebarTitle}>Nhân viên Xử lý B2B</div>
        <nav>
          {nvxlSections.map((item) => (
            <Link key={item.slug} href={`/b2b/${item.slug}`} className={item.slug === section.slug ? styles.active : ""}>
              <span aria-hidden="true">▦</span><span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <section className={styles.content}>
        <div className={styles.mobileNav} aria-label="Chuyên mục NVXL">
          {nvxlSections.map((item) => (
            <Link key={item.slug} href={`/b2b/${item.slug}`} className={item.slug === section.slug ? styles.activeChip : ""}>{item.shortLabel}</Link>
          ))}
        </div>

        <div className={styles.breadcrumb}>
          <Link href="/b2b/van-hanh">Vận hành</Link><span>/</span><Link href="/b2b/nvxl">Nhân viên Xử lý B2B</Link><span>/</span><strong>{section.shortLabel}</strong>
        </div>

        <header className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>Technical Skills · Operations</span>
            <h1>{section.title}</h1>
          </div>
          {!section.botchat && (
            <label className={styles.search}>
              <span>⌕</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm nội dung..." aria-label="Tìm nội dung" />
            </label>
          )}
        </header>

        {section.botchat ? (
          <div className={styles.botchat}>
            <p>Botchat là <strong>Trợ lý Vận hành</strong> – giải đáp mọi thắc mắc về vận hành tại GHN.</p>
            <iframe src="https://botvanhanh-k29dadpuj-tdat06152s-projects.vercel.app/" title="Botchat Vận hành GHN" allow="clipboard-write" />
          </div>
        ) : (
          <div className={styles.grid}>
            {cards.map((card) => (
              <article className={styles.card} key={card.title}>
                <div className={styles.thumb}><img src={card.image} alt={card.title} /></div>
                <div className={styles.cardBody}>
                  <h2>{card.title}</h2>
                  <div className={styles.meta}>◷ {card.duration}</div>
                  <a href={card.href} target="_blank" rel="noopener noreferrer">Bắt đầu học <span>↗</span></a>
                </div>
              </article>
            ))}
            {cards.length === 0 && <p className={styles.empty}>Không tìm thấy nội dung phù hợp.</p>}
          </div>
        )}
      </section>
    </main>
  );
}

"use client";

import { useEffect, useRef } from "react";

type Experience = "home" | "business";

type Lesson = {
  name: string;
  title: string;
  purpose: string;
  duration: string;
  modules: string;
  description: string;
  link: string;
};

const lessons: Lesson[] = [
  {
    name: "Pipeline Management",
    title: "Build the Right Pipeline",
    purpose: "Nếu tháng sau phải đạt target, hôm nay Pipeline của bạn đã đủ khỏe chưa?",
    duration: "90 phút",
    modules: "Thực chiến",
    description: "Nhiều BD vẫn đạt doanh số bằng nỗ lực cá nhân, nhưng chưa thực sự làm chủ Pipeline. Kết quả là tháng này chốt deal, tháng sau lại thiếu cơ hội mới.\n\nTrong 90 phút, bạn sẽ học cách xây dựng Pipeline B2B bài bản, chuyển hóa mục tiêu doanh thu thành kế hoạch hành động cụ thể, xác định đúng khách hàng tiềm năng và dự báo doanh thu bằng dữ liệu thay vì cảm tính.\n\nKhám phá cách những BD xuất sắc luôn biết mình cần làm gì hôm nay để đạt kết quả trong tương lai. 🚀",
    link: "https://app-driver-web.ghn.vn/survey-detail?surveyId=6a39195ff51f70e4f2e10a98",
  },
  {
    name: "Pricing & Costing",
    title: "Understand Pricing & Costing",
    purpose: "Doanh thu lớn có thực sự là một deal tốt?",
    duration: "90 phút",
    modules: "Profit First",
    description: "Một dự án mang về hàng tỷ đồng doanh thu nhưng EBITDA âm liệu có đáng để theo đuổi? Trong bài học này, Anh/Chị sẽ được khám phá tư duy \"Profit First\" – nền tảng giúp Business Development không chỉ bán được hàng mà còn tạo ra lợi nhuận bền vững.\n\nThông qua các case study thực tế của ngành Logistics, Anh/Chị sẽ học cách đọc Costing, xây dựng Pricing, phân tích P&L và đánh giá hiệu quả thực sự của từng thương vụ. Sau bài học, Anh/Chị sẽ biết cách bảo vệ Margin, nhận diện các deal \"đốt tiền\" và tự tin đưa ra những quyết định kinh doanh mang lại giá trị dài hạn cho doanh nghiệp.",
    link: "https://app-driver-web.ghn.vn/survey-detail?surveyId=6a391b0d53f2daae619e34ca",
  },
  {
    name: "Consultative & Solution-Based Selling",
    title: "Sell Solutions, Not Services",
    purpose: "Khách hàng không mua dịch vụ logistics. Họ mua kết quả kinh doanh.",
    duration: "90 phút",
    modules: "PSM Model",
    description: "Trong bài học này, bạn sẽ được trang bị tư duy bán hàng B2B hiện đại: từ việc khám phá đúng pain point, xác định business impact, đến xây dựng giải pháp và thuyết phục khách hàng bằng giá trị thay vì giá bán.\n\nĐồng thời, bạn sẽ làm quen với mô hình PSM (Persuasive Selling Model) và cách phối hợp hiệu quả với các bên liên quan để chốt những cơ hội kinh doanh có giá trị lớn.\n\n🚀 Sẵn sàng chuyển từ người bán hàng thành người tư vấn giải pháp và tạo lợi thế cạnh tranh khác biệt?",
    link: "https://app-driver-web.ghn.vn/survey-detail?surveyId=6a391d32f51f70e4f2e10aa7",
  },
  {
    name: "Account Growth & Relationship Management",
    title: "Grow Strategic Accounts",
    purpose: "Tại sao khách hàng vẫn chọn đối thủ dù giá, leadtime và dịch vụ không khác biệt?",
    duration: "90 phút",
    modules: "Customer Journey",
    description: "Trong B2B Logistics, lợi thế cạnh tranh bền vững không nằm ở bảng giá mà nằm ở mối quan hệ. Khóa học sẽ giúp bạn hiểu cách xây dựng niềm tin với khách hàng, quản lý các nhóm khách hàng chiến lược, khai thác cơ hội Upsell trên từng giai đoạn Customer Journey và từng bước chuyển mình từ một người bán dịch vụ thành đối tác chiến lược của khách hàng.\n\n🚀 Khám phá ngay cách biến mối quan hệ thành doanh thu, sự trung thành và những cơ hội kinh doanh dài hạn.",
    link: "https://app-driver-web.ghn.vn/survey-detail?surveyId=6a391e7c75057879438a20a5",
  },
  {
    name: "Stakeholder Management",
    title: "Win Through Collaboration",
    purpose: "Tạo ra giải pháp tốt hơn nhờ phối hợp đa phòng ban",
    duration: "40 phút",
    modules: "4 modules",
    description: "Kỹ năng quản lý stakeholders nội bộ và bên ngoài — mapping các bên liên quan, xây dựng liên minh hỗ trợ, giải quyết xung đột lợi ích, và tối ưu hóa quy trình phê duyệt deal lớn.",
    link: "#",
  },
  {
    name: "Data Driven",
    title: "Make Decisions with Data",
    purpose: "Sử dụng dữ liệu để tìm kiếm cơ hội và thúc đẩy tăng trưởng",
    duration: "50 phút",
    modules: "5 modules",
    description: "Trang bị tư duy data-driven cho BD — từ đọc hiểu dashboard vận hành, phân tích conversion rate, đến sử dụng dữ liệu để phát hiện cơ hội mới và tối ưu hoá hiệu quả bán hàng.",
    link: "#",
  },
];

function setupHomeExperience(root: HTMLElement, signal: AbortSignal) {
  const splash = root.querySelector<HTMLElement>("#b2b-welcome-screen");
  const enter = root.querySelector<HTMLElement>("#enter-b2b-btn");
  let splashTimer: ReturnType<typeof setTimeout> | undefined;

  const dismissSplash = () => {
    if (!splash) return;
    sessionStorage.setItem("ghn-b2b-splash-seen", "true");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    splash.classList.add("fade-out");
    splashTimer = setTimeout(() => splash.remove(), 1200);
  };

  if (splash && sessionStorage.getItem("ghn-b2b-splash-seen")) splash.remove();
  else if (splash) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    enter?.addEventListener("click", dismissSplash, { signal });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") dismissSplash();
    }, { signal });
    splashTimer = setTimeout(() => enter?.classList.add("ready"), 4600);
  }

  const revealItems = root.querySelectorAll<HTMLElement>(
    ".stat-value,.proof-value,.usp-card,.stat-card,.pillar-card,.change-card,.culture-card,.org-card,.revenue-card,.section-title,.statement,.regulation-card,.segment-card,.journey-card-inner,.journey-node,.leader-card"
  );
  revealItems.forEach((item) => {
    item.style.opacity = "0.05";
    item.style.transform = "translateY(30px)";
    item.style.filter = "blur(10px)";
    item.style.transition = "opacity .9s cubic-bezier(.2,.8,.2,1),transform .9s cubic-bezier(.2,.8,.2,1),filter .9s cubic-bezier(.2,.8,.2,1)";
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const item = entry.target as HTMLElement;
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
      item.style.filter = "blur(0)";
      observer.unobserve(item);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -45px" });
  revealItems.forEach((item) => observer.observe(item));

  const wrapper = root.querySelector<HTMLElement>("#journey-scroll-wrapper");
  const nodes = [...root.querySelectorAll<HTMLElement>(".journey-node")];
  const progress = root.querySelector<HTMLElement>("#journey-progress");
  const tracker = root.querySelector<HTMLElement>("#journey-tracker");
  const cardYear = root.querySelector<HTMLElement>("#journey-card-year");
  const cardTitle = root.querySelector<HTMLElement>("#journey-card-title");
  const cardDesc = root.querySelector<HTMLElement>("#journey-card-desc");
  let activeIndex = -1;
  let autoPlayTimer: ReturnType<typeof setInterval> | undefined;

  const setActiveNode = (index: number) => {
    if (index === activeIndex || !nodes[index]) return;
    activeIndex = index;
    const percent = nodes.length > 1 ? index / (nodes.length - 1) * 100 : 0;
    if (progress) progress.style.width = `${percent}%`;
    if (tracker) tracker.style.left = `${percent}%`;
    nodes.forEach((node, nodeIndex) => {
      node.classList.toggle("reached", nodeIndex <= index);
      node.classList.toggle("active-node", nodeIndex === index);
    });
    const node = nodes[index];
    if (cardYear) cardYear.textContent = node.dataset.year ?? "";
    if (cardTitle) cardTitle.textContent = node.dataset.title ?? "";
    if (cardDesc) cardDesc.textContent = node.dataset.desc ?? "";
  };

  const startAutoPlay = () => {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % nodes.length;
      setActiveNode(nextIndex);
    }, 4000);
  };

  // Remove dynamic scroll height — section is now a regular block
  if (wrapper) wrapper.style.height = "";
  setActiveNode(0);
  startAutoPlay();

  nodes.forEach((node, index) => node.addEventListener("click", () => {
    setActiveNode(index);
    startAutoPlay(); // Reset timer on manual click
  }, { signal }));

  const modelContainers = root.querySelectorAll<HTMLElement>(".b2b-models-container");
  modelContainers.forEach((container) => {
    const tabs = [...container.querySelectorAll<HTMLButtonElement>("[data-model-tab]")];
    const descriptions = [...container.querySelectorAll<HTMLElement>("[data-model-desc]")];

    const setActiveModel = (model: string) => {
      container.dataset.activeModel = model;

      tabs.forEach((tab) => {
        const isActive = tab.dataset.modelTab === model;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      descriptions.forEach((description) => {
        description.hidden = description.dataset.modelDesc !== model;
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        setActiveModel(tab.dataset.modelTab ?? "both");
      }, { signal });

      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];
        nextTab.focus();
        setActiveModel(nextTab.dataset.modelTab ?? "both");
      }, { signal });
    });

    setActiveModel(container.dataset.activeModel || "both");
  });

  const zoomCards = root.querySelectorAll<HTMLElement>(".org-zoomable");
  const detailStage = root.querySelector<HTMLElement>("#org-detail-stage");
  const detailByCard = new Map<HTMLElement, HTMLElement>();
  let expanded: HTMLElement | null = null;
  let stagedDetail: HTMLElement | null = null;

  const fitOrgCharts = () => {
    if (!detailStage) return;
    const charts = detailStage.querySelectorAll<HTMLElement>(".org-fit");
    charts.forEach((chart) => {
      chart.style.removeProperty("zoom");
      chart.style.removeProperty("transform");
      chart.style.removeProperty("margin-bottom");

      const stageStyles = window.getComputedStyle(detailStage);
      const availableWidth = detailStage.clientWidth
        - parseFloat(stageStyles.paddingLeft)
        - parseFloat(stageStyles.paddingRight);
      const naturalWidth = chart.scrollWidth;
      if (!availableWidth || !naturalWidth) return;

      const scale = Math.min(1, availableWidth / naturalWidth);
      if (scale >= 0.96) {
        chart.style.transformOrigin = "top left";
        if (typeof CSS !== "undefined" && CSS.supports("zoom", "1")) {
          chart.style.setProperty("zoom", scale.toFixed(4));
        } else {
          chart.style.transform = `scale(${scale.toFixed(4)})`;
        }
      }
    });
  };

  zoomCards.forEach((card) => {
    const detail = card.querySelector<HTMLElement>(".org-detail");
    if (detail) detailByCard.set(card, detail);
  });

  const collapse = () => {
    if (expanded) {
      expanded.classList.remove("is-expanded");
      expanded.setAttribute("aria-expanded", "false");
    }
    if (stagedDetail && expanded) {
      expanded.appendChild(stagedDetail);
    }
    if (detailStage) {
      detailStage.classList.remove("is-active");
      detailStage.setAttribute("aria-hidden", "true");
      detailStage.hidden = true;
    }
    expanded = null;
    stagedDetail = null;
  };

  const expand = (card: HTMLElement) => {
    if (expanded === card) return collapse();
    const detail = detailByCard.get(card);
    if (!detail || !detailStage) return;
    collapse();
    expanded = card;
    stagedDetail = detail;
    card.classList.add("is-expanded");
    card.setAttribute("aria-expanded", "true");
    detailStage.appendChild(detail);
    detailStage.hidden = false;
    detailStage.setAttribute("aria-hidden", "false");
    detailStage.classList.add("is-active");
    requestAnimationFrame(() => {
      fitOrgCharts();
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  zoomCards.forEach((card) => {
    card.addEventListener("click", () => expand(card), { signal });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        expand(card);
      }
    }, { signal });
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") collapse(); }, { signal });
  window.addEventListener("resize", fitOrgCharts, { signal });

  return () => {
    collapse();
    observer.disconnect();
    if (splashTimer) clearTimeout(splashTimer);
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}

function setupBusinessExperience(root: HTMLElement, signal: AbortSignal) {
  let activeIndex = 0;
  let isPlaying = false;
  let lastWheel = 0;
  let dragStartX: number | null = null;
  let volume = 0.7;
  let popupBodyOverflow: string | null = null;
  const audio = new Audio("/b2b/assets/nhac_b2b.mp3");
  audio.volume = volume;

  const cards = [...root.querySelectorAll<HTMLElement>("#carousel .card")];
  const dots = [...root.querySelectorAll<HTMLElement>("#dotsContainer .dot")];
  const carousel = root.querySelector<HTMLElement>("#carousel");
  const drawer = root.querySelector<HTMLElement>("#playlistDrawer");
  const playlist = root.querySelector<HTMLElement>("#playlistList");
  const popup = root.querySelector<HTMLElement>("#lessonPopup");
  const popupBackdrop = root.querySelector<HTMLElement>("#lessonPopupBackdrop");
  const popupParent = popup?.parentNode ?? null;
  const popupNextSibling = popup?.nextSibling ?? null;
  const popupBackdropParent = popupBackdrop?.parentNode ?? null;
  const popupBackdropNextSibling = popupBackdrop?.nextSibling ?? null;
  const playButton = root.querySelector<HTMLElement>("#playBtn");
  const timeline = root.querySelector<HTMLElement>("#timelineWrapper");
  const timelineProgress = root.querySelector<HTMLElement>("#timelineProgress");
  const timelineHandle = root.querySelector<HTMLElement>("#timelineHandle");
  const volumeTrack = root.querySelector<HTMLElement>(".volume-slider-container");
  const volumeProgress = root.querySelector<HTMLElement>("#volumeProgress");
  const volumeHandle = root.querySelector<HTMLElement>("#volumeHandle");

  // Keep the modal above the shared header and sticky audio player. Both are
  // outside page-wrapper and create their own stacking contexts.
  if (popupBackdrop) document.body.appendChild(popupBackdrop);
  if (popup) document.body.appendChild(popup);

  if (playlist) {
    playlist.innerHTML = lessons.map((lesson, index) => `<li class="playlist-item" data-index="${index}"><span class="playlist-item-number">0${index + 1}</span><div><strong>${lesson.name}</strong><small>${lesson.duration}</small></div></li>`).join("");
  }

  const setText = (selector: string, value: string) => {
    const element = root.querySelector<HTMLElement>(selector) ?? popup?.querySelector<HTMLElement>(selector);
    if (element) element.textContent = value;
  };

  const updateCarousel = (nextIndex: number) => {
    activeIndex = (nextIndex + lessons.length) % lessons.length;
    cards.forEach((card, index) => {
      const offset = (index - activeIndex + lessons.length) % lessons.length;
      card.classList.remove("active", "prev", "next", "prev-2", "next-2", "hidden");
      card.classList.add(offset === 0 ? "active" : offset === 1 ? "next" : offset === 2 ? "next-2" : offset === lessons.length - 1 ? "prev" : offset === lessons.length - 2 ? "prev-2" : "hidden");
    });
    dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
    playlist?.querySelectorAll<HTMLElement>(".playlist-item").forEach((item, index) => item.classList.toggle("active", index === activeIndex));
    setText("#playerLessonTitle", lessons[activeIndex].title);
    setText("#playerLessonPurpose", lessons[activeIndex].purpose);
  };

  const showPopup = () => {
    const lesson = lessons[activeIndex];
    setText("#popupEyebrow", `Bài học 0${activeIndex + 1} · ${lesson.name}`);
    setText("#popupTitle", lesson.title);
    setText("#popupSubtitle", lesson.purpose);
    setText("#popupDuration", lesson.duration);
    setText("#popupModules", lesson.modules);
    
    // Update description using innerHTML to support HTML formatting and breaks
    const descEl = root.querySelector<HTMLElement>("#popupDesc") ?? popup?.querySelector<HTMLElement>("#popupDesc");
    if (descEl) {
      descEl.innerHTML = lesson.description.replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
    }

    // Set the link on the Learn Now (Học ngay) button
    const ctaEl = root.querySelector<HTMLAnchorElement>("#popupCta") ?? popup?.querySelector<HTMLAnchorElement>("#popupCta");
    if (ctaEl) {
      ctaEl.href = lesson.link;
    }

    popupBodyOverflow ??= document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (popup) popup.scrollTop = 0;
    popup?.classList.add("is-active");
    popupBackdrop?.classList.add("is-active");
    requestAnimationFrame(() => popup?.querySelector<HTMLElement>("#popupClose")?.focus());
  };
  const closePopup = () => {
    popup?.classList.remove("is-active");
    popupBackdrop?.classList.remove("is-active");
    if (popupBodyOverflow !== null) {
      document.body.style.overflow = popupBodyOverflow;
      popupBodyOverflow = null;
    }
  };

  cards.forEach((card, index) => card.addEventListener("click", () => {
    if (index === activeIndex) showPopup();
    else updateCarousel(index);
  }, { signal }));
  dots.forEach((dot, index) => dot.addEventListener("click", () => updateCarousel(index), { signal }));
  playlist?.querySelectorAll<HTMLElement>(".playlist-item").forEach((item, index) => item.addEventListener("click", () => {
    updateCarousel(index);
    drawer?.classList.remove("open");
  }, { signal }));

  const startDrag = (x: number) => { dragStartX = x; };
  const finishDrag = (x: number) => {
    if (dragStartX === null) return;
    const distance = x - dragStartX;
    if (Math.abs(distance) > 45) updateCarousel(activeIndex + (distance < 0 ? 1 : -1));
    dragStartX = null;
  };
  carousel?.addEventListener("mousedown", (event) => startDrag(event.clientX), { signal });
  window.addEventListener("mouseup", (event) => finishDrag(event.clientX), { signal });
  carousel?.addEventListener("touchstart", (event) => startDrag(event.touches[0].clientX), { signal, passive: true });
  carousel?.addEventListener("touchend", (event) => finishDrag(event.changedTouches[0].clientX), { signal, passive: true });
  carousel?.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (Date.now() - lastWheel < 450) return;
    lastWheel = Date.now();
    updateCarousel(activeIndex + (event.deltaY > 0 ? 1 : -1));
  }, { signal, passive: false });

  const syncPlayButton = () => {
    playButton?.querySelector(".icon-play")?.classList.toggle("hide", isPlaying);
    playButton?.querySelector(".icon-pause")?.classList.toggle("hide", !isPlaying);
  };
  playButton?.addEventListener("click", async () => {
    if (isPlaying) audio.pause();
    else await audio.play().catch(() => undefined);
  }, { signal });
  audio.addEventListener("play", () => { isPlaying = true; syncPlayButton(); }, { signal });
  audio.addEventListener("pause", () => { isPlaying = false; syncPlayButton(); }, { signal });
  audio.addEventListener("timeupdate", () => {
    const percent = audio.duration ? audio.currentTime / audio.duration * 100 : 0;
    if (timelineProgress) timelineProgress.style.width = `${percent}%`;
    if (timelineHandle) timelineHandle.style.left = `${percent}%`;
  }, { signal });
  audio.addEventListener("ended", () => updateCarousel(activeIndex + 1), { signal });

  const seek = (event: MouseEvent) => {
    if (!timeline || !audio.duration) return;
    const ratio = Math.max(0, Math.min(1, (event.clientX - timeline.getBoundingClientRect().left) / timeline.offsetWidth));
    audio.currentTime = ratio * audio.duration;
  };
  timeline?.addEventListener("click", seek, { signal });
  root.querySelector("#prevBtn")?.addEventListener("click", () => updateCarousel(activeIndex - 1), { signal });
  root.querySelector("#nextBtn")?.addEventListener("click", () => updateCarousel(activeIndex + 1), { signal });
  root.querySelector("#likeBtn")?.addEventListener("click", (event) => (event.currentTarget as HTMLElement).classList.toggle("liked"), { signal });
  root.querySelector("#playlistBtn")?.addEventListener("click", () => drawer?.classList.toggle("open"), { signal });
  root.querySelector("#closeDrawerBtn")?.addEventListener("click", () => drawer?.classList.remove("open"), { signal });
  popup?.querySelector("#popupClose")?.addEventListener("click", closePopup, { signal });
  popupBackdrop?.addEventListener("click", closePopup, { signal });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closePopup(); drawer?.classList.remove("open"); } }, { signal });

  const setVolume = (event: MouseEvent) => {
    if (!volumeTrack) return;
    volume = Math.max(0, Math.min(1, (event.clientX - volumeTrack.getBoundingClientRect().left) / volumeTrack.offsetWidth));
    audio.muted = false;
    audio.volume = volume;
    if (volumeProgress) volumeProgress.style.width = `${volume * 100}%`;
    if (volumeHandle) volumeHandle.style.left = `${volume * 100}%`;
  };
  volumeTrack?.addEventListener("click", setVolume, { signal });
  root.querySelector("#volumeBtn")?.addEventListener("click", (event) => {
    audio.muted = !audio.muted;
    (event.currentTarget as HTMLElement).classList.toggle("muted", audio.muted);
  }, { signal });
  if (volumeProgress) volumeProgress.style.width = `${volume * 100}%`;
  if (volumeHandle) volumeHandle.style.left = `${volume * 100}%`;

  updateCarousel(0);
  return () => {
    closePopup();
    if (popup && popupParent) {
      if (popupNextSibling && popupNextSibling.parentNode === popupParent) {
        popupParent.insertBefore(popup, popupNextSibling);
      } else {
        popupParent.appendChild(popup);
      }
    }
    if (popupBackdrop && popupBackdropParent) {
      if (popupBackdropNextSibling && popupBackdropNextSibling.parentNode === popupBackdropParent) {
        popupBackdropParent.insertBefore(popupBackdrop, popupBackdropNextSibling);
      } else {
        popupBackdropParent.appendChild(popupBackdrop);
      }
    }
    audio.pause();
    audio.src = "";
  };
}

export default function LegacyExperience({ css, html, experience }: { css: string; html: string; experience: Experience }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const controller = new AbortController();
    const cleanup = experience === "home"
      ? setupHomeExperience(root, controller.signal)
      : setupBusinessExperience(root, controller.signal);
    return () => {
      controller.abort();
      cleanup?.();
    };
  }, [experience]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

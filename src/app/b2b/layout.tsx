import type { Metadata } from "next";
import SiteHeader from "@/components/b2b/SiteHeader";
import B2BTableOfContents from "@/components/b2b/B2BTableOfContents";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Giao Hàng Nặng B2B", template: "%s | Giao Hàng Nặng B2B" },
  description: "Nền tảng nội dung và đào tạo dành cho đội ngũ Giao Hàng Nặng B2B.",
};

// Bootstrap theme trước khi paint để tránh nháy sáng/tối. Chạy ngay khi thẻ
// script được parse, target .b2b-scope là phần tử cha của chính nó.
const themeBootstrap = `(function(){try{var el=document.currentScript.parentElement;var t=localStorage.getItem("ghn-b2b-theme")==="light"?"light":"dark";el.classList.toggle("light-theme",t==="light");el.style.colorScheme=t;}catch(e){}})();`;

export default function B2BLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="b2b-scope" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      <SiteHeader />
      {children}
      <B2BTableOfContents />
    </div>
  );
}

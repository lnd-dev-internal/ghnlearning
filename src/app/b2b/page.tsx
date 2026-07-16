import type { Metadata } from "next";
import LegacyExperience from "@/components/b2b/LegacyExperience";
import { readLegacyPage } from "@/lib/b2b/legacy-page";

export const metadata: Metadata = {
  title: "Giao Hàng Nặng B2B | Your Loads. Our Roads.",
  description: "Giao Hàng Nặng - đối tác vận chuyển hàng nặng chuẩn quốc tế dành cho các doanh nghiệp.",
};

export default function HomePage() {
  const source = readLegacyPage("index.html");
  return <LegacyExperience {...source} experience="home" />;
}

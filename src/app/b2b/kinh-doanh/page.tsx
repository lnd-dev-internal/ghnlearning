import type { Metadata } from "next";
import LegacyExperience from "@/components/b2b/LegacyExperience";
import { readLegacyPage } from "@/lib/b2b/legacy-page";

export const metadata: Metadata = {
  title: "Kinh doanh",
  description: "Chương trình đào tạo B2B GHN – nâng tầm năng lực kinh doanh và bứt phá doanh thu.",
};

export default function BusinessPage() {
  const source = readLegacyPage("kinh-doanh.html");
  return <LegacyExperience {...source} experience="business" />;
}

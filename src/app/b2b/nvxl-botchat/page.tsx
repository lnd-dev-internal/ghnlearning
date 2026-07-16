import type { Metadata } from "next";
import NvxlSubPage from "@/components/b2b/NvxlSubPage";
import { getNvxlSection } from "@/lib/b2b/operations";
export const metadata: Metadata = { title: "NVXL – Botchat Vận hành" };
export default function Page() { return <NvxlSubPage section={getNvxlSection("nvxl-botchat")} />; }

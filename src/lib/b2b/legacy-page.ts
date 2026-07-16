import { readFileSync } from "node:fs";
import { join } from "node:path";

export type LegacyPageSource = { css: string; html: string };

const linkReplacements: Array<[RegExp, string]> = [
  [/href="index\.html"/g, 'href="/b2b"'],
  [/href="van-hanh\.html"/g, 'href="/b2b/van-hanh"'],
  [/href="kinh-doanh\.html"/g, 'href="/b2b/kinh-doanh"'],
  [/href="nvxl\.html"/g, 'href="/b2b/nvxl"'],
];

export function readLegacyPage(fileName: "index.html" | "kinh-doanh.html"): LegacyPageSource {
  const source = readFileSync(join(process.cwd(), "src", "lib", "b2b", "legacy", fileName), "utf8");
  const css = [...source.matchAll(/<style>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1])
    .join("\n")
    .replaceAll('url("assets/', 'url("/b2b/assets/')
    .replaceAll("url('assets/", "url('/b2b/assets/")
    .replaceAll("url(assets/", "url(/b2b/assets/");

  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  let html = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<header class="site-header">[\s\S]*?<\/header>/i, "")
    .replaceAll('src="assets/', 'src="/b2b/assets/')
    .replaceAll('src="SMT/', 'src="/b2b/SMT/');

  for (const [pattern, replacement] of linkReplacements) html = html.replace(pattern, replacement);
  return { css, html };
}

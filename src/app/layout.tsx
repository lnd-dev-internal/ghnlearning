import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leaders Talk",
  description: "Where visionary leaders shape tomorrow's conversations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

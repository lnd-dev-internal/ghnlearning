import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ui/ClientLayoutWrapper";

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
      <head>
        {/* Preconnect for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Anton + Space Grotesk + Plus Jakarta Sans + Be Vietnam Pro + Montserrat + Lexend */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@400;500;600;700;800;900&family=Lexend:wght@300;400;500;600;700&family=Jost:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Fonts are loaded in the browser with a stylesheet link rather than
 * `next/font/google`. `next/font` downloads the files at build time,
 * which fails on any machine or CI runner that cannot reach
 * fonts.googleapis.com — including networks behind a campus proxy.
 * Loading them at runtime keeps `npm run build` working everywhere,
 * and `globals.css` declares full fallback stacks so the page is
 * readable before the webfonts arrive.
 */
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..800,0,1&family=IBM+Plex+Mono:wght@400;500;600&family=Newsreader:opsz,wght@6..72,300..600&family=Schibsted+Grotesk:wght@400..800&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.initiative} — Project Portal`,
    template: "%s · Net Zero Solar Portal",
  },
  description: site.description,
  openGraph: {
    title: `${site.initiative} — Project Portal`,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONT_HREF} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

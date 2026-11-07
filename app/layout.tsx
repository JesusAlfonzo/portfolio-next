import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { LiquidGlassBackground } from "@/components/layout/liquid-glass-background";
import { Analytics } from "@vercel/analytics/next";
import { PERSONAL_INFO } from "@/data/portfolio";

import "./globals.css";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} - Portfolio`,
  description: `Portafolio profesional de ${PERSONAL_INFO.name}, ${PERSONAL_INFO.role}. Especializado en backend, infraestructura y desarrollo de software escalable.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body className="min-h-screen flex flex-col text-foreground bg-background relative selection:bg-blue-500/20 dark:selection:bg-indigo-500/25">
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LiquidGlassBackground />
          <Header />
          <div className="flex-1 w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

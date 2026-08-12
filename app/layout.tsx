import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ModeToggle } from "@/components/ui/shadcn/mode-toggle";
import { Analytics } from "@vercel/analytics/next"

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
  title: "Jesus Alfonzo - Portfolio",
  description: "Portfolio Jesus Alfonzo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable,
        "dark:bg-black",
      )}
    >
<body className="min-h-screen flex flex-col text-foreground dark:bg-black">
  <Analytics />
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    
    <header className="flex justify-center items-center w-full px-4 py-6 dark:bg-black">
      <NavigationMenu>
        <NavigationMenuList>
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </header>

    <main className="flex-1 w-full">{children}</main>
    
  </ThemeProvider>
</body>
    </html>
  );
}

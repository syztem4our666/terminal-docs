import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { Banner } from 'fumadocs-ui/components/banner';

const geist = Geist({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <Banner variant="rainbow">Terminal Docs 1.0</Banner>
        <RootProvider>{children}</RootProvider>

      </body>
    </html>
  );
}

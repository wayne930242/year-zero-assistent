import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { ReduxProviders } from "./providers";
import { Button } from "@/components/ui/button";
import { Patreon } from "./patreon";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Plurk } from "./plurk";
import { PenTool } from "lucide-react";

const notoSansTC = Noto_Sans_TC({
  subsets: ["cyrillic", "latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "洪偉的元年引擎小助手",
  description: "協助你進行元年引擎遊戲的 APP。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <body className={notoSansTC.className}>
        <div className="h-10 bg-slate-800 px-2 py-1 flex justify-between text-white">
          <div className="flex items-center gap-4 px-2">
            <Link href="/" className="flex items-center gap-2">
              <PenTool className="h-6 w-6" />
              <span>Year 0</span>
            </Link>
          </div>
          <div className="text-white flex justify-end items-center">
            <a
              href="https://plurk.com/wayne930242"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="link" size="icon" className="text-white">
                <Plurk className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://www.patreon.com/weihung"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="link" size="icon" className="text-white">
                <Patreon className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://github.com/wayne930242/year-zero-assistent"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="link" className="text-white" size="icon">
                <GitHubLogoIcon className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <ReduxProviders>
          <main className="bg-accent min-h-screen">{children}</main>
        </ReduxProviders>
        <div className="h-10 bg-slate-800 text-white flex justify-center items-center">
          <div className="text-xs">
            這是洪偉製作的元年引擎小助手 APP，供社群玩家使用。
          </div>
        </div>
      </body>
    </html>
  );
}

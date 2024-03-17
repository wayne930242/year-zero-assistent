import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { ReduxProviders } from "./providers";

const notoSansTC = Noto_Sans_TC({
  subsets: ['cyrillic', 'latin', 'latin-ext']
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
        <ReduxProviders>
          {children}
        </ReduxProviders>
      </body>
    </html>
  );
}

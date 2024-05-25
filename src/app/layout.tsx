import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const styreneAWeb = localFont({
  src: [
    {
      path: "./fonts/styrene-a-web/StyreneAWeb-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/styrene-a-web/StyreneAWeb-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/styrene-a-web/StyreneAWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/styrene-a-web/StyreneAWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/styrene-a-web/StyreneAWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/styrene-a-web/StyreneAWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Учебные программы",
  description: "Тестовое задание для Union University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={styreneAWeb.className}>{children}</body>
    </html>
  );
}

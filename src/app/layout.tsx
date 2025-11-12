import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
// @ts-ignore
import "animate.css";
// @ts-ignore
import "./globals.css";
// @ts-ignore
import "../styles/globals.scss";
import { Metadata as myMetadata } from "@/data/websiteDataInfo";

const parisienne = Dancing_Script({
  subsets: ["latin"],
  weight: "500", // only 400 is available for this font
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: myMetadata.title,
  description: myMetadata.description,
  keywords: myMetadata.keywords,
  authors: [{ name: "Huy&Thuong" }],
  icons: {
    icon: {
      url: myMetadata.icon.src,
      type: myMetadata.icon.type,
    },
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    title: myMetadata.title,
    description: myMetadata.description,
    url: myMetadata.url,
    type: "website",
    siteName: "Huy & Thương Wedding",
    images: [
      {
        url: `${myMetadata.url}${myMetadata.image.src}`, // ✅ cần đường dẫn tuyệt đối
        width: 1200, // ✅ chuẩn Facebook, Zalo
        height: 630,
        alt: "Huy & Thương Wedding",
        type: myMetadata.image.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: myMetadata.title,
    description: myMetadata.description,
    images: [`${myMetadata.url}${myMetadata.image.src}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${parisienne.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/navbar";
import { LayoutProps } from "next/dist/lib/metadata/metadata-resolution-primitives";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freestyle",
  description: "Freestyle",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
          lang="en"
          className={`${manrope.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col font-manrope">
      <NavBar />
      {children}
      </body>
      </html>
  );
}
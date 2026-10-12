import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/navbar";
import Footer from "@/app/footer";

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
          lang="pl"
          className={`${manrope.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col font-manrope">
          <NavBar />
          <main className="flex-1">
              {children}

          </main>
          <Footer/>
      </body>
      </html>
  );
}
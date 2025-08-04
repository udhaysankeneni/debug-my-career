import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DebugMyCareer - Helping You Land Your Dream Tech Job",
  description: "Resume writing • Career guidance • Technical mentorship for QA, Data, and Engineering roles. Expert tech career coaching by Uday Sankeneni.",
  keywords: "tech career coaching, resume writing, QA mentorship, automation testing, career guidance, tech interviews",
  openGraph: {
    title: "DebugMyCareer - Helping You Land Your Dream Tech Job",
    description: "Expert tech career coaching and mentorship services",
    url: "https://debugmycareer.com",
    siteName: "DebugMyCareer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

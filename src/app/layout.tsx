import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar"
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
  title: "Dashboard App",
  description: "Dashboard Analytic App with rechart",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${geistSans.variable}bg-gray-100 text-white`}>
        <div className="flex flex-col min-h-screen lg:flex-row">
          <Navbar />
          <main className="flex-1 bg-gray-200 p-8 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

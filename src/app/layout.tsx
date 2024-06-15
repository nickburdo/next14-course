import Footer from "@/components/main-layout/Footer";
import Header from "@/components/main-layout/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js course",
  description: "Next.js course by Michail Nepomnjaschij",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="container mx-auto p-8 flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

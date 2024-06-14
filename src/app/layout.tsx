import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            <Header />

            <main className="container my-auto p-8">{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "XpderGlobal - Bridging Nigeria's Financial Gap",
  description: "Financial inclusion for rural and urban Nigeria. Digital wallets, bill payments, and MSME advisory services since 2020.",
  keywords: "fintech, Nigeria, financial inclusion, digital wallet, bill payments, rural banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

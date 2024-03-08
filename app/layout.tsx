import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
import { workSans } from "@/app/fonts/fonts";
import Footer from "@/components/ui/footer";
import CTAMobile from "@/components/ui/cta-mobile";

export const metadata: Metadata = {
  title: "Titik Dua Ubud",
  description: "Design Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <NavBar />
        <NextTopLoader
          color="#F5F3EB"
          initialPosition={0.08}
          showSpinner={false}
          crawlSpeed={200}
          height={3}
        />

        {children}
        <Footer />
        <CTAMobile />
      </body>
    </html>
  );
}

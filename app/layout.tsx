import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/ui/navbar";
import { workSans } from "@/app/fonts/fonts";

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
        {children}
      </body>
    </html>
  );
}

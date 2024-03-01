import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/ui/navbar';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Titik Dua Ubud',
  description: 'Design Hotel',
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

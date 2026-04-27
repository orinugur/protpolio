import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '김민석 | LLM API 개발자 포트폴리오',
  description: 'Agentic AI, Next.js, CLI 툴 개발을 전문으로 하는 LLM API 개발자 김민석의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AnimatedBackground />
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 180px)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import FlareCursor from '@/components/Cursor/FlareCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Squirrels',
  description: 'Brand Marketing At Ease',
  openGraph: {
    title: 'The Squirrels',
    description: 'Brand Marketing At Ease',
    url: 'thesquirrels.ca',
    siteName: 'thesquirrels',
    type: 'website',
    authors: ['Harsh Raj'],
    images: [
      {
        url: 'https://squirrels-website.vercel.app/logo.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://squirrels-website.vercel.app/logo.png',
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>The Squirrels</title>
        <link rel="icon" href="/group.ico" />
      </head>
      <body className={`${inter.className} scrollbar-hide`}>
        <Toaster />
        <FlareCursor />
        <NavBar />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}

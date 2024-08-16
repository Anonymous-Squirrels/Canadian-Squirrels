import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {Toaster} from "sonner";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Anonymous Squirrels",
  description: "Brand Marketing At Ease",
  openGraph: {
    title: "Anonymous Squirrels",
    description: "Brand Marketing At Ease",
    type: "website",
    authors: ["Kumar Priyanshu", "Souradip Saha"],
    images: [
      {
        url: "https://squirrels-website.vercel.app/logo.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://squirrels-website.vercel.app/logo.png",
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
      <title>Anonymous Squirrels</title>
      <link rel="icon" href="/group.ico"/>
    </head>
    <body className={`${inter.className} scrollbar-hide`}>
    <Toaster/>
    <NavBar/>
    <>{children}</>
    <Footer/>
    </body>
    </html>
  );
}


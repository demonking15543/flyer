'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { CookiesProvider } from "react-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Flyer</title>
       
    
      <body className={inter.className}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>

        <Navbar/>
        {children}
        <Footer/>
        </CookiesProvider>
        </body>
    </html>
  );
}

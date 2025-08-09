"use client";

import { usePathname } from "next/navigation";
// import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/lenisProvider";
import ResumeSticky from "./components/ui/resume-sticky";
import Footer from "./components/footer";
import CustomGSAPWrapper from '@/app/components/ClientWrapper'; // import your wrapper
import CursorFollower from './components/CursorFollower'
import Header from "./components/header";

// export const metadata: Metadata = {
//   title: "My Portfolio",
//   description: "My Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname?.startsWith("/work/") && pathname.split("/").length === 3;

  return (
    <html lang="en">
      <body className={`antialiased max-w-[100vw] overflow-x-hidden dark:bg-black dark:text-white`}>
        <LenisProvider>
           <Header/>
            <CustomGSAPWrapper  />
            {children}
             <Footer />
            <ResumeSticky />
            <CursorFollower />
        </LenisProvider>
      </body>
    </html>
  );
}

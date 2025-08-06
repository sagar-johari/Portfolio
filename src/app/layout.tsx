import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "./components/AnimationProvider";
import LenisProvider from "./components/lenisProvider";
import ResumeSticky from "./components/ui/resume-sticky";
import Footer from "./components/footer";
import CustomGSAPWrapper from '@/app/components/ClientWrapper'; // import your wrapper
import CursorFollower from './components/CursorFollower'
import Header from "./components/header";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased max-w-[100vw] overflow-x-hidden dark:bg-black dark:text-white`}>
        <LenisProvider>
          <AnimationProvider>
          <Header/>
            <CustomGSAPWrapper  />
            {children}
            <Footer />
            <ResumeSticky />
            <CursorFollower />
          </AnimationProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

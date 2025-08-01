import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "./components/AnimationProvider";
import LenisProvider from "./components/lenisProvider";
import ResumeSticky from "./components/ui/resume-sticky";
import Footer from "./components/footer";
import { CustomGSAP } from "./utils/custom-gsap";

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
            <CustomGSAP />
            {children}
            <ResumeSticky />
            <Footer />
          </AnimationProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

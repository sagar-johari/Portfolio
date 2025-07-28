import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "./components/AnimationProvider";
import ResumeSticky from "./components/ui/resume-sticky";

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
      <body className={`antialiased`}>
        <AnimationProvider>
          {children}
          <ResumeSticky />
        </AnimationProvider>
      </body>
    </html>
  );
}

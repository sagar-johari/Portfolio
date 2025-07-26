import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "./components/AnimationProvider";

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
        </AnimationProvider>
      </body>
    </html>
  );
}

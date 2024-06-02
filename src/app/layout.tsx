import type { Metadata } from "next";
import { Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import { NavbarDemo } from "@/components/navbarDemo";

const inter = Inter({ subsets: ["latin"] });

const marker = Permanent_Marker({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marker.variable}  bg-black`}>
        <NavbarDemo></NavbarDemo>
        <div>{children}</div>
      </body>
    </html>
  );
}

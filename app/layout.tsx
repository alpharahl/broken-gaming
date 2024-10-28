import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/nav/main-nav";

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
      <body
        className={""}
      >
        <MainNav/>
        {children}
      </body>
    </html>
  );
}

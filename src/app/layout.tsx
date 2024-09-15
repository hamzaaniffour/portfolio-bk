import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import Anima from "../components/Anima";
import { Space_Grotesk } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: "100"
});
const inte = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BK Portfolio",
  description: "best portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inte.className}>
  <Anima>{children}</Anima>
      </body>
    </html>
  );
}

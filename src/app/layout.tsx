import type { Metadata } from "next";
import "@/assets/scss/themes.scss"
import "./globals.css";
import { Inter, Poppins,Aclonica } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"]
 });
const aclonica = Aclonica({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aclonica",
})
export const metadata: Metadata = {
  title: "Asset-management Next",
  description: "Generated by create next app",
  icons: {
    icon: "public/asset/image/logo.png",
  }
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${aclonica.variable} font-poppins`}>{children}</body>
    </html>
  );
}

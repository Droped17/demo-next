import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/organisms/Navbar";
import Footer from "@/ui/organisms/Footer";
import Provider from "./Provider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import connectDB from "./utils/db";
config.autoAddCss = false;


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: ""
};

export default async function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // await connectDB();
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

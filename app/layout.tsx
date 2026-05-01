import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "interview.co",
  description: "made  by @CoreTech7704 for interview.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className="bg-base-100 text-base-content">
      <Navbar />
        <section>
          {children}
        </section>
      <Footer />
      </body>
    </html>
  );
}

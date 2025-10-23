import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar"; // ✅ Make sure this imports the navbar
import Footer from "./(components)/Footer"; // optional if you have one
import ScrollToTop from "./(components)/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CompTIA A+ Bootcamp | Bright Horizon Institute",
  description:
    "Get CompTIA A+ certified in just 5 days! Hands-on training, expert instructors, and real-world skills to kickstart your IT career.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-800`}
      >
        {/* ✅ Transparent floating navbar on all pages */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* ✅ Page content */}
        <main>{children} <ScrollToTop /></main>

        {/* Optional footer */}
        {/* <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}

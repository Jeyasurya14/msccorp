import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Michael Scott Contractor LLC | National Retail Construction",
  description: "Specializing in retail store remodels in malls and outlet malls across the United States. Professional, reliable, national construction services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased flex flex-col min-h-screen bg-brand-light text-brand-dark font-sans`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

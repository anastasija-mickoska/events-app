import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Events App",
  description: "Events App",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>
        <Header />
        <main className="min-h-screen relative">
          {children}     
          {modal && <div className="z-50">{modal}</div>} 
        </main>
        <Footer />
      </body>
    </html>
  );
}

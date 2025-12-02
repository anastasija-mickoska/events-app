import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalRenderer from "./ModalRenderer";
import { AuthProvider } from "./context/AuthContext";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Events App",
  description: "Events App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen relative">
            {children}
            <ModalRenderer />
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

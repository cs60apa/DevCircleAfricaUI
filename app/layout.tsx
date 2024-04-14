import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { jost } from "../components/ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevCircle Africa",
  description:
    "A community of developers in Africa which aims at empowering developers in various technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

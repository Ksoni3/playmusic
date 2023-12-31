import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "Built by Kamal Soni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}

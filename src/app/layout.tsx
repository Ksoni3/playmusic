import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./router";

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
        <main className="mt-4 w-11/12 mx-auto"> {children}</main>
      </body>
    </html>
  );
}

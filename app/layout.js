// app/layout.js (Server Component)
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./css/globals.scss";
import ClientComponents from "./client-components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of shreyansh yadav - Software Developer",
  description: "This is the portfolio..."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientComponents>{children}</ClientComponents>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
// app/layout.js (SERVER COMPONENT - no "use client")
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./css/globals.scss";
import ClientComponents from "./client-components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of shreyansh yadav - Software Developer",
  description:
    "This is the portfolio of Shreyansh. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
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
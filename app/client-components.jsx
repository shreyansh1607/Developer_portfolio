// app/ClientApp.jsx
"use client";
import dynamic from 'next/dynamic';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";

// Dynamically import ScrollToTop with SSR disabled
const ScrollToTop = dynamic(
  () => import('./components/helper/scroll-to-top'),
  { ssr: false }
);

export default function ClientApp({ children }) {
  return (
    <>
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
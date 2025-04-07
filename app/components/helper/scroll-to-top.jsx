"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { isBrowser, safeWindow } from "@/utils/is-browser";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    if (!isBrowser()) return;
    
    const win = safeWindow();
    if (!win) return;
    
    const handleScroll = () => {
      if (win.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    win.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      win.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => {
    if (!isBrowser()) return;
    
    const win = safeWindow();
    if (!win) return;
    
    win.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
"use client"

import Lottie from "lottie-react";
import { isBrowser } from "@/utils/is-browser";
import { useState, useEffect } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  // Only render the Lottie component on the client side
  if (!isMounted || !isBrowser()) {
    return <div style={{ width: '95%', height: '200px' }}></div>;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
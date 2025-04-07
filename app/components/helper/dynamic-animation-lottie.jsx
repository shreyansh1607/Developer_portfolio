"use client";

import dynamic from 'next/dynamic';

// Create a dynamic import for the AnimationLottie component with ssr disabled
const DynamicAnimationLottie = dynamic(
  () => import('./animation-lottie'),
  { ssr: false } // This ensures the component only renders on the client side
);

export default DynamicAnimationLottie; 
"use client";

import dynamic from 'next/dynamic';

// Create a dynamic import for the ScrollToTop component with ssr disabled
const DynamicScrollToTop = dynamic(
  () => import('./scroll-to-top'),
  { ssr: false } // This ensures the component only renders on the client side
);

export default DynamicScrollToTop; 
"use client";

import dynamic from 'next/dynamic';

// Create a dynamic import for the GlowCard component with ssr disabled
const DynamicGlowCard = dynamic(
  () => import('./glow-card'),
  { ssr: false } // This ensures the component only renders on the client side
);

export default DynamicGlowCard; 
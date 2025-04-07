"use client";

import dynamic from 'next/dynamic';

// Create a dynamic import for the ContactForm component with ssr disabled
const DynamicContactForm = dynamic(
  () => import('./contact-form'),
  { ssr: false } // This ensures the component only renders on the client side
);

export default DynamicContactForm; 
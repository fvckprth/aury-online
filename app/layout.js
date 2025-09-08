import React from 'react';
import './globals.css';

export const metadata = {
  // Replace with Aury's actual domain
  metadataBase: new URL('https://www.aury.online'),
  title: '© Aury Hernandez ⸺ Hospitality & Partnerships. Based in NYC.',
  description:
    'Director of Food, Beverage & Partnerships at NeueHouse; formerly co-owner at WEST10WEST and opening team at PUBLIC Hotel. I build hospitality-driven employee, member, and brand experiences in New York.',
  keywords: [
    'Aury Hernandez',
    'Hospitality',
    'Partnerships',
    'Employee Experience',
    'Events',
    'Food & Beverage',
    'NeueHouse',
    'WEST10WEST',
    'PUBLIC Hotel',
    'Ian Schrager Company',
    'New York'
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/og-image.jpg' // swap for Aury’s image
  },
  alternates: {
    canonical: 'https://www.aury.online'
  },
  openGraph: {
    title: '© Aury Hernandez ⸺ Hospitality & Partnerships. Based in NYC.',
    description:
      'Director of Food, Beverage & Partnerships at NeueHouse; formerly co-owner at WEST10WEST and opening team at PUBLIC Hotel. I build hospitality-driven employee, member, and brand experiences in New York.',
    url: 'https://www.aury.online',
    images: ['/og-image.jpg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    // Replace with Aury’s handle if applicable
    // site: '@auryhernandez',
    title: '© Aury Hernandez ⸺ Hospitality & Partnerships. Based in NYC.',
    description:
      'Director of Food, Beverage & Partnerships at NeueHouse; formerly co-owner at WEST10WEST and opening team at PUBLIC Hotel. I build hospitality-driven employee, member, and brand experiences in New York.',
    images: ['/og-image.jpg']
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


import React from 'react';
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: '©Parth Patel',
  description: 'Founder of East Park, P307, and a few other things. Based in New York City.',
  siteUrl: 'https://www.parth.ski',
  imageUrl: 'https://www.parth.ski/path-to-image/loopyloopy.jpg',
  twitterHandle: '@fvckprth'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Parth Patel, East Park, P307, New York Founder, Tech, Startups, Films, Music" />
        <link rel="canonical" href={metadata.siteUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* OpenGraph and Twitter card information for better share previews */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} />

        {/* For language-specific targeting */}
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <body>{children}</body>
    </html>
  );
}


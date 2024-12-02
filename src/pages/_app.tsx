// This is the main application file for the Next.js project.
// It wraps around all pages and can be used to include global styles or components.
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [isAmplifyDomain, setIsAmplifyDomain] = useState(false);

  useEffect(() => {
    // Check if we're on the amplifyapp.com domain
    if (window.location.hostname.includes('amplifyapp.com')) {
      setIsAmplifyDomain(true);
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      AOS.init({
        once: true,
      });
    }, 1000);
  }, [AOS]);

  return (
    <>
      <Head>
        {isAmplifyDomain && (
          <>
            <meta name="robots" content="noindex,nofollow" />
            <meta name="googlebot" content="noindex,nofollow" />
          </>
        )}
      </Head>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
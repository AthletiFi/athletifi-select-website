// This file is used to augment the HTML and body tags of the Next.js application.
// It's useful for including global CSS or setting meta tags.
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* This will be overridden by _app.tsx when needed */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
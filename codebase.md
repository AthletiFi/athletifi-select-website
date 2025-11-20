# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

.vercel

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# next.config.js

```js
// This is the configuration file for Next.js.
// It sets up various settings for the Next.js application.

const nextConfig = {
  // Enable React Strict Mode for better debugging and performance.
  reactStrictMode: true,
  // Configure image domains for Next.js Image component.
  images: {
    domains: ["vidalco.in"], // Add "localhost" here for local development
  },
};

module.exports = nextConfig;

```

# package.json

```json
{
  "name": "athletifi-website",
  "version": "0.2.0",
  "description": "Official website for AthletiFi",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/AthletiFi/athletifi-website.git"
  },
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/AthletiFi/athletifi-website/issues"
  },
  "dependencies": {
    "@types/node": "20.4.5",
    "@types/react": "18.2.17",
    "@types/react-dom": "18.2.7",
    "@types/react-slick": "^0.23.10",
    "aos": "^2.3.4",
    "autoprefixer": "10.4.14",
    "axios": "^1.4.0",
    "moment": "^2.29.4",
    "next": "13.4.12",
    "nextjs-google-analytics": "^2.3.3",
    "phone": "^3.1.42",
    "postcss": "8.4.27",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-loading-skeleton": "^3.3.1",
    "react-slick": "^0.29.0",
    "react-toastify": "^9.1.3",
    "slick-carousel": "^1.8.1",
    "tailwindcss": "3.3.3",
    "typescript": "5.1.6"
  },
  "devDependencies": {
    "@types/aos": "^3.0.4"
  }
}

```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public/about_coaches_meta.jpg

This is a binary file of the type: Image

# public/about_program_meta.jpg

This is a binary file of the type: Image

# public/assets/fonts/HelveticaMedExt.ttf

This is a binary file of the type: Binary

# public/assets/fonts/HelveticaMedExtObl.ttf

This is a binary file of the type: Binary

# public/assets/fonts/HelveticaNeueLight.ttf

This is a binary file of the type: Binary

# public/assets/fonts/HelveticaNeueRegular.ttf

This is a binary file of the type: Binary

# public/assets/fonts/SegoeUI.ttf

This is a binary file of the type: Binary

# public/assets/fonts/SegoeUIBold.ttf

This is a binary file of the type: Binary

# public/assets/fonts/SegoeUIBoldItalic.ttf

This is a binary file of the type: Binary

# public/assets/fonts/SegoeUIItalic.ttf

This is a binary file of the type: Binary

# public/assets/img/png/about-hero-center-shadow.png

This is a binary file of the type: Image

# public/assets/img/png/anderson-nft-img.png

This is a binary file of the type: Image

# public/assets/img/png/bg_blur.png

This is a binary file of the type: Image

# public/assets/img/png/check-icon.png

This is a binary file of the type: Image

# public/assets/img/png/football_img_2.png

This is a binary file of the type: Image

# public/assets/img/png/football_net.png

This is a binary file of the type: Image

# public/assets/img/png/football.png

This is a binary file of the type: Image

# public/assets/img/png/hero_bg.png

This is a binary file of the type: Image

# public/assets/img/png/jose-nft-img.png

This is a binary file of the type: Image

# public/assets/img/png/layar-over-mission-image.png

This is a binary file of the type: Image

# public/assets/img/png/left-ball.png

This is a binary file of the type: Image

# public/assets/img/png/left-shadow-about-hero.png

This is a binary file of the type: Image

# public/assets/img/png/left-shadow.png

This is a binary file of the type: Image

# public/assets/img/png/lending.png

This is a binary file of the type: Image

# public/assets/img/png/meet_our_strategic_bg.png

This is a binary file of the type: Image

# public/assets/img/png/news-playing-image-card.png

This is a binary file of the type: Image

# public/assets/img/png/our-mission-grid-img.png

This is a binary file of the type: Image

# public/assets/img/png/our-mission-nft-img.png

This is a binary file of the type: Image

# public/assets/img/png/Placeholder/news-insights.png

This is a binary file of the type: Image

# public/assets/img/png/portrait-young.png

This is a binary file of the type: Image

# public/assets/img/png/stebi-nft-img.png

This is a binary file of the type: Image

# public/assets/img/png/unique-football.png

This is a binary file of the type: Image

# public/assets/img/png/what-we-do-img.jpg

This is a binary file of the type: Image

# public/assets/img/png/what-we-do-nft-img.png

This is a binary file of the type: Image

# public/assets/img/png/what-we-do-shadow.png

This is a binary file of the type: Image

# public/assets/img/png/white-check-icon.png

This is a binary file of the type: Image

# public/assets/img/png/yellow-shadow-hero.png

This is a binary file of the type: Image

# public/assets/img/svg/back_to_top.svg

This is a file of the type: SVG Image

# public/assets/img/svg/bg_stats_reimagined.svg

This is a file of the type: SVG Image

# public/assets/img/svg/blue-underline.svg

This is a file of the type: SVG Image

# public/assets/img/svg/Copa_de_la_Liga_de_Espana.svg

This is a file of the type: SVG Image

# public/assets/img/svg/football_blur.svg

This is a file of the type: SVG Image

# public/assets/img/svg/grid-lines.svg

This is a file of the type: SVG Image

# public/assets/img/svg/hero_grid.svg

This is a file of the type: SVG Image

# public/assets/img/svg/Instagram.svg

This is a file of the type: SVG Image

# public/assets/img/svg/logo.svg

This is a file of the type: SVG Image

# public/assets/img/svg/news-grid-line.svg

This is a file of the type: SVG Image

# public/assets/img/webp/about-hero-darren.webp

This is a binary file of the type: Image

# public/assets/img/webp/about-hero-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/anderson-nft-img-new.webp

This is a binary file of the type: Image

# public/assets/img/webp/anderson-nft-img-OLD.webp

This is a binary file of the type: Image

# public/assets/img/webp/castle.webp

This is a binary file of the type: Image

# public/assets/img/webp/check-icon.png

This is a binary file of the type: Image

# public/assets/img/webp/coach-aj.webp

This is a binary file of the type: Image

# public/assets/img/webp/coach-brian.webp

This is a binary file of the type: Image

# public/assets/img/webp/coach-darren.webp

This is a binary file of the type: Image

# public/assets/img/webp/coach-justin.webp

This is a binary file of the type: Image

# public/assets/img/webp/coach-with-players.webp

This is a binary file of the type: Image

# public/assets/img/webp/coaches-on-blue.webp

This is a binary file of the type: Image

# public/assets/img/webp/colin-nft-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/dashboard-mockup.webp

This is a binary file of the type: Image

# public/assets/img/webp/diving-goalkeeper.webp

This is a binary file of the type: Image

# public/assets/img/webp/expensive_football_2.webp

This is a binary file of the type: Image

# public/assets/img/webp/expensive_football.webp

This is a binary file of the type: Image

# public/assets/img/webp/gen-soccer-player.webp

This is a binary file of the type: Image

# public/assets/img/webp/header_bg.webp

This is a binary file of the type: Image

# public/assets/img/webp/hero_bg.webp

This is a binary file of the type: Image

# public/assets/img/webp/hero_female_player_2_original.webp

This is a binary file of the type: Image

# public/assets/img/webp/hero_female_player_2.webp

This is a binary file of the type: Image

# public/assets/img/webp/hero_female_player_original.webp

This is a binary file of the type: Image

# public/assets/img/webp/hero_female_player.webp

This is a binary file of the type: Image

# public/assets/img/webp/jose-nft-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/jude-nft-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/meet_our_strategic_bg.webp

This is a binary file of the type: Image

# public/assets/img/webp/meet_our_strategic_profile.webp

This is a binary file of the type: Image

# public/assets/img/webp/news-hero-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/our_mission_nft_img_OLD.webp

This is a binary file of the type: Image

# public/assets/img/webp/our_strategic_bg.webp

This is a binary file of the type: Image

# public/assets/img/webp/phoenix.webp

This is a binary file of the type: Image

# public/assets/img/webp/platform-screenshot.webp

This is a binary file of the type: Image

# public/assets/img/webp/player-card-7.webp

This is a binary file of the type: Image

# public/assets/img/webp/player-image-center.webp

This is a binary file of the type: Image

# public/assets/img/webp/player-image-left.webp

This is a binary file of the type: Image

# public/assets/img/webp/player-image-right.webp

This is a binary file of the type: Image

# public/assets/img/webp/sign-up-hero-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/signup-biting-medal.webp

This is a binary file of the type: Image

# public/assets/img/webp/sm_Unique-section-bg.webp

This is a binary file of the type: Image

# public/assets/img/webp/soccer-team.webp

This is a binary file of the type: Image

# public/assets/img/webp/space.webp

This is a binary file of the type: Image

# public/assets/img/webp/stebi-nft-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/stebi-nft-mission.webp

This is a binary file of the type: Image

# public/assets/img/webp/Unique-section-bg.webp

This is a binary file of the type: Image

# public/assets/img/webp/what-we-do-img.webp

This is a binary file of the type: Image

# public/assets/img/webp/white-check-icon.png

This is a binary file of the type: Image

# public/fav_icon.png

This is a binary file of the type: Image

# public/favicon.ico

This is a binary file of the type: Binary

# public/home_meta.jpg

This is a binary file of the type: Image

# public/next.svg

This is a file of the type: SVG Image

# public/player_cards_meta.jpg

This is a binary file of the type: Image

# public/sign_up_meta.jpg

This is a binary file of the type: Image

# README.md

```md
# AthletiFi Website
This is the repository for the athletifiselect.com website.

AthletiFi Select is a youth soccer program that provides a competitive environment and a rich cultural experience for young athletes during their break from club soccer. Our mission is to offer exceptional exposure opportunities, both locally and internationally, fostering the development of each player's skills and soccer acumen.
We are committed to providing a competitive and enriching environment for young athletes. Our mission is to offer comprehensive training programs that not only enhance soccer skills but also foster cultural experiences and broad exposure. We believe in nurturing talent during breaks from club soccer, focusing on individual growth, teamwork, and a deeper understanding of the game.

## Technology Stack

### Front-End Tools

- **Framework**: Next.js
- **Programming Language**: TypeScript
- **CSS Framework**: Tailwind
- **Form Validation**: Use form
- **Code Formatting**: ESLint and Prettier

### Back-End Tools

- **CMS**: Strapi

## Getting Started

1. Clone the repository and navigate to the project directory.
2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

   or

   \`\`\`bash
   yarn install
   \`\`\`

3. Run the development server:
  
   \`\`\`bash
   npm run dev
   \`\`\`
  
   or
  
   \`\`\`bash
   yarn dev
   \`\`\`

4. Open `http://localhost:3000` with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

### Back-End Installation

1. Strapi is a next-gen headless CMS that allows for content-rich experiences.
2. Create a new Strapi app:

   \`\`\`bash
   yarn create strapi-app my-project --quickstart
   \`\`\`

3. Run the development server:

   \`\`\`bash
   yarn run development
   \`\`\`

   or

   \`\`\`bash
   npm run development
   \`\`\`


```

# src/components/about-cards/PlayerDashboardDevelopment.tsx

```tsx
import React from "react";
import { BlueShodow, UnderLIneText } from "../common/Icon";
import Image from "next/image";
import Link from "next/link";
import BlueButton from "../common/BlueButton";

const PlayerDashboardDevelopment = () => {
  return (
    <section className="pt-5 pb-5 sm:mb-14 sm:pb-12 lg:mb-0 relative">
      <div className="absolute top-0 xl:-top-[70px] -end-[80px]  xl:w-[250px] xl:h-[380px] z-0">
        <Image
          className="max-w-[300px] me-0"
          src="/assets/img/png/football.png"
          width={300}
          height={286}
          alt="what we do foot ball image"
        />
      </div>
      <Image
        className="absolute -top-[250px] end-0 z-0"
        src="/assets/img/png/what-we-do-shadow.png"
        width={448}
        height={448}
        alt="shadow"
      />
      <span className="absolute top-50 start-0 -z-10">
        <BlueShodow />
      </span>
      <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative">
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          {/* Title */}
          <h2 className=" p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4">
            <span className="relative ">Soccer Development</span>
            <span className="lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 flex flex-col items-center text-primary text-lgxl font-HelveticaNeueRegular">
              Visualized with the AthletiFi Dashboard
            </span>
          </h2>

          {/* Image */}
          <div className="flex justify-center items-center py-6">
            <Image
              src="/assets/img/webp/platform-screenshot.webp"
              width={800}
              height={800}
              alt="Dashboard"
            />
          </div>

          {/* Text Content */}
          <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
            We understand that, as a parent, you want the best for your young
            soccer stars. That's why we're thrilled to introduce you to the
            AthletiFi Player Dashboard - the perfect tool to follow your young
            soccer star. 
          </p>
          <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
          The AthletiFi Dashboard, accessible through these digital player cards, brings to life the intricate details of a player's on-field performance, allowing friends, family, and scouts to stay updated with the athlete's progress. Experience a visual feast of data, from skill ratings and game-by-game analyses to video highlights and developmental trends. 
          </p>
        </div>
      </div>
      <div className="flex lg:justify-center justify-center lg:mt-10 mt-7 lg:pb-5 lg:mb-0">
        <Link
          href="https://www.athleti.fi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlueButton text="Learn more at www.athleti.fi" />
        </Link>
      </div>
    </section>
  );
};

export default PlayerDashboardDevelopment;

```

# src/components/about-cards/SoccerDevelopment.tsx

```tsx
// WhatWeDo.tsx

// This component renders the "What We Do" section on the "About Us" page.
// It outlines the services and products offered by the company.

import React from "react";
import Image from "next/image";
import { BlueShodow, UnderLIneText } from "../common/Icon";

const WhatWeDo = () => {
  return (
    <>
      <div className="relative py-6 lg:pt-10 sm:pt-20 pt-14">
        {/* SHADOW IMG */}
        <Image
          className="absolute top-[30%] -translate-y-24 end-0"
          src="/assets/img/png/what-we-do-shadow.png"
          width={500}
          height={500}
          alt="what we do shadow"
        />
        <span className="absolute top-50 -start-10">
          <BlueShodow />
        </span>
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2">
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-offset="200"
                className="flex flex-col justify-center h-full lg:pe-6 xl:p-0 text-center lg:text-start lg:mt-14"
              >
                <h2 className="font-HelveticaNeueMedium font-medium text-[26px]  md:text-5xl sm:text-4xl leading-[60px] text-[#FDFEFF] md:mb-4">
                  <span className="relative">
                    What we do
                    <span className="absolute -bottom-2 left-0">
                      <UnderLIneText />
                    </span>
                  </span>
                </h2>
                <p className="font-Segoe font-normal text-md md:max-w-[530px] text-[#FDFEFF] mx-auto lg:ms-0 opacity-80 leading-7 sm:pt-4">
                  We are a sports technology app that makes travel soccer teams
                  more accessible for all players. Our mission is to level the
                  playing field for enrollment in travel teams and club soccer
                  -- to give every athlete equal access to exposure from scouts.
                  A portion of every sale goes directly to teams.
                </p>
              </div>
            </div>
            <div className="lg:w-5/12 w-9/12 sm:w-3/5 mx-auto lg:me-0 mt-8">
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-offset="100"
                className="flex justify-center lg:justify-start"
              >
                <Image
                  src="/assets/img/webp/what-we-do-img.webp"
                  width={496}
                  height={603}
                  alt="AthletiFi player card example"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

```

# src/components/about-cards/TrackTriumphs.tsx

```tsx
import React from 'react';
import Image from 'next/image';
import { UnderLIneText, BlueShodow } from '../common/Icon';

const TrackTriumphs = () => {
  return (
    <section className='pt-5 pb-10 sm:mb-14 sm:pb-12 lg:mb-0 relative'>
      {/* Existing background images */}
      <div className='absolute top-0 xl:-top-[70px] -start-[0px]  xl:w-[250px] xl:h-[380px] z-0'>
        <Image
          className='max-w-[300px] me-0'
          src='/assets/img/png/football_net.png'
          width={300}
          height={286}
          alt='what we do foot ball image'
        />
      </div>
      <Image
        className='absolute -top-[250px] end-0 z-0'
        src='/assets/img/png/what-we-do-shadow.png'
        width={448}
        height={448}
        alt='shadow'
      />
      <span className='absolute top-50 start-0 z-0'>
        <BlueShodow />
      </span>

      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          
          {/* Title */}
          <h2 className='p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4'>
            <span className='relative '>
              A new way to follow your soccer star
            </span>
          </h2>

          {/* Flex container for Text and Image */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Text Content */}
            <div className="md:w-1/2 md:pr-6 md:pl-10 p-3">
              {/* Paragraphs */}
              <p className='font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
                Step into the future of youth soccer engagement with AthletiFi's innovative player cards. These aren't just any collectible cards; they're your all-access pass to the dynamic world of a young athlete's soccer journey. 
              </p>
              <p className='font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
                Each card is adorned with the player's image and essential details, and transforms into a gateway when paired with our groundbreaking AthletiFi Dashboard. By scanning the unique QR code on each card, fans, family, and coaches are instantly connected to a real-time, interactive realm of comprehensive player analytics and performance insights. 
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center items-center p-3">
              <Image
                src="/assets/img/webp/player-card-7.webp" 
                width={350}
                height={350}
                alt="Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackTriumphs;

```

# src/components/about-coaches/Coach1.tsx

```tsx
// OurMission.tsx

// This component renders the "Our Mission" section on the "About Us" page.
// It provides information about the company's mission and objectives.

import React from 'react';
import Image from 'next/image';
import { UnderLIneText } from '../common/Icon';
import { CenterBlueShadow } from '../common/Icon';

const Coach1 = () => {
  const coachImage = 'coach-aj';

  return (
    <section className='sm:py-10 py-8 lg:mt-14 relative'>
      <div className='lg:w-[600px] lg:h-[700px] w-1/4 absolute -end-20 top-10 z-0'>
        {/* GRID IMG */}
        <Image
          src='/assets/img/png/our-mission-grid-img.png'
          width={692}
          height={200}
          alt='grid-image'
          className='w-full h-full'
        />
      </div>
      {/* SHADOW IMG */}
      <Image
        className='absolute top-100 end-0 z-0'
        src='/assets/img/png/what-we-do-shadow.png'
        width={608}
        height={448}
        alt='shadow'
      />
      <span className='absolute -top-48 start-[45%] -translate-x-1/2 z-0'>
        <CenterBlueShadow />
      </span>
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 sm:py-2 z-10 relative'>
        <div className='flex lg:flex-row flex-col-reverse justify-between'>
          <div className='lg:w-5/12 xl:w-[531px] min-[1530px]:w-[40%] w-9/12 sm:w-3/5 mx-auto lg:ms-0  mt-6 sm:mt-8 lg:mt-0'>
            <div
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='linear'
              data-aos-delay='100'
              data-aos-offset='200'
              className='flex justify-center lg:justify-start'
            >
              <Image
                src={`/assets/img/webp/${coachImage}.webp`}
                // className='xl:h-[603px] xl:w-[505px] min-[1530px]:w-full'
                width={1200}
                height={1200}
                alt='our misssion sec image'
              />
            </div>
          </div>
          <div className='lg:w-1/2 xl:w-[506px] min-[1530px]:w-1/2 '>
            <div
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='linear'
              data-aos-delay='600'
              data-aos-offset='100'
              className='flex flex-col justify-center h-full text-center min-[1530px]:items-end lg:text-start'
            >
              <h2 className='font-HelveticaNeueMedium md:text-5xl sm:text-4xl text-[26px] min-[1530px]:w-[506px] sm:mt-6 text-[#FDFEFF] font-medium leading-[60px] md:mb-4'>
                <span className='relative'>
                  Ashley “AJ” Johnson
                  <span className='absolute -bottom-2 left-0'>
                    <UnderLIneText />
                  </span>
                </span>
              </h2>
              <p className='font-normal font-Segoe text-md leading-7 text-[#FDFEFF] text-center mx-auto lg:ms-0 min-[1530px]:me-0 lg:text-start md:max-w-[506px] xl:w-auto opacity-80 m-0 font-sans sm:pt-4'>
                AJ brings a rich coaching background with over 18 years of
                experience at the club, high school, and college levels. Known
                for his holistic approach to player development, AJ emphasizes
                nurturing good football habits, fostering a resilient mindset,
                and maintaining a passion for the game. His deep understanding
                of soccer's mental aspects, combined with tactical knowledge,
                makes him an excellent mentor for young athletes in the
                AthletiFi Select program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach1;

```

# src/components/about-coaches/Coach2.tsx

```tsx
// WhatWeDo.tsx

// This component renders the "What We Do" section on the "About Us" page.
// It outlines the services and products offered by the company.

import React from 'react';
import Image from 'next/image';
import { BlueShodow, UnderLIneText } from '../common/Icon';

const Coach2 = () => {
  const coachImage = "coach-brian"

  return (
    <>
      <div className='relative py-6 lg:pt-10 sm:pt-10 pt-8'>
        {/* SHADOW IMG */}
        <Image
          className='absolute top-[30%] -translate-y-24 end-0'
          src='/assets/img/png/what-we-do-shadow.png'
          width={500}
          height={500}
          alt='what we do shadow'
        />
        <span className='absolute top-50 -start-10'>
          <BlueShodow />
        </span>
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-1/2'>
              <div
                data-aos='fade-up'
                data-aos-duration='400'
                data-aos-easing='linear'
                data-aos-delay='100'
                data-aos-offset='200'
                className='flex flex-col justify-center h-full lg:pe-6 xl:p-0 text-center lg:text-start '
              >
                <h2 className='font-HelveticaNeueMedium font-medium text-[26px]  md:text-5xl sm:text-4xl leading-[60px] text-[#FDFEFF] md:mb-4'>
                  <span className='relative'>
                    Brian Blasy
                    <span className='absolute -bottom-2 left-0'>
                      <UnderLIneText />
                    </span>
                  </span>
                </h2>
                <p className='font-Segoe font-normal text-md md:max-w-[530px] text-[#FDFEFF] mx-auto lg:ms-0 opacity-80 leading-7 sm:pt-4'>
                  Brian Blasy's diverse background spans playing at Lancaster
                  University in the United Kingdom and as a kicker/punter in
                  NCAA Division 1 at Temple University. His coaching credentials
                  are equally impressive, as he holds a La Liga methodology
                  expert-level diploma and a USSF license. As the Director and
                  Co-Owner of Villanova Soccer Academy and a coach at Northeast
                  High School Soccer, Brian's experience in both playing and
                  coaching at different levels brings a unique perspective to
                  the AthletiFi Select program.
                </p>
              </div>
            </div>
            <div className='lg:w-5/12 xl:w-[531px] min-[1530px]:w-[40%] w-9/12 sm:w-3/5 mx-auto lg:me-0 mt-8'>
              <div
                data-aos='fade-up'
                data-aos-duration='400'
                data-aos-easing='linear'
                data-aos-delay='500'
                data-aos-offset='100'
                className='flex justify-center lg:justify-start'
              >
                <Image
                  src={`/assets/img/webp/${coachImage}.webp`}
                  width={1200}
                  height={1200}
                  alt='what we do sec img'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coach2;

```

# src/components/about-coaches/Coach3.tsx

```tsx
// OurMission.tsx

// This component renders the "Our Mission" section on the "About Us" page.
// It provides information about the company's mission and objectives.

import React from 'react';
import Image from 'next/image';
import { UnderLIneText } from '../common/Icon';
import { CenterBlueShadow } from '../common/Icon';

const Coach3 = () => {
  const coachImage = 'coach-darren';

  return (
    <section className='sm:py-10 py-8 lg:mt-14 relative'>
      <div className='lg:w-[600px] lg:h-[700px] w-1/4 absolute -end-20 top-10 z-0'>
        {/* GRID IMG */}
        <Image
          src='/assets/img/png/our-mission-grid-img.png'
          width={692}
          height={200}
          alt='grid-image'
          className='w-full h-full'
        />
      </div>
      {/* SHADOW IMG */}
      <Image
        className='absolute top-100 end-0 z-0'
        src='/assets/img/png/what-we-do-shadow.png'
        width={608}
        height={448}
        alt='shadow'
      />
      <span className='absolute -top-48 start-[45%] -translate-x-1/2 z-0'>
        <CenterBlueShadow />
      </span>
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 sm:py-2 z-10 relative'>
        <div className='flex lg:flex-row flex-col-reverse justify-between'>
        <div className='lg:w-5/12 xl:w-[531px] min-[1530px]:w-[40%] w-9/12 sm:w-3/5 mx-auto lg:ms-0  mt-6 sm:mt-8 lg:mt-0'>
            <div
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='linear'
              data-aos-delay='100'
              data-aos-offset='200'
              className='flex justify-center lg:justify-start'
            >
              <Image
                src={`/assets/img/webp/${coachImage}.webp`}
                // className='xl:h-[603px] xl:w-[505px] min-[1530px]:w-full'
                width={800}
                height={800}
                alt='our misssion sec image'
              />
            </div>
          </div>
          <div className='lg:w-1/2 xl:w-[506px] min-[1530px]:w-1/2 '>
            <div
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='linear'
              data-aos-delay='600'
              data-aos-offset='100'
              className='flex flex-col justify-center h-full text-center min-[1530px]:items-end lg:text-start'
            >
              <h2 className='font-HelveticaNeueMedium md:text-5xl sm:text-4xl text-[26px] min-[1530px]:w-[506px] sm:mt-6 text-[#FDFEFF] font-medium leading-[60px] md:mb-4'>
                <span className='relative'>
                  Darren John
                  <span className='absolute -bottom-2 left-0'>
                    <UnderLIneText />
                  </span>
                </span>
              </h2>
              <p className='font-normal font-Segoe text-md leading-7 text-[#FDFEFF] text-center mx-auto lg:ms-0 min-[1530px]:me-0 lg:text-start md:max-w-[506px] xl:w-auto opacity-80 m-0 font-sans sm:pt-4'>
                Darren John is renowned for his dynamic coaching style and
                ability to connect with young players. With a decade of
                experience in youth soccer coaching, Darren specializes in skill
                development and strategic gameplay. His coaching journey
                includes successful stints at various youth academies, where he
                has helped cultivate the talents of numerous players who went on
                to play at higher levels. Darren’s approach is player-centric,
                emphasizing individual skill enhancement within a team
                framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach3;

```

# src/components/about-coaches/Coach4.tsx

```tsx
// WhatWeDo.tsx

// This component renders the "What We Do" section on the "About Us" page.
// It outlines the services and products offered by the company.

import React from 'react';
import Image from 'next/image';
import { BlueShodow, UnderLIneText } from '../common/Icon';

const Coach4 = () => {
  const coachImage = "coach-justin"

  return (
    <>
      <div className='relative py-6 lg:pt-10 sm:pt-10 pt-8'>
        {/* SHADOW IMG */}
        <Image
          className='absolute top-[30%] -translate-y-24 end-0'
          src='/assets/img/png/what-we-do-shadow.png'
          width={500}
          height={500}
          alt='what we do shadow'
        />
        <span className='absolute top-50 -start-10'>
          <BlueShodow />
        </span>
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-1/2'>
              <div
                data-aos='fade-up'
                data-aos-duration='400'
                data-aos-easing='linear'
                data-aos-delay='100'
                data-aos-offset='200'
                className='flex flex-col justify-center h-full lg:pe-6 xl:p-0 text-center lg:text-start '
              >
                <h2 className='font-HelveticaNeueMedium font-medium text-[26px]  md:text-5xl sm:text-4xl leading-[60px] text-[#FDFEFF] md:mb-4'>
                  <span className='relative'>
                    Justin Johnson
                    <span className='absolute -bottom-2 left-0'>
                      <UnderLIneText />
                    </span>
                  </span>
                </h2>
                <p className='font-Segoe font-normal text-md md:max-w-[530px] text-[#FDFEFF] mx-auto lg:ms-0 opacity-80 leading-7 sm:pt-4'>
                Justin Johnson is a passionate soccer coach who has been playing for the past 19 years. He played for four years at a semi-professional academy in York, England while pursuing a degree in sports and exercise science. Justin is an assistant coach at The Haverford School, where he emphasizes respect, teamwork, and perseverance and is committed to shaping individuals who excel in character and discipline. He brings a unique blend of expertise, enthusiasm, and a deep love for the game to our coaching team at AthletiFi Select.
                </p>
              </div>
            </div>
            <div className='lg:w-5/12 xl:w-[531px] min-[1530px]:w-[40%] w-9/12 sm:w-3/5 mx-auto lg:me-0 mt-8'>
              <div
                data-aos='fade-up'
                data-aos-duration='400'
                data-aos-easing='linear'
                data-aos-delay='500'
                data-aos-offset='100'
                className='flex justify-center lg:justify-start'
              >
                <Image
                  src={`/assets/img/webp/${coachImage}.webp`}
                  width={1200}
                  height={1200}
                  alt='what we do sec img'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coach4;

```

# src/components/about-coaches/Philosophy.tsx

```tsx
import React from "react";
import { BlueShodow, UnderLIneText } from "../common/Icon";
import Image from "next/image";

const WhoweAre = () => {
  return (
    <section className="pt-10 pb-16 sm:mb-14 sm:pb-12 lg:mb-20 relative">
      <div className="absolute top-0 xl:-top-[70px] -end-[80px]  xl:w-[250px] xl:h-[380px] -z-10">
        <Image
          className="max-w-[176px] me-0 -z-10"
          src="/assets/img/png/football.png"
          width={176}
          height={286}
          alt="what we do foot ball image"
        />
      </div>
      <Image
        className="absolute -top-[250px] end-0 -z-10"
        src="/assets/img/png/what-we-do-shadow.png"
        width={448}
        height={448}
        alt="shadow"
      />
      <span className="absolute top-50 start-0 -z-10">
        <BlueShodow />
      </span>
      <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative">
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          {/* Flex container for Text and Image */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text Content */}
            <div className="md:w-1/2 md:pr-6 md:pl-10 p-3">
              {/* Title */}
              <h2 className="font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[60px] relative z-20 text-center md:mb-4">
                <span className="relative ">
                  Philosophy
                  <span className="absolute -bottom-2 left-0 -z-10">
                    {/* <UnderLIneText /> */}
                  </span>
                </span>
              </h2>

              <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
                The coaches at AthletiFi Select follow the La Liga methodology,
                which is known for its emphasis on technical skills, tactical
                awareness, and game intelligence. This approach focuses on
                player-centric training methods that encourage creativity,
                precision, and strategic thinking on the field. The
                methodology's core principles are applied to create training
                programs that cater to the individual needs of each player. This
                fosters an environment where young athletes can excel and
                develop a profound love for the game.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center items-center p-3">
              <Image
                src="/assets/img/svg/Copa_de_la_Liga_de_Espana.svg"
                width={300}
                height={300}
                alt="Philosophy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoweAre;

```

# src/components/about-program/BeyondSummer.tsx

```tsx
// WhatWeDo.tsx

// This component renders the "What We Do" section on the "About Us" page.
// It outlines the services and products offered by the company.

import React from 'react';
import Image from 'next/image';
import { BlueShodow, UnderLIneText } from '../common/Icon';

const WhatWeDo = () => {
  return (
    <section className='pt-5 pb-10 sm:mb-14 sm:pb-12 lg:mb-0 relative'>
      <div className='absolute top-0 xl:-top-[70px] -start-[0px]  xl:w-[250px] xl:h-[380px] z-0'>
        {/* RIGHT FOOTBALL IMG */}
        <Image
          className='max-w-[300px] me-0'
          src='/assets/img/png/football_net.png'
          width={300}
          height={286}
          alt='what we do foot ball image'
        />
      </div>
      {/* SHADOW IMG */}
      <Image
        className='absolute -top-[250px] end-0 -z-10'
        src='/assets/img/png/what-we-do-shadow.png'
        width={448}
        height={448}
        alt='shadow'
      />
      <span className='absolute top-50 start-0 -z-10'>
        <BlueShodow />
      </span>
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          <div
            data-aos='fade-up'
            data-aos-duration='400'
            data-aos-easing='ease-in-sine'
            data-aos-delay='300'
            data-aos-offset='100'
          >
            <h2 className='p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4'>
              <span className='relative '>
              Beyond Summer: Year-Round Opportunities
                {/* <span className='absolute -bottom-2 left-0 z-0'>
                  <UnderLIneText />
                </span> */}
              </span>
            </h2>
            <p className='font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
              AthletiFi Select extends beyond the summer, offering a series of
              year-round programs tailored to various developmental stages and
              competitive levels. These programs might include seasonal training
              camps, specialized skill clinics, and tournament participation
              opportunities, each designed to cater to the evolving needs of
              young athletes. Our year-round initiatives aim to continuously
              engage and challenge players, ensuring consistent development and
              exposure to diverse soccer experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

```

# src/components/about-program/Goalkeeping.tsx

```tsx
import React from "react";
import { BlueShodow, UnderLIneText } from "../common/Icon";
import Image from "next/image";

const GoalkeepingSection = () => {
  return (
    <section className="pt-10 pb-5 sm:mb-14 sm:pb-12 lg:mb-0 relative">
      <div className="absolute top-0 xl:-top-[70px] -end-[80px]  xl:w-[250px] xl:h-[380px] z-0">
        <Image
          className="max-w-[300px] me-0"
          src="/assets/img/png/football_net.png"
          width={300}
          height={286}
          alt="what we do foot ball image"
        />
      </div>
      <Image
        className="absolute -top-[250px] end-0 z-0"
        src="/assets/img/png/what-we-do-shadow.png"
        width={448}
        height={448}
        alt="shadow"
      />
      <span className="absolute top-50 start-0 z-0">
        <BlueShodow />
      </span>
      <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative">
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          
          {/* Title */}
          <h2 className="p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[60px] relative z-20 text-center md:mb-4">
            <span className="relative ">
              Specialized Goalkeeping Training
              <span className="absolute -bottom-2 left-0 z-0">
                <UnderLIneText />
              </span>
            </span>
          </h2>

          {/* Flex container for Text and Image */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Text Content */}
            <div className="md:w-1/2 md:pr-6 md:pl-10 p-3">
              <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
                AthletiFi Select's specialized goalkeeping training is a unique opportunity for aspiring goalkeepers. It's designed to develop not only the physical and technical aspects of goalkeeping, but also to foster a deeper, strategic understanding of this pivotal role on the soccer field.
              </p>
              <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
                Leading this segment is AJ, a coach with over ten years of dedicated experience in goalkeeper training and the current head goalkeeper coach at Penn State Abington College. His credentials are extensive, including a National D coaching license and Goalkeeper 1 & 2 Certification, enriched by La Liga Methodology.
              </p>
              <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
                AJ's training sessions are a blend of rigorous practice and strategic learning, with a strong emphasis on improving decision-making skills under pressure, which is crucial in the high-stakes environment of goalkeeping. The goal is to develop agile, mentally sharp goalkeepers who can confidently handle the challenges of the game.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center items-center p-3">
              <Image
                src="/assets/img/webp/diving-goalkeeper.webp" 
                width={550}
                height={550}
                alt="Goalkeeping"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalkeepingSection;




```

# src/components/about-program/SummerSelect.tsx

```tsx
import React from 'react';
import Image from 'next/image';
import { UnderLIneText } from '../common/Icon';
import { CenterBlueShadow, BlueShodow } from '../common/Icon';
import Description from '../sign-up/Description';

const SummerSelectDescription = () => {
  return (
    <section className='pt-5 pb-5 sm:mb-14 sm:pb-12 lg:mb-0 relative'>
      <div className='absolute top-0 xl:-top-[70px] -end-[80px] xl:w-[250px] xl:h-[380px] z-0'>
        <Image
          className='max-w-[300px] me-0'
          src='/assets/img/png/football.png'
          width={300}
          height={286}
          alt='what we do foot ball image'
        />
      </div>
      <Image
        className='absolute -top-[250px] end-0 z-0'
        src='/assets/img/png/what-we-do-shadow.png'
        width={448}
        height={448}
        alt='shadow'
      />
      <span className='absolute top-50 start-0 z-0'>
        <BlueShodow />
      </span>

      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0 after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          <div
            data-aos='fade-up'
            data-aos-duration='400'
            data-aos-easing='ease-in-sine'
            data-aos-delay='300'
            data-aos-offset='100'
          >
            <h2 className='p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4'>
              <span className='relative'>
                Summer Select 2025
              </span>
              <span className="lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 flex flex-col items-center text-primary text-lgxl font-HelveticaNeueRegular">
                June 10—July 27, 2025
              </span>
            </h2>

            <div className='flex justify-center items-center my-6'>
              <Image
                src='/assets/img/webp/soccer-team.webp'
                width={640}
                height={360}
                alt='Summer Select Program'
              />
            </div>

            <p className='font-Segoe font-normal text-md leading-7 text-start pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
              <span className='block pb-2'>
                Building on our incredible 2024 success, where multiple AthletiFi Select teams clinched tournament championships, we're excited to present our Summer Select 2025 program. This comprehensive summer program combines elite coaching, intensive training, and competitive tournament play to help young athletes reach their full potential.
              </span>
              <span className='block pb-2'>
                Our program is meticulously designed for U9-U17 players seeking to elevate their game. With two training sessions per week and participation in prestigious tournaments, we provide the perfect blend of skill development and competitive experience. Our coaches follow the La Liga methodology, emphasizing technical skills, tactical awareness, and game intelligence.
              </span>
              <span className='block pb-2'>
                Summer 2024 saw extraordinary success with four teams winning championships at the EDP Summer Sizzler. Join us in 2025 to be part of our winning tradition and take your game to the next level! Early bird registration is now open - secure your spot today.
              </span>
            </p>

            <div className='mt-8'>
              <Description />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerSelectDescription;
```

# src/components/common/api/Api.tsx

```tsx

import { axiosRequest } from "./ApiHelper";

// NEWS GET REQUEST HANDLER
// Function to handle GET requests for news articles from the Strapi CMS.
// Path: The specific API endpoint within the Strapi CMS for news articles.

export const GetRequestHandler = async (path:any) =>
// Use the axiosRequest function to make a GET request to the Strapi CMS.
  await axiosRequest(
    "GET",
    `${path}`
  );

// NEWSLETTER POST REQUEST HANDLER
// Function to handle POST requests to the Strapi CMS.
// Path: The specific API endpoint within the Strapi CMS for newsletters.
// Data: The payload to be sent in the POST request.
export const PostRequestHandler = async (path:any,data:any) =>
// Function to handle POST requests for newsletters to the Strapi CMS.
// Path: The specific API endpoint within the Strapi CMS for newsletters.
// Data: The payload to be sent in the POST request.
  await axiosRequest(
    "POST",
    path,
    data
  );
```

# src/components/common/api/ApiHelper.tsx

```tsx
import Axios from "axios";
// const SERVER_URL = "http://127.0.0.1:1337/api";
// to test locally
// const localHost = "http://localhost:1337/api";


//The below Server URL is for AthletiFi's Strapi CMS implementation, which is hosted on the vidalco.in domain
const SERVER_URL = "https://vidalco.in/api";

// Function to make API requests to the Strapi CMS using Axios.
// Method: The HTTP method (GET, POST, etc.) to use for the request.
// URL: The specific API endpoint within the Strapi CMS.
// Data: Optional payload for POST or PUT requests.

export async function axiosRequest(method:any, url:any, data = null) {
  try {
    // Make the API request to the Strapi CMS and await the response.
    let response = await Axios({
      method: method,
      url: `${SERVER_URL}${url}`,
      // url: `${localHost}${url}`,
      data: data,
    });
    // Return the data received from the Strapi CMS.
    return await response.data;
  } catch (error) {
    // Handle any errors that occur during the API request.
    return error;
  }
}

```

# src/components/common/api/ApiUrls.tsx

```tsx

// ALL NEWS LIST API URL
// Function to construct the API URL for fetching a list of news articles from the Strapi CMS.
// The URL includes query parameters to populate related fields and sort the articles by creation date.
export const NewsListApiHandler=()=>{
    return `/news-lists?populate=image&populate=author&populate=categories&sort=createdAt:desc`;
}
// FILTER NEWS LIST API URL
export const NewsListFilterApiHandler=()=>{
    return `/news-lists?populate=image&populate=author&populate=categories&sort=createdAt:desc`;
}

// NEWS DETAIL API URL
// Function to construct the API URL for fetching details of a specific news article from the Strapi CMS.
// Slug: The unique identifier (slug) for the news article.
export const NewsDetailApiHandler=(slug:any)=>{
    return `/news-lists/?populate=image&populate=content&filters[slug][$eq]=${slug}&populate=author`;
}

// POST CREATE API
// Function to construct the API URL for posting to newsletters in the Strapi CMS.
export const PostNewsLetterHandler=()=>{
    return `/join-newsletters`;
}

// POST CREATE API
// Function to construct the API URL for posting to summer select data in the Strapi CMS.
export const PostSummerSelectData=()=>{
    return `/summer-select-signups`;
}
```

# src/components/common/Backtotop.tsx

```tsx
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Backtotop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollPosition > 200 ? (
        <div
          className="fixed  backtotop sm:bottom-20 bottom-14 right-7 z-40 md:max-h-12 md:max-w-[48px] max-h-9 max-w-[36px]  cursor-pointer bg-skyblue rounded-lg border-[2px] border-skyblue hover:border-white duration-300"
          onClick={() => scrollToTop()}
        >
          {/* UP-ARROW-IMG */}
          <div className="w-full h-full flex justify-center items-center">
            <Image
              alt="up-arrow"
              src="/assets/img/svg/back_to_top.svg"
              width={48}
              height={48}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Backtotop;

```

# src/components/common/BlueButton.tsx

```tsx
import React from "react";
import { ArrowButton } from "./Icon";

interface BlueButtonProps {
  text: string;
}

const BlueButton: React.FC<BlueButtonProps> = (props) => {
  return (
    <>
      <span className="sm:px-[24px] px-4 sm:py-[14.5px] py-2 flex bg-skyblue text-base font-semibold text-black font-Segoe leading-6 gap-[6px] group border border-skyblue hover:bg-black hover:text-skyblue join_now_btn transition duration-300 ease-in-out cursor-pointer">
        {props.text}
        {/* Arrow */}
        <span className="group-hover:translate-x-3 transition duration-300 ease-out">
          <ArrowButton />
        </span>
      </span>
    </>
  );
};

export default BlueButton;

```

# src/components/common/CommonHero.tsx

```tsx
// CommonHero.tsx

import Image from "next/image";
import React from "react";

// COMMON HEADING
interface HeroProps {
  title: string;
  subtitle: string;
  heading: string;
  subHeading?: string; // Add subHeading to the interface
}

const CommonHero: React.FC<{ hero: HeroProps }> = ({ hero }) => {
  return (
    <>
      <section className="relative">
        {/* HERO SHADOW */}
        <Image
          className="absolute start-1/2 -top-28 -z-10 -translate-x-1/2"
          src="/assets/img/png/about-hero-center-shadow.png"
          alt="about-hero-shadow"
          width={1494}
          height={1494}
        />
        <Image
          className="absolute end-0 md-top-28 -z-10 -translate-x-0"
          src="/assets/img/png/yellow-shadow-hero.png"
          alt="about-hero-shadow"
          width={1494}
          height={1494}
        />
        <Image
          className="absolute start-0 md-top-28 -z-10 translate-x-0"
          src="/assets/img/png/left-shadow-about-hero.png"
          alt="about-hero-shadow"
          width={1494}
          height={1494}
        />
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10">
          <div className="sm:pb-16 sm:pt-[160px] xl:pb-[126px] xl:pt-[170px] pb-16 pt-36">
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-offset="100"
              className="font-HelveticaNeueMedium font-medium text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl text-white sm:leading-[66px] text-center leading-[110%]"
            >
              {hero.heading}
            </h2>
            {hero.subHeading && (
              <h3
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-easing="linear"
                data-aos-offset="150"
                className="mt-4 font-HelveticaNeueMedium font-medium text-[20px] sm:text-[30px] lg:text-[35px] xl:text-xl text-white sm:leading-[45px] text-center leading-[110%]"
              >
                {hero.subHeading}
              </h3>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonHero;

```

# src/components/common/Footer.tsx

```tsx
// This component renders the footer of the website.
// It includes copyright information and footer links.

import React, { useState, useEffect } from "react";
import {
  CancelIcon,
  FacebookIcon,
  InstaIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "./Icon";
import Link from "next/link";
import SocialPopUp from "./SocialPopUp";

const Footer = () => {
  // SOCIAL-ICON POPUP
  const [socialIcon, setSocialIcon] = useState(true);
  const SocialIcon = () => {
    setSocialIcon(!socialIcon);
  };
  
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="border-t border-[#00C7FF]">
        <div className=" container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto  flex flex-col md:flex-row gap-5 items-center justify-between py-7">
          {/* PAGE LINKS */}
          <ul className=" flex gap-lg-10 gap-5">
            <li>
              <Link
                className="text-white text-base font-Segoe relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto "
                aria-label="privacy-policy"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-Segoe relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto "
                aria-label="terms-of-use"
                href="/terms-of-use"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
          <p className=" text-white text-sm font-Segoe opacity-70">
            @{year} Athletifi
          </p>
          {/* SOCIAL-ICON */}
          <div className="flex gap-4">
            <Link
              aria-label="Tik-Tok"
              className="hover:-translate-y-1 transition duration-300 ease-out"
              href="https://www.tiktok.com/@athletifi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokIcon />
            </Link>
            <Link
              aria-label="facebook"
              className="hover:-translate-y-1 transition duration-300 ease-out"
              href="https://www.facebook.com/profile.php?id=61553263775533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              aria-label="twitter"
              className="hover:-translate-y-1 transition duration-300 ease-out"
              href="https://twitter.com/Athletifi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </Link>
            <Link
              aria-label="instagram"
              className="hover:-translate-y-1 transition duration-300 ease-out"
              href="https://www.instagram.com/athletifi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaIcon />
            </Link>
            <Link
              aria-label="linkedin"
              className="hover:-translate-y-1 transition duration-300 ease-out"
              href="https://www.linkedin.com/company/athletifi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
   
      </footer>
    </>
  );
};

export default Footer;

```

# src/components/common/Header.tsx

```tsx
// This component renders the header of the website.
// It includes navigation links and other header elements.

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowButton,
  FacebookIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "./Icon";
import { PageLogo, CancelIcon } from "./Icon";
import SocialPopUp from "./SocialPopUp";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const path = useRouter().pathname;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (open) {
        document.body.classList.add("overflow_hidden");
      } else {
        document.body.classList.remove("overflow_hidden");
      }
    }
  }, [open]);

  // Navbar scroll handling
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);
      const isVisible = prevScrollPos > currentScrollPos;
      setIsVisible(isVisible);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav social icon handling
  const [navSocialIcon, setNavSocialIcon] = useState(true);
  const SocialIcon = () => {
    setOpen(false);
    setNavSocialIcon(!navSocialIcon);
  };
  const SocialIconDropDown = () => {
    setNavSocialIcon(!navSocialIcon);
  };

  return (
    <>
      <div
        ref={navbarRef}
        id="nav_bar"
        className={`max-w-[5560px] mx-auto navbar fixed top-0 black w-full bg-bgnav py-2 z-40 ${
          scrollPosition > 200 ? "slideUp" : "slideDown"
        } ${isVisible ? "slideDown" : "slideUp"}`}
      >
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Home">
              <PageLogo />
            </Link>

            {/* Mobile Menu Button */}
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-col md:hidden bg-transparent border-0 relative z-50 cursor-pointer"
              aria-label={open ? 'Close Menu' : 'Open Menu'}
            >
              <span className="h-[3px] w-[35px] bg-white inline-block rounded-sm"></span>
              <span className="my-2 h-[3px] w-[27px] bg-white inline-block rounded-sm"></span>
              <span className="h-[3px] w-[35px] bg-white inline-block rounded-sm"></span>
            </div>

            <div
              className={
                open
                  ? "nav_open h-full w-full z-20 fixed top-0 left-0 duration-500 transition-all bg-[#000b13] min-h-screen"
                  : "md:relative fixed sm:hidden md:block min-h-screen sm:min-h-full -left-full sm:left-0 duration-500 sm:ml-0 nav_open sm:mt-0 z-40 top-0"
              }
            >
              {/* Navigation Links */}
              <ul className="flex items-center gap-[25px] sm:gap-[40px] flex-col md:flex-row h-full justify-center">
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/"
                    aria-label="Home"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/" ? "!opacity-100" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about-coaches"
                    aria-label="Meet Our Coaches"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow-blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/about-coaches" ? "!opacity-100 " : ""
                    }`}
                  >
                    Coaches
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about-program"
                    aria-label="Program Details"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow-blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/about-program" ? "!opacity-100 " : ""
                    }`}
                  >
                    Program
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about-cards"
                    aria-label="Player Cards Information"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow-blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/about-cards" ? "!opacity-100 " : ""
                    }`}
                  >
                    Player Cards
                  </Link>
                </li>

                {/* Social Icons Menu Item */}
                <li className="social_icons_show sm:mt-7 sm:pb-7 hidden sm:block">
                  <button
                    onClick={SocialIcon}
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/SocialIcons" ? "!opacity-100" : ""
                    }`}
                    aria-label="Social Media Links"
                  >
                    Socials
                  </button>
                  <div className="hidden social_btns">
                    <div className="relative h-full z-50">
                      <SocialPopUp />
                    </div>
                  </div>
                </li>
                <li
                  className="sm:hidden text-center"
                  onClick={SocialIconDropDown}
                >
                  <button
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/SocialIcons" ? "!opacity-100" : ""
                    }`}
                    aria-label="Social Media Links"
                  >
                    Socials
                  </button>
                  <div
                    className={` mt-3 h-[180px] overflow-scroll scroll_bar_hidden ${
                      navSocialIcon ? "!hidden" : "block"
                    }`}
                  >
                    <div className="flex gap-4 flex-col">
                      {/* SOCIAL ICONS LINKS */}
                      <Link
                        className="hover:-translate-y-1 transition duration-300 ease-out flex items-center"
                        href="https://www.tiktok.com/@athletifi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TiktokIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Tiktok
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://www.facebook.com/profile.php?id=61553263775533"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Facebook
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://twitter.com/Athletifi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Twitter
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://www.instagram.com/athletifi/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/img/svg/Instagram.svg"
                          alt="grid-lines"
                          width={32}
                          height={32}
                        />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Instagram
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://in.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Linkedin
                        </span>
                      </Link>
                      <Link
                        href="/sign-up"
                        className="sm:px-[24px] px-4 sm:py-[14.5px] py-2 flex bg-skyblue text-base font-semibold text-white font-Segoe leading-6 gap-[6px] group border border-skyblue hover:bg-black hover:text-skyblue join_now_btn transition duration-300 ease-in-out social_btn_contact_us"
                      >
                        Contact Us
                        <span className="group-hover:translate-x-3 transition duration-300 ease-out">
                          <ArrowButton />
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/sign-up"
                    onClick={() => setOpen(false)}
                    className="pt-[10px] pb-[14px] px-[24px] text-skyblue border border-skyblue font-semibold text-base font-Segoe duration-300 hover:bg-skyblue hover:text-white md:hidden"
                    aria-label="Sign Up for Summer Select"
                  >
                    Sign up for ☀️ Summer Select ☀️
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop Sign Up Button */}
            <Link
              href="/sign-up"
              onClick={() => setOpen(false)}
              className="pt-[10px] pb-[14px] px-[24px] text-skyblue border border-skyblue font-semibold text-base font-Segoe duration-300 hover:bg-skyblue hover:text-white hidden md:inline-block"
              aria-label="Sign Up for Summer Select"
            >
              Sign up for ☀️ Summer Select ☀️ 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
```

# src/components/common/Helper.tsx

```tsx
// RECENT NEWS COMPONENT MAP
// NOTE: This is dummy data used during development.
export const RecentNews = [
  {
    TrainingImg: "/assets/img/webp/traning.webp",
    heading: "(DUMMY DATA)Training for Triumph: Intense Player Practice Regimens",
    date: "23 June 1923",
    pera: "(DUMMY DATA)we delve into the realm of player practices, designed. Witness the captivating drama unfold as these formidable opponents ",
    delay: "0",
  },
  {
    TrainingImg: "/assets/img/webp/a battle-of-football.webp",
    heading: "(DUMMY DATA)Clash of Equals: A Battle of Football Titans",
    date: "23 June 1856",
    pera: "(DUMMY DATA)we delve into the realm of player practices, designed. Witness the captivating drama unfold as these formidable opponents ",
    delay: "400",
  },
  {
    TrainingImg: "/assets/img/webp/news3.webp",
    heading: "(DUMMY DATA)Last-Gasp Glory: The Thrilling Pursuit ",
    date: "23 June 1492",
    pera: "we delve into the realm of player practices, designed. Witness the captivating drama unfold as these formidable opponents ",
    delay: "800",
  },
];
// LATEST NEWS MAP
export const MatchNews = [
  {
    // matchimage: "/assets/img/webp/news1-match.webp",
    matchimage: "/assets/img/webp/space.webp",
    delay: "100",
  },
  {
    // matchimage: "/assets/img/webp/news2-match.webp",
    matchimage: "/assets/img/webp/space.webp",
    delay: "400",
  },
];

// ==== SKELETON LOADER ====

export const placeholderData = [
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
  {
    heading:"",
    para:"",
    btn:"",
  },
];

```

# src/components/common/Icon.tsx

```tsx
// TIKTOK ICON
export const TiktokIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <g clipPath="url(#clip0_303_1560)">
        <path
          d="M30.4547 0.474609H1.65469C1.23034 0.474609 0.823375 0.64318 0.523317 0.943238C0.223258 1.2433 0.0546875 1.65026 0.0546875 2.07461V30.8746C0.0546875 31.299 0.223258 31.7059 0.523317 32.006C0.823375 32.306 1.23034 32.4746 1.65469 32.4746H30.4547C30.879 32.4746 31.286 32.306 31.5861 32.006C31.8861 31.7059 32.0547 31.299 32.0547 30.8746V2.07461C32.0547 1.65026 31.8861 1.2433 31.5861 0.943238C31.286 0.64318 30.879 0.474609 30.4547 0.474609ZM25.2051 14.4346C25.0307 14.4517 24.8555 14.4607 24.6803 14.4618C23.731 14.463 22.7964 14.2277 21.9608 13.7771C21.1253 13.3266 20.4152 12.6749 19.8947 11.881V20.6698C19.895 21.9551 19.5142 23.2115 18.8003 24.2803C18.0865 25.3491 17.0717 26.1821 15.8844 26.6741C14.697 27.1661 13.3904 27.2949 12.1299 27.0442C10.8693 26.7936 9.71139 26.1747 8.80259 25.2659C7.89379 24.3571 7.27492 23.1992 7.02426 21.9386C6.7736 20.6781 6.90241 19.3715 7.39439 18.1841C7.88638 16.9968 8.71944 15.982 9.78821 15.2682C10.857 14.5543 12.1134 14.1735 13.3987 14.1738C13.5347 14.1738 13.6659 14.1866 13.8003 14.1946V17.3946C13.3526 17.3404 12.8986 17.3783 12.4662 17.506C12.0337 17.6336 11.6319 17.8484 11.2855 18.1371C10.9391 18.4257 10.6553 18.7822 10.4517 19.1845C10.2481 19.5868 10.129 20.0266 10.1015 20.4767C10.0741 20.9267 10.139 21.3777 10.2922 21.8018C10.4455 22.2258 10.6838 22.6141 10.9926 22.9427C11.3015 23.2713 11.6742 23.5332 12.088 23.7125C12.5017 23.8917 12.9478 23.9845 13.3987 23.985C14.2886 24.0011 15.1492 23.6673 15.7955 23.0554C16.4418 22.4435 16.8221 21.6024 16.8547 20.713L16.8867 5.78341H19.9491C20.0889 7.11374 20.692 8.35257 21.6528 9.28325C22.6136 10.2139 23.871 10.7772 25.2051 10.8746V14.4346Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_1560">
          <rect
            x="0.0546875"
            y="0.474609"
            width="32"
            height="32"
            rx="5"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// FACEBOOK ICON
export const FacebookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <g clipPath="url(#clip0_303_1562)">
        <path
          d="M28.0547 0.474609H4.05469C1.84869 0.474609 0.0546875 2.26861 0.0546875 4.47461V28.4746C0.0546875 30.6806 1.84869 32.4746 4.05469 32.4746H28.0547C30.2607 32.4746 32.0547 30.6806 32.0547 28.4746V4.47461C32.0547 2.26861 30.2607 0.474609 28.0547 0.474609Z"
          fill="#1976D2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.0547 16.4746H22.0547V12.4746C22.0547 11.3706 22.9507 11.4746 24.0547 11.4746H26.0547V6.47461H22.0547C20.4634 6.47461 18.9373 7.10675 17.812 8.23197C16.6868 9.35719 16.0547 10.8833 16.0547 12.4746V16.4746H12.0547V21.4746H16.0547V32.4746H22.0547V21.4746H25.0547L27.0547 16.4746Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_1562">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.0546875 0.474609)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// WHITE FACEBOOK ICON
export const WhiteFacebookIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1081_705)">
        <path
          d="M28 0H4C1.794 0 0 1.794 0 4V28C0 30.206 1.794 32 4 32H28C30.206 32 32 30.206 32 28V4C32 1.794 30.206 0 28 0Z"
          fill="#0E202B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 14H17.6667V11.3333C17.6667 10.5973 18.264 10.6666 19 10.6666H20.3333V7.33331H17.6667C16.6058 7.33331 15.5884 7.75474 14.8382 8.50489C14.0881 9.25503 13.6667 10.2724 13.6667 11.3333V14H11V17.3333H13.6667V24.6666H17.6667V17.3333H19.6667L21 14Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_1081_705">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
// TWITTER ICON
export const TwitterIcon = () => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="5" fill="black" />
      <path
        d="M10.4311 11L17.8563 20.928L10.3843 29H12.0661L18.6079 21.9327L23.8934 29H29.6162L21.773 18.5136L28.728 11H27.0462L21.0217 17.5086L16.1538 11H10.4311ZM12.9042 12.2387H15.5332L27.1427 27.7613H24.5137L12.9042 12.2387Z"
        fill="white"
      />
    </svg>
  );
};
// WHITE Twitter ICON
export const WhiteTwitterIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="5" fill="#0E202B" />
      <path
        d="M8.34505 8.79999L14.2852 16.7424L8.30762 23.2H9.65304L14.8865 17.5462L19.1149 23.2H23.6931L17.4186 14.8109L22.9826 8.79999H21.6372L16.8175 14.0069L12.9233 8.79999H8.34505ZM10.3236 9.79092H12.4268L21.7144 22.2091H19.6112L10.3236 9.79092Z"
        fill="white"
      />
    </svg>
  );
};
// INSTAGRAM ICON
export const InstaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <g clipPath="url(#clip0_303_1567)">
        <path
          d="M26.2541 -2.03125H5.85656C1.26833 -2.03125 -2.45117 1.68825 -2.45117 6.27649V26.674C-2.45117 31.2623 1.26833 34.9818 5.85656 34.9818H26.2541C30.8423 34.9818 34.5618 31.2623 34.5618 26.674V6.27649C34.5618 1.68825 30.8423 -2.03125 26.2541 -2.03125Z"
          fill="url(#paint0_linear_303_1567)"
        />
        <path
          d="M10.3693 4.37891H21.9079C22.1643 4.50711 22.5489 4.50711 22.8053 4.63532C23.9305 4.81767 24.9825 5.31022 25.8431 6.05761C26.7038 6.80499 27.3389 7.7776 27.6771 8.86611C27.8665 9.49338 27.9953 10.1374 28.0617 10.7892V22.0713C27.8785 23.5012 27.3505 24.8651 26.5233 26.0457C25.8136 26.8679 24.9239 27.5154 23.9233 27.9379C22.9227 28.3604 21.8382 28.5464 20.754 28.4816H11.1386C9.42261 28.5649 7.73542 28.0177 6.39497 26.9431C5.57984 26.2389 4.93657 25.3575 4.51438 24.3664C4.09218 23.3754 3.90223 22.3009 3.95906 21.2251V12.2507C3.93788 11.607 3.98082 10.9628 4.08726 10.3277C4.21672 9.01327 4.75715 7.77313 5.63174 6.78346C6.50634 5.79379 7.6706 5.10494 8.95908 4.81481L10.3693 4.37891ZM6.39497 16.5585V21.5585C6.3403 22.1952 6.42548 22.8362 6.64454 23.4365C6.8636 24.0369 7.21124 24.5821 7.66313 25.0339C8.11501 25.4858 8.66021 25.8335 9.26055 26.0525C9.86089 26.2716 10.5019 26.3568 11.1386 26.3021C14.4719 26.4303 17.8053 26.4303 21.1386 26.3021C24.0874 26.3021 25.754 24.5072 25.8822 21.5585C26.0105 18.2251 26.0105 14.8918 25.8822 11.5584C25.9155 10.9267 25.8155 10.2951 25.5889 9.70456C25.3622 9.11399 25.014 8.57766 24.5667 8.13037C24.1194 7.68308 23.5831 7.33482 22.9925 7.10818C22.4019 6.88155 21.7703 6.7816 21.1386 6.81482C17.8053 6.68661 14.4719 6.68661 11.1386 6.81482C10.5019 6.76015 9.86089 6.84533 9.26055 7.06439C8.66021 7.28345 8.11501 7.63109 7.66313 8.08298C7.21124 8.53486 6.8636 9.08006 6.64454 9.6804C6.42548 10.2807 6.3403 10.9217 6.39497 11.5584V16.5585Z"
          fill="white"
        />
        <path
          d="M9.9082 16.6102C9.91159 14.9451 10.5745 13.3492 11.7519 12.1718C12.9293 10.9945 14.5252 10.3315 16.1903 10.3281C17.8461 10.3609 19.425 11.0333 20.5961 12.2044C21.7672 13.3755 22.4396 14.9544 22.4724 16.6102C22.469 18.2753 21.806 19.8712 20.6286 21.0486C19.4513 22.226 17.8554 22.8889 16.1903 22.8923C14.5344 22.8595 12.9556 22.1871 11.7845 21.016C10.6134 19.8449 9.941 18.266 9.9082 16.6102ZM16.1903 12.6358C15.4116 12.6232 14.6469 12.8433 13.9941 13.2681C13.3413 13.6928 12.8302 14.3028 12.5264 15.0199C12.2225 15.7369 12.1397 16.5284 12.2885 17.2928C12.4373 18.0573 12.811 18.7599 13.3617 19.3106C13.9124 19.8613 14.615 20.235 15.3794 20.3838C16.1439 20.5326 16.9354 20.4498 17.6524 20.1459C18.3695 19.8421 18.9795 19.331 19.4042 18.6782C19.829 18.0254 20.0491 17.2607 20.0365 16.482C20.0365 15.4619 19.6312 14.4836 18.9099 13.7623C18.1886 13.0411 17.2104 12.6358 16.1903 12.6358Z"
          fill="white"
        />
        <path
          d="M21.0615 10.0706C21.0543 9.86667 21.0892 9.66342 21.164 9.47352C21.2388 9.28362 21.3518 9.11115 21.4961 8.96684C21.6404 8.82252 21.8129 8.70946 22.0028 8.63468C22.1927 8.5599 22.396 8.525 22.5999 8.53217C22.9991 8.55916 23.3749 8.72992 23.6578 9.0128C23.9406 9.29568 24.1114 9.6715 24.1384 10.0706C24.1384 10.4787 23.9763 10.87 23.6878 11.1585C23.3993 11.447 23.008 11.6091 22.5999 11.6091C22.1919 11.6091 21.8006 11.447 21.5121 11.1585C21.2236 10.87 21.0615 10.4787 21.0615 10.0706Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_303_1567"
          x1="-4.81016"
          y1="37.0331"
          x2="38.7798"
          y2="-5.91589"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED576" />
          <stop offset="0.26" stopColor="#F47133" />
          <stop offset="0.61" stopColor="#BC3081" />
          <stop offset="1" stopColor="#4C63D2" />
        </linearGradient>
        <clipPath id="clip0_303_1567">
          <rect
            x="0.0546875"
            y="0.474609"
            width="32"
            height="32"
            rx="5"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// WHITE WHATSAPP ICON
export const WhiteWhatsAppIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="5" fill="#0E202B" />
      <path
        d="M23 8.91006C22.0832 7.98399 20.9912 7.24973 19.7876 6.75011C18.5841 6.25049 17.2931 5.99552 15.99 6.00006C10.53 6.00006 6.08 10.4501 6.08 15.9101C6.08 17.6601 6.54 19.3601 7.4 20.8601L6 26.0001L11.25 24.6201C12.7 25.4101 14.33 25.8301 15.99 25.8301C21.45 25.8301 25.9 21.3801 25.9 15.9201C25.9 13.2701 24.87 10.7801 23 8.91006ZM15.99 24.1501C14.51 24.1501 13.06 23.7501 11.79 23.0001L11.49 22.8201L8.37 23.6401L9.2 20.6001L9 20.2901C8.17775 18.977 7.74114 17.4593 7.74 15.9101C7.74 11.3701 11.44 7.67006 15.98 7.67006C18.18 7.67006 20.25 8.53006 21.8 10.0901C22.5675 10.854 23.1757 11.7627 23.5894 12.7635C24.0031 13.7642 24.214 14.8372 24.21 15.9201C24.23 20.4601 20.53 24.1501 15.99 24.1501ZM20.51 17.9901C20.26 17.8701 19.04 17.2701 18.82 17.1801C18.59 17.1001 18.43 17.0601 18.26 17.3001C18.09 17.5501 17.62 18.1101 17.48 18.2701C17.34 18.4401 17.19 18.4601 16.94 18.3301C16.69 18.2101 15.89 17.9401 14.95 17.1001C14.21 16.4401 13.72 15.6301 13.57 15.3801C13.43 15.1301 13.55 15.0001 13.68 14.8701C13.79 14.7601 13.93 14.5801 14.05 14.4401C14.17 14.3001 14.22 14.1901 14.3 14.0301C14.38 13.8601 14.34 13.7201 14.28 13.6001C14.22 13.4801 13.72 12.2601 13.52 11.7601C13.32 11.2801 13.11 11.3401 12.96 11.3301H12.48C12.31 11.3301 12.05 11.3901 11.82 11.6401C11.6 11.8901 10.96 12.4901 10.96 13.7101C10.96 14.9301 11.85 16.1101 11.97 16.2701C12.09 16.4401 13.72 18.9401 16.2 20.0101C16.79 20.2701 17.25 20.4201 17.61 20.5301C18.2 20.7201 18.74 20.6901 19.17 20.6301C19.65 20.5601 20.64 20.0301 20.84 19.4501C21.05 18.8701 21.05 18.3801 20.98 18.2701C20.91 18.1601 20.76 18.1101 20.51 17.9901Z"
        fill="white"
      />
    </svg>
  );
};
// WHITE Insta ICON
export const WhiteInstaIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1081_710)">
        <path
          d="M26.1994 -2.50586H5.80188C1.21364 -2.50586 -2.50586 1.21364 -2.50586 5.80188V26.1994C-2.50586 30.7877 1.21364 34.5072 5.80188 34.5072H26.1994C30.7877 34.5072 34.5072 30.7877 34.5072 26.1994V5.80188C34.5072 1.21364 30.7877 -2.50586 26.1994 -2.50586Z"
          fill="#0E202B"
        />
        <path
          d="M11.4049 6.23676H20.7115C20.9183 6.34016 21.2285 6.34016 21.4353 6.44357C22.3429 6.59065 23.1914 6.98792 23.8856 7.59075C24.5797 8.19357 25.092 8.97804 25.3648 9.856C25.5175 10.3619 25.6214 10.8814 25.675 11.4071V20.5069C25.5272 21.6602 25.1014 22.7603 24.4341 23.7126C23.8618 24.3757 23.1441 24.898 22.3371 25.2387C21.5301 25.5795 20.6553 25.7296 19.7808 25.6773H12.0253C10.6412 25.7445 9.2804 25.3031 8.19923 24.4364C7.54177 23.8684 7.02293 23.1575 6.6824 22.3581C6.34187 21.5588 6.18866 20.6921 6.2345 19.8244V12.586C6.21741 12.0668 6.25205 11.5472 6.3379 11.0348C6.44232 9.9747 6.87822 8.97444 7.58364 8.1762C8.28906 7.37796 9.22812 6.82235 10.2674 6.58834L11.4049 6.23676ZM8.19923 16.0604V20.0933C8.15514 20.6069 8.22385 21.1239 8.40053 21.6081C8.57722 22.0923 8.85762 22.532 9.22209 22.8965C9.58657 23.261 10.0263 23.5414 10.5105 23.7181C10.9947 23.8948 11.5117 23.9635 12.0253 23.9194C14.7139 24.0228 17.4025 24.0228 20.091 23.9194C22.4694 23.9194 23.8137 22.4717 23.9171 20.0933C24.0205 17.4047 24.0205 14.7161 23.9171 12.0276C23.9439 11.518 23.8633 11.0086 23.6805 10.5323C23.4977 10.0559 23.2168 9.62335 22.856 9.26258C22.4953 8.90181 22.0627 8.62091 21.5863 8.43811C21.11 8.25531 20.6005 8.1747 20.091 8.20149C17.4025 8.09808 14.7139 8.09808 12.0253 8.20149C11.5117 8.1574 10.9947 8.2261 10.5105 8.40279C10.0263 8.57948 9.58657 8.85988 9.22209 9.22435C8.85762 9.58883 8.57722 10.0286 8.40053 10.5128C8.22385 10.997 8.15514 11.514 8.19923 12.0276V16.0604Z"
          fill="white"
        />
        <path
          d="M11.0332 16.1022C11.0359 14.7592 11.5707 13.472 12.5203 12.5223C13.4699 11.5727 14.7572 11.0379 16.1001 11.0352C17.4357 11.0617 18.7092 11.604 19.6537 12.5486C20.5983 13.4931 21.1406 14.7666 21.1671 16.1022C21.1644 17.4452 20.6296 18.7324 19.68 19.682C18.7304 20.6317 17.4431 21.1664 16.1001 21.1691C14.7646 21.1427 13.4911 20.6003 12.5466 19.6558C11.602 18.7112 11.0597 17.4377 11.0332 16.1022V16.1022ZM16.1001 12.8965C15.4721 12.8863 14.8553 13.0639 14.3288 13.4065C13.8022 13.7491 13.39 14.2411 13.1449 14.8194C12.8998 15.3978 12.833 16.0362 12.9531 16.6528C13.0731 17.2693 13.3745 17.836 13.8187 18.2802C14.2629 18.7244 14.8296 19.0258 15.4461 19.1458C16.0627 19.2659 16.7011 19.1991 17.2795 18.954C17.8578 18.7089 18.3498 18.2967 18.6924 17.7702C19.035 17.2436 19.2126 16.6268 19.2024 15.9988C19.2024 15.176 18.8755 14.3869 18.2937 13.8052C17.712 13.2234 16.9229 12.8965 16.1001 12.8965V12.8965Z"
          fill="white"
        />
        <path
          d="M20.0291 10.8276C20.0233 10.6631 20.0514 10.4991 20.1117 10.3459C20.1721 10.1928 20.2633 10.0537 20.3797 9.93727C20.4961 9.82087 20.6352 9.72968 20.7883 9.66936C20.9415 9.60904 21.1054 9.5809 21.2699 9.58668C21.5919 9.60845 21.895 9.74618 22.1232 9.97434C22.3513 10.2025 22.4891 10.5056 22.5108 10.8276C22.5108 11.1567 22.3801 11.4723 22.1474 11.705C21.9147 11.9377 21.599 12.0684 21.2699 12.0684C20.9408 12.0684 20.6252 11.9377 20.3925 11.705C20.1598 11.4723 20.0291 11.1567 20.0291 10.8276V10.8276Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1081_710">
          <rect width="32" height="32" rx="5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
// LINKEDIN ICON
export const LinkedInIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <g clipPath="url(#clip0_303_1575)">
        <path
          d="M30.2769 0.474609H1.83247C0.850626 0.474609 0.0546875 1.27055 0.0546875 2.25239V30.6968C0.0546875 31.6787 0.850626 32.4746 1.83247 32.4746H30.2769C31.2587 32.4746 32.0547 31.6787 32.0547 30.6968V2.25239C32.0547 1.27055 31.2587 0.474609 30.2769 0.474609Z"
          fill="#117EB8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.8937 12.8516H10.1706V26.6125H5.8937V12.8516ZM8.03281 6.01119C9.40036 6.01119 10.5115 7.1223 10.5115 8.48985C10.5115 9.85874 9.40036 10.9703 8.03281 10.9703C7.70324 10.9765 7.37573 10.917 7.06943 10.7952C6.76313 10.6734 6.48419 10.4918 6.24891 10.2609C6.01363 10.03 5.82674 9.75457 5.69916 9.45063C5.57157 9.14669 5.50586 8.82037 5.50586 8.49074C5.50586 8.16111 5.57157 7.83479 5.69916 7.53085C5.82674 7.22692 6.01363 6.95146 6.24891 6.7206C6.48419 6.48973 6.76313 6.30808 7.06943 6.18628C7.37573 6.06447 7.70324 6.00495 8.03281 6.01119ZM12.8533 12.8512H16.9555V14.7316H17.0124C17.5835 13.6499 18.9786 12.5094 21.059 12.5094C25.3897 12.5094 26.1897 15.3596 26.1897 19.065V26.6125H21.9155V19.9205C21.9155 18.325 21.8861 16.2721 19.6933 16.2721C17.4679 16.2721 17.1261 18.0103 17.1261 19.8054V26.6125H12.8528V12.8516L12.8533 12.8512Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_1575">
          <rect
            x="0.0546875"
            y="0.474609"
            width="32"
            height="32"
            rx="5"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const WhiteLinkedInIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1081_718)">
        <rect width="32" height="32" rx="5" fill="#3A3A3A" />
        <path
          d="M30.2222 0H1.77778C0.795938 0 0 0.795938 0 1.77778V30.2222C0 31.2041 0.795938 32 1.77778 32H30.2222C31.2041 32 32 31.2041 32 30.2222V1.77778C32 0.795938 31.2041 0 30.2222 0Z"
          fill="#0E202B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.36359 12.907H10.9854V24.5602H7.36359V12.907ZM9.17507 7.11421C10.3332 7.11421 11.2741 8.05514 11.2741 9.21324C11.2741 10.3725 10.3332 11.3138 9.17507 11.3138C8.89598 11.3191 8.61864 11.2687 8.35925 11.1655C8.09987 11.0623 7.86365 10.9085 7.6644 10.713C7.46516 10.5175 7.30689 10.2842 7.19885 10.0269C7.0908 9.76947 7.03516 9.49313 7.03516 9.21399C7.03516 8.93485 7.0908 8.65851 7.19885 8.40112C7.30689 8.14373 7.46516 7.91047 7.6644 7.71496C7.86365 7.51946 8.09987 7.36563 8.35925 7.26248C8.61864 7.15933 8.89598 7.10892 9.17507 7.11421ZM13.2572 12.9066H16.7311V14.499H16.7793C17.2629 13.5829 18.4444 12.6172 20.2062 12.6172C23.8736 12.6172 24.551 15.0308 24.551 18.1686V24.5602H20.9314V18.8932C20.9314 17.542 20.9066 15.8035 19.0496 15.8035C17.1651 15.8035 16.8757 17.2755 16.8757 18.7957V24.5602H13.2568V12.907L13.2572 12.9066Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1081_718">
          <rect width="32" height="32" rx="5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
// ATHLETIFI LOGO
export const PageLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="79"
      className="w-[65px] sm:w-[75px]"
      viewBox="0 0 75 79"
      fill="none"
    >
      <defs>
        <linearGradient
          id="b"
          x1="26.01"
          x2="51.39"
          y1="1138.86"
          y2="1094.91"
          gradientTransform="matrix(1 0 0 -1 0 1145)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#11568c"></stop>
          <stop offset="1" stopColor="#00c5f4"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#b)"
        strokeWidth="0"
        d="M63.3 19.6c-.3-.9-.8-1.7-1.5-2.3-.9-.8-1.9-1.2-3.1-1.3-.5 0-1 0-1.5.1h-.1l-8.9-6-3.6-2.4-2.1-1.4v-.1c.1-.7 0-1.4-.2-2-.3-1-.8-1.8-1.5-2.5-.2-.2-.5-.4-.8-.6-.7-.4-1.5-.7-2.4-.7-.8 0-1.5.1-2.1.3-1.2.4-2 1.2-2.7 2.3-.2.3-.3.6-.4.9-.3.8-.3 1.6-.2 2.5l-14.6 9.8h-.1c-1.4-.4-2.7-.2-3.9.5-.7.4-1.2.9-1.6 1.5-.8 1.1-1.1 2.2-1 3.6.1.7.3 1.3.6 1.9.5 1 1.3 1.8 2.3 2.3l.9.3 1.8 4.2L21.4 41v.1c-.8.7-1.4 1.6-1.6 2.6-.3 1.2-.2 2.4.3 3.5.3.7.8 1.3 1.4 1.8.8.7 1.8 1.1 2.9 1.2.7.1 1.4 0 2.1-.2 1.1-.4 2-1 2.7-2h16.3c.5.8 1.3 1.4 2.1 1.9.8.4 1.6.5 2.5.5 1-.1 1.8-.4 2.6-.9.3-.2.5-.4.8-.6.8-.8 1.3-1.7 1.5-2.9.1-.6.1-1.3-.1-1.9-.2-1.1-.8-2-1.6-2.8v-.1l.7-1.7 5.5-12.8.2-.4c1-.3 1.9-.8 2.6-1.6.7-.8 1.1-1.8 1.3-3-.1-.8-.1-1.4-.3-2.1zM42 8l1.1.7 3.3 2.2c2.9 2 5.9 4 8.8 5.9h.1c.1 0 .1.1 0 .1-1.1.9-1.8 2-2.1 3.4-.1.3-.1.7-.1 1v.5l-8.7 3.1c-.1-.3-.3-.7-.4-1-.3-.6-.7-1.2-1.1-1.7-1.2-1.3-2.7-2-4.4-2.3 0 0-.1 0 0-.1v-9.4c.9-.2 1.7-.6 2.4-1.2.4-.1.8-.6 1.1-1.2zM30.1 36.5zm0 0zm0 0zm0 0zm-9.8-18.6c-.2-.3-.5-.6-.8-.8l13.4-9c.8 1.4 2.1 2.3 3.7 2.6V20c-1.1.1-2.1.5-3 1.1-1.5 1-2.5 2.3-3 4l-1.9-.7-6.1-2.2-1-.4c.1-.8.1-1.6-.2-2.3-.3-.5-.6-1.1-1.1-1.6zm6 7.6zm0 0zm0 0zm0 0zm-3.9-3.1zm0 0zm-4 7.3l-1.5-3.4c.3 0 .6-.1.9-.2 1.3-.4 2.3-1.2 3-2.5l5.4 2 3.9 1.4c0 .9.1 1.7.4 2.5.4 1.2 1 2.2 1.9 3l.4.4-2.8 3.5-3.1 3.8h-.1c-1.3-.5-2.6-.5-3.9-.1-1.5-3.4-3-6.9-4.5-10.4zm26.3 16.4H30V46c.2-1 .1-1.9-.2-2.9-.3-.8-.7-1.5-1.3-2l1.2-1.5 3.5-4.3 1.3-1.5h.1c.4.2.8.3 1.3.4 1.5.4 3 .3 4.4-.3l4.3 5.2 1.6 2v.1c-.5.5-.9 1.1-1.2 1.7-.4 1.2-.5 2.2-.3 3.2zm.3-3zm0 0zm0 0zm0 0zm6.7-2.9q-.1 0 0 0c-1.4-.5-2.8-.4-4.1.1l-1.3-1.6-4.6-5.5c.8-.6 1.4-1.3 1.9-2.1.6-1 1-2 1.1-3.2v-1.2l9-3.2c.8 1.6 2.2 2.5 4 2.8l-.5 1.2c-1.8 4.2-3.7 8.5-5.5 12.7z"
      ></path>
      <path
        d="m9.7,52.56l1.92,11.13h-2.52l-.36-2.51h-4.23l-1.38,2.51H.6l6.47-11.13h2.63Zm-1.81,2.41l-2.4,4.37h3.01l-.61-4.37h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m16.67,56.09h-2.79l.37-1.61h7.77l-.37,1.61h-2.79l-1.73,7.6h-2.2l1.73-7.6Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m23.42,54.47h2.2l-.87,3.78h4.18l.87-3.78h2.2l-2.11,9.21h-2.2l.87-3.82h-4.18l-.87,3.82h-2.2l2.11-9.21Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m34.15,54.47h2.2l-1.74,7.6h4.38l-.36,1.61h-6.58l2.11-9.21h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m41.97,54.47h6.75l-.36,1.59h-4.55l-.5,2.2h4.18l-.36,1.58h-4.18l-.51,2.25h4.69l-.36,1.59h-6.89l2.11-9.21h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m52.29,56.09h-2.79l.37-1.61h7.77l-.37,1.61h-2.79l-1.73,7.6h-2.2l1.73-7.6Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m61.3,54.47l-2.11,9.21h-2.2l2.11-9.21h2.2Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m63.72,52.52h7.15l-.4,1.95h-4.77l-.56,2.75h4.37l-.39,1.95h-4.37l-.92,4.52h-2.38l2.28-11.16h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m74.59,54.47l-2.11,9.21h-2.2l2.11-9.21h2.2Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m11.85,75.94c.61.78,1.53,1.38,2.62,1.38s2.02-.49,2.22-1.32c.02-.1.04-.24.04-.32,0-.61-.49-1.11-2.06-1.45-1.96-.41-2.98-1.34-2.98-2.67,0-.19.02-.4.07-.61.38-1.88,2.27-3.21,4.55-3.21,1.58,0,2.8.54,3.58,1.41l-1.62,1.58c-.61-.61-1.33-1.08-2.26-1.08s-1.69.45-1.82,1.13c-.02.09-.02.18-.02.26,0,.62.54,1.05,1.92,1.37,2.15.49,3.1,1.41,3.1,2.78,0,.22-.02.46-.07.71-.4,1.95-2.32,3.36-4.99,3.36-1.71,0-3.16-.67-3.95-1.79l1.67-1.52h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m22.2,69.85h6.75l-.36,1.59h-4.55l-.5,2.2h4.18l-.36,1.58h-4.18l-.51,2.25h4.69l-.36,1.59h-6.89l2.11-9.21h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m30.86,69.85h2.2l-1.74,7.6h4.38l-.36,1.61h-6.58l2.11-9.21h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m38.68,69.85h6.75l-.36,1.59h-4.55l-.5,2.2h4.18l-.36,1.58h-4.18l-.51,2.25h4.69l-.36,1.59h-6.89l2.11-9.21h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path
        d="m45.58,75.39c0-.3.03-.61.11-.93.61-2.68,3.61-4.76,6.9-4.76,1.43,0,2.6.39,3.48,1.07l-1.42,1.39c-.66-.47-1.37-.82-2.42-.82-2.01,0-3.89,1.35-4.3,3.13-.05.22-.08.44-.08.65,0,1.45,1.19,2.48,2.95,2.48,1.01,0,2.06-.38,2.89-.89l.85,1.38c-1.2.72-2.62,1.15-4.11,1.15-2.89,0-4.83-1.61-4.83-3.83h0Z"
        fill="#647278"
        strokeWidth="0"
      />
      <path 
        d="m59.53,71.46h-2.79l.37-1.61h7.77l-.37,1.61h-2.79l-1.73,7.6h-2.2l1.73-7.6Z"
        fill="#647278"
        strokeWidth="0"
      />
    </svg>
  );
};
// BLUE UNDERLINE
export const UnderLIneText = () => {
  return (
    <svg
      className="sm:w-[209px]"
      width="150"
      height="10"
      viewBox="0 0 211 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.948693 3.57332C3.5877 -3.8515 161.353 5.45592 204.446 3.57332C214.185 3.14787 209.771 6.6513 204.446 6.6513C171.916 7.92592 90.8918 10.1851 27.0385 9.02472C6.9624 8.37921 -1.69031 10.9981 0.948693 3.57332Z"
        fill="#00C5F4"
      />
    </svg>
  );
};
// BLUE SHADOW BACKGROUND
export const BlueShodow = () => {
  return (
    <svg
      width="579"
      height="739"
      viewBox="0 0 579 739"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.25" filter="url(#filter0_f_303_1617)">
        <circle
          cx="178.5"
          cy="400.5"
          r="178.5"
          fill="url(#paint0_linear_303_1617)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_303_1617"
          x="-222"
          y="0"
          width="801"
          height="801"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="111"
            result="effect1_foregroundBlur_303_1617"
          />
        </filter>
        <linearGradient
          id="paint0_linear_303_1617"
          x1="101.364"
          y1="263.6"
          x2="287.19"
          y2="570.26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11568C" />
          <stop offset="1" stopColor="#00C5F4" />
        </linearGradient>
      </defs>
    </svg>
  );
};
// BLUE SHADOW CENTER
export const CenterBlueShadow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="400"
      viewBox="0 0 567 567"
      fill="none"
    >
      <g opacity="0.2" filter="url(#filter0_f_300_558)">
        <circle
          cx="100.002"
          cy="100.002"
          r="100.002"
          transform="matrix(-0.773423 -0.63389 -0.63389 0.773423 424.469 269.781)"
          fill="url(#paint0_linear_300_558)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_300_558"
          x="0.729492"
          y="0.729248"
          width="566.01"
          height="566.01"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="91.5"
            result="effect1_foregroundBlur_300_558"
          />
        </filter>
        <linearGradient
          id="paint0_linear_300_558"
          x1="56.7878"
          y1="23.3061"
          x2="160.894"
          y2="195.108"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11568C" />
          <stop offset="1" stopColor="#00C5F4" />
        </linearGradient>
      </defs>
    </svg>
  );
};
// BUTTON ARROW BLACK
export const ArrowButton = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_453_36)">
        <path
          d="M6.96967 17.9443C6.67678 18.2372 6.67678 18.712 6.96967 19.0049C7.26257 19.2978 7.73744 19.2978 8.03033 19.0049L6.96967 17.9443ZM19.25 7.47461C19.25 7.06039 18.9142 6.72461 18.5 6.72461L11.75 6.72461C11.3358 6.72461 11 7.0604 11 7.47461C11 7.88882 11.3358 8.22461 11.75 8.22461L17.75 8.22461L17.75 14.2246C17.75 14.6388 18.0858 14.9746 18.5 14.9746C18.9142 14.9746 19.25 14.6388 19.25 14.2246L19.25 7.47461ZM8.03033 19.0049L19.0303 8.00494L17.9697 6.94428L6.96967 17.9443L8.03033 19.0049Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_453_36">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 -1 24.5 24.4746)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// WHITE ARROW BUTTON
export const ButtonWhiteArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_638_297)">
        <path
          d="M6.46967 17.4697C6.17678 17.7626 6.17678 18.2374 6.46967 18.5303C6.76257 18.8232 7.23744 18.8232 7.53033 18.5303L6.46967 17.4697ZM18.75 7C18.75 6.58579 18.4142 6.25 18 6.25L11.25 6.25C10.8358 6.25 10.5 6.58579 10.5 7C10.5 7.41422 10.8358 7.75 11.25 7.75L17.25 7.75L17.25 13.75C17.25 14.1642 17.5858 14.5 18 14.5C18.4142 14.5 18.75 14.1642 18.75 13.75L18.75 7ZM7.53033 18.5303L18.5303 7.53033L17.4697 6.46967L6.46967 17.4697L7.53033 18.5303Z"
          fill="#FDFEFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_638_297">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 -1 24 24)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// CROSS OR CANCEL ICON
export const CancelIcon = () => {
  return (
    <svg
      className="sm:w-[36px] w-6"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4136 18L33.8939 7.5197C35.3889 6.0247 35.3889 3.60087 33.8939 2.10587C32.3988 0.610869 29.9752 0.610869 28.4801 2.10587L17.9998 12.5862L7.51945 2.10587C6.02445 0.610869 3.60062 0.610869 2.10562 2.10587C0.610625 3.60087 0.610625 6.0247 2.10562 7.5197L12.5859 18L2.10562 28.4803C0.610625 29.9753 0.610625 32.3992 2.10562 33.8942C2.85312 34.6416 3.83281 35.0154 4.8125 35.0154C5.79219 35.0154 6.77195 34.6417 7.51937 33.8942L17.9998 23.4138L28.4801 33.8942C29.2276 34.6416 30.2073 35.0154 31.187 35.0154C32.1666 35.0154 33.1463 34.6417 33.8938 33.8942C35.3888 32.3992 35.3888 29.9753 33.8938 28.4803L23.4136 18Z"
        fill="white"
      />
    </svg>
  );
};
// Trusted Partners
// EYEBALL ICON
export const EyeBallIcon = () => {
  return (
    <svg
      className="lg:max-w-[332px] md:max-w-[250px] max-w-[170px]"
      width="332"
      height="72"
      viewBox="0 0 332 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.2299 38.1107L33.3034 46.1589C32.9089 46.3956 32.5144 46.4745 32.0804 46.4745C31.6465 46.4745 31.2519 46.3562 30.8574 46.1589C30.1078 45.7249 29.6344 44.8965 29.6344 44.0285V27.9716C29.6344 27.1037 30.1078 26.2752 30.8574 25.8412C31.607 25.4072 32.5539 25.4072 33.3034 25.8412L47.2299 33.8894C47.9795 34.3234 48.4529 35.1518 48.4529 36.0198C48.4529 36.8877 47.9795 37.6768 47.2299 38.1107ZM36.6963 12.0725C23.4799 12.0725 12.749 22.8034 12.749 36.0198C12.749 49.2362 23.4799 59.9276 36.6963 59.9276C49.9127 59.9276 60.6436 49.1967 60.6436 35.9803C60.6436 22.764 49.9127 12.0725 36.6963 12.0725Z"
        fill="#00C5FF"
      />
      <path
        d="M1.70245 32.5873C2.17588 32.824 2.76765 32.7057 3.12272 32.3111C8.48817 26.2356 19.9687 16.057 36.7357 16.057C53.5027 16.057 64.9438 26.3145 70.2698 32.4295C70.5065 32.7057 70.8615 32.8635 71.1772 32.8635H71.2166C71.8873 32.8635 72.4396 32.3111 72.4396 31.6405C72.4396 31.4827 72.4002 31.3249 72.3607 31.2065C69.9936 13.4137 54.7257 0.0395381 36.6568 8.62934e-05C18.6667 -0.0393656 3.31998 13.4532 0.992322 31.3249C0.913418 31.8772 1.18958 32.3901 1.70245 32.5873Z"
        fill="#49545C"
      />
      <path
        d="M71.6898 39.3733C71.2164 39.1366 70.6246 39.255 70.2695 39.689C64.9041 45.7645 53.3841 55.9431 36.6565 55.9431C19.9289 55.9431 8.44846 45.6856 3.12246 39.5311C2.7674 39.1366 2.17562 39.0183 1.7022 39.2155C1.22878 39.4522 0.91316 39.9651 0.992064 40.478C3.24082 58.4286 18.5481 71.9606 36.6565 72H36.7354C54.7649 72 70.1117 58.5075 72.4394 40.5963C72.4788 40.1229 72.1632 39.6101 71.6898 39.3733Z"
        fill="#49545C"
      />
      <path
        d="M90.2319 17.9902H117.454V25.0127H98.1223V32.3507H115.126V39.4126H98.1223V46.9873H117.69V54.0098H90.2319V17.9902Z"
        fill="#49545C"
      />
      <path
        d="M134.892 39.8071L121.044 17.9902H130.315L138.916 32.4296L147.674 17.9902H156.669L142.821 39.6493V54.0098H134.892V39.8071Z"
        fill="#49545C"
      />
      <path
        d="M161.64 17.9902H188.822V25.0127H169.491V32.3507H186.495V39.4126H169.491V46.9873H189.059V54.0098H161.64V17.9902Z"
        fill="#49545C"
      />
      <path
        d="M213.046 39.1364H203.893V47.0662H213.322C216.833 47.0662 218.924 45.8432 218.924 43.1605V43.0422C218.885 40.6356 217.109 39.1364 213.046 39.1364ZM216.873 28.6422C216.873 26.2751 215.019 24.9338 211.665 24.9338H203.854V32.548H211.152C214.663 32.548 216.873 31.4039 216.873 28.7211V28.6422ZM196.121 17.9902H212.849C216.952 17.9902 220.226 19.1343 222.278 21.1858C223.935 22.8428 224.763 24.8549 224.763 27.3009V27.4192C224.763 31.4828 222.593 33.771 220.029 35.1912C224.211 36.7693 226.775 39.2153 226.775 44.0679V44.1863C226.775 50.7747 221.41 54.0887 213.283 54.0887H196.121V17.9902Z"
        fill="#49545C"
      />
      <path
        d="M273.999 17.9902H281.928V46.8295H299.918V54.0098H273.999V17.9902Z"
        fill="#49545C"
      />
      <path
        d="M305.876 17.9902V54.0098H331.796V46.8295H313.806V17.9902H305.876Z"
        fill="#49545C"
      />
      <path
        d="M244.449 38.9392L249.223 27.2614L253.997 38.9392H244.449ZM253.089 17.9902H245.554L230.247 54.0098H238.334L241.648 45.9221H256.877L260.151 54.0098H268.436L253.089 17.9902Z"
        fill="#49545C"
      />
    </svg>
  );
};
// VILLANOVA ICON
export const VillanovaIcon = () => {
  return (
    <svg
      className="max-w-[90px] md:max-w-[113px]"
      width="113"
      height="102"
      viewBox="0 0 113 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M97.8523 35.0473V19.0602L96.443 18.1814C95.7719 17.742 79.3969 7.77124 56.8814 7.77124C34.3658 7.77124 17.9908 17.7758 17.3197 18.1814L15.9104 19.0602V35.0473C15.8768 36.1626 15.5748 47.4516 20.0041 61.0727C26.1447 79.7975 38.426 93.3172 55.5391 101.361L56.8814 101.97L58.2236 101.361C75.3368 93.351 87.6515 79.7975 93.7586 61.0727C98.2214 47.4516 97.9194 36.1626 97.8523 35.0473Z"
        fill="#001F4E"
      />
      <path
        d="M94.7982 35.1148V20.7163C94.7982 20.7163 78.7588 10.7793 56.8807 10.7793C34.9692 10.7793 18.9633 20.7163 18.9633 20.7163V35.1148C18.9633 35.1148 16.8829 79.9326 56.8807 98.6575C96.8786 79.9326 94.7982 35.1148 94.7982 35.1148Z"
        fill="#A0CCED"
      />
      <path
        d="M95.6709 35.0812V20.2434L95.2682 20.0068C95.1004 19.9054 78.7926 9.93457 56.881 9.93457C34.9694 9.93457 18.6615 19.9054 18.4938 20.0068L18.0911 20.2434V35.0812C18.0575 35.6558 17.722 47.0124 22.0842 60.3969C24.7015 68.4411 28.5268 75.0658 33.3923 81.2173C39.4658 88.9573 47.2506 95.0412 56.5119 99.3675L56.881 99.5365L57.2501 99.3675C66.5113 95.0412 74.2626 88.9235 80.3697 81.2173C85.2352 75.032 89.0269 68.4073 91.6778 60.3969C96.04 47.0124 95.7044 35.6558 95.6709 35.0812Z"
        fill="#97B6CB"
      />
      <path
        d="M93.6239 35.1826V35.115V23.826V21.1897L91.1743 20.0067L90.2012 19.5335C84.2619 16.6606 72.0143 11.8611 56.8473 11.8611C41.8145 11.8611 29.5333 16.6606 23.5269 19.5335L22.5538 20.0067L20.1043 21.1897V23.8598V35.115V35.1488C20.1043 35.284 19.6681 46.8095 24.1645 60.2955C29.6004 76.5867 39.5999 88.1461 53.8609 95.8861L54.6998 96.3593L56.8137 97.5085L58.9277 96.3593L59.7666 95.8861C74.0276 88.1799 84.0271 76.5867 89.463 60.2955C94.0265 46.9447 93.6574 35.6558 93.6239 35.1826Z"
        fill="white"
      />
      <path
        d="M20.9097 41.9086C21.4801 45.9307 22.4868 55.1918 24.1981 60.2616C29.634 76.5529 39.6335 88.1123 53.8945 95.8523L54.7334 96.3255L56.8473 97.4747L58.9613 96.3255L59.8002 95.8523C74.0612 88.1461 84.0607 76.5529 89.4966 60.2616C91.275 54.9552 92.2817 45.5928 92.8521 41.4692L20.9097 41.9086Z"
        fill="#001F4E"
      />
      <path
        d="M54.1621 97.069L57.0143 98.8265L59.6316 97.2042V59.7883H54.1621V97.069Z"
        fill="url(#paint0_linear_793_796)"
      />
      <path
        d="M63.9946 95.0072L69.4641 91.5935V59.7883H63.9946V95.0072Z"
        fill="url(#paint1_linear_793_796)"
      />
      <path
        d="M73.8262 59.7883V87.4362L79.2621 81.7241V59.7883H73.8262Z"
        fill="url(#paint2_linear_793_796)"
      />
      <path
        d="M44.3643 91.4583L49.8338 94.872V59.7883H44.3643V91.4583Z"
        fill="url(#paint3_linear_793_796)"
      />
      <path
        d="M34.5332 81.5889L40.0027 86.9968V59.7883H34.5332V81.5889Z"
        fill="url(#paint4_linear_793_796)"
      />
      <path
        d="M75.4035 44.4436C65.3704 54.7524 48.9619 54.9214 38.7276 44.8154C28.4932 34.7094 28.3254 18.1816 38.3585 7.87281C48.3915 -2.43598 64.8 -2.60497 75.0344 7.50102C85.2687 17.607 85.4365 34.1349 75.4035 44.4436Z"
        fill="#001F4E"
      />
      <path
        d="M74.0277 43.0916C64.7329 52.623 49.5323 52.792 40.0698 43.4296C30.6072 34.0672 30.4394 18.7561 39.7342 9.22469C49.029 -0.306714 64.2296 -0.47571 73.6921 8.88669C83.1547 18.2153 83.3225 33.5602 74.0277 43.0916Z"
        fill="#97B6CB"
      />
      <path
        d="M72.9206 41.9767C64.2298 50.8997 50.0359 51.0349 41.1773 42.3147C32.3188 33.5607 32.1845 19.2636 40.8418 10.3406C49.5326 1.41758 63.7265 1.28239 72.5851 10.0026C81.4437 18.7566 81.5779 33.0537 72.9206 41.9767Z"
        fill="white"
      />
      <path
        d="M72.1825 41.2663C63.8944 49.7837 50.3045 49.9189 41.8486 41.5705C33.3926 33.2221 33.2584 19.5334 41.5466 11.0159C49.8347 2.49853 63.391 2.36333 71.8805 10.7118C80.3364 19.094 80.4707 32.7489 72.1825 41.2663Z"
        fill="#022150"
      />
      <path
        d="M69.195 10.3736C72.886 14.3957 74.6645 17.0996 74.6645 17.0996L70.5036 17.1334L63.3563 14.2605L61.645 9.02161L62.853 6.99365C62.8866 6.99365 67.1816 8.17663 69.195 10.3736Z"
        fill="white"
      />
      <path
        d="M59.2633 6.21664L61.6793 9.05578L58.5251 13.0441L51.0087 12.6385L46.1768 11.2189L49.2638 7.56861C49.2638 7.60241 53.9951 5.37166 59.2633 6.21664Z"
        fill="white"
      />
      <path
        d="M38.5602 18.1813L40.2715 16.8293L41.5131 22.44L42.2513 31.2278L38.1575 33.053C38.1575 33.053 35.0705 26.0904 38.5602 18.1813Z"
        fill="white"
      />
      <path
        d="M38.1567 33.053L43.6934 35.5541L48.1562 41.8408L46.6462 43.3956C46.6462 43.3956 40.774 40.286 38.1567 33.053Z"
        fill="white"
      />
      <path
        d="M47.9211 36.7373L56.1757 37.0415L63.3901 39.6778C63.3901 39.6778 60.2024 45.5589 58.5917 46.2011C58.5917 46.2011 55.2697 46.7757 52.082 45.6941L48.156 41.8748C48.156 41.841 47.1829 38.3597 47.9211 36.7373Z"
        fill="white"
      />
      <path
        d="M70.9066 40.4214L67.249 39.8806L58.5918 46.1673C58.5918 46.1673 65.7726 45.6603 70.9066 40.4214Z"
        fill="white"
      />
      <path
        d="M76.8131 26.5295L73.8602 29.5715L70.3369 36.6355L70.9409 40.4211C70.9073 40.4211 76.1084 35.9595 76.8131 26.5295Z"
        fill="white"
      />
      <path
        d="M70.5381 17.1335L74.7661 22.0344L73.8265 29.5717L69.2966 33.4924L65.0686 27.4085L64.7666 18.5531L70.5381 17.1335Z"
        fill="white"
      />
      <path
        d="M59.6661 20.4458L65.0685 27.4085L64.5316 35.5203L56.1763 37.0413L49.0962 32.7487L52.6195 24.8397L59.6661 20.4458Z"
        fill="white"
      />
      <path
        d="M51.5788 12.6719L56.3772 17.1672L52.619 24.8396L45.4046 29.0983L41.5122 22.4399L43.794 14.4294L51.5788 12.6719Z"
        fill="white"
      />
      <path
        d="M63.8623 12.8752L64.0972 13.6188L70.7076 16.2552H72.9558C72.7544 15.9848 72.5196 15.6806 72.2511 15.3426H70.0365L63.8623 12.8752Z"
        fill="#CCCCCC"
      />
      <path
        d="M50.4738 10.8475L48.2256 10.2053L47.7559 10.7799L51.1785 11.7601L58.1244 12.1319L60.5069 9.05611L59.9029 8.38013L57.6547 11.2531L50.4738 10.8475Z"
        fill="#CCCCCC"
      />
      <path
        d="M41.0112 29.6398L38.3604 30.8228C38.461 31.2284 38.5617 31.5664 38.6288 31.8368L41.2797 30.6538L40.6085 22.5758L39.7026 18.4185L39.669 18.4523L40.3066 21.359L41.0112 29.6398Z"
        fill="#CCCCCC"
      />
      <path
        d="M61.3116 39.8477C60.07 41.9094 58.6607 43.9374 57.8889 44.343L57.8554 44.3768H57.7883C57.5198 44.4106 56.7816 44.512 55.8421 44.512C54.4327 44.512 53.057 44.3092 51.8825 43.9374L51.8154 43.9036L48.9297 41.0644C48.9632 41.1658 48.9632 41.2334 48.9968 41.3348L52.5872 44.8162C53.7281 45.1879 55.0703 45.3569 56.4461 45.3569C57.3856 45.3569 58.0903 45.2556 58.3587 45.2218C59.1305 44.8162 60.7747 42.4164 62.1169 40.0505L61.3116 39.8477Z"
        fill="#CCCCCC"
      />
      <path
        d="M62.5527 44.4101C64.4654 43.8017 66.7807 42.7877 68.8947 41.0302L67.4854 40.8274C67.3847 40.895 67.3176 40.9626 67.2169 40.9964L62.5527 44.4101Z"
        fill="#CCCCCC"
      />
      <path
        d="M75.5729 29.0649L74.8347 29.8085C73.9287 33.2223 72.4858 35.6558 71.2778 37.2106L71.4792 38.4274C72.7543 36.8388 74.734 33.7292 75.5729 29.0649Z"
        fill="#CCCCCC"
      />
      <path
        d="M73.8271 22.3393L73.4245 21.8999L72.6863 28.0852L68.8945 31.3299L69.465 32.1749L72.9883 29.1329L73.8271 22.3393Z"
        fill="#CCCCCC"
      />
      <path
        d="M56.3463 36.0954L63.6949 34.7772L64.1647 27.6794L63.8291 27.24L63.3594 33.8309L55.7088 35.2166L50.407 32.0057L50.2393 32.4113L56.3463 36.0954Z"
        fill="#CCCCCC"
      />
      <path
        d="M45.2051 27.0037L45.742 27.8824L51.9497 24.2321L55.2717 17.3709L54.7012 16.8301L51.5806 23.2181L45.2051 27.0037Z"
        fill="#CCCCCC"
      />
      <path
        d="M101.072 61.8838H12.8892V72.5644H101.072V61.8838Z"
        fill="#001F4E"
      />
      <path
        d="M20.3056 65.5682H18.8627L18.695 64.9936H17.6212L17.4199 65.1626V65.4668L17.5876 65.602L19.4667 65.9061L20.3727 66.6159V68.1707L19.2654 69.0833H16.9501L15.8428 68.1707V67.1905H17.2856L17.4534 67.7651H18.5943L18.7956 67.5961V67.2243L18.6614 67.0891L16.8159 66.7849L15.9099 66.0076V64.5204L16.9501 63.6416H19.3325L20.3727 64.5204V65.5682H20.3056Z"
        fill="white"
      />
      <path
        d="M25.4731 68.6439C25.2717 68.8129 25.0704 68.9819 24.8691 69.1171H22.6544L21.48 68.1369V64.588L22.6209 63.6416H24.9362L26.0771 64.588V68.1369C25.8757 68.3059 25.6744 68.4749 25.4731 68.6439ZM23.292 64.9936L23.0906 65.1626V67.5961L23.292 67.7651H24.2315L24.4328 67.5961V65.1626L24.2315 64.9936H23.292Z"
        fill="white"
      />
      <path
        d="M31.6811 65.5682H30.2382L30.0705 64.9936H28.9967L28.7618 65.1626V67.5623L28.9967 67.7651H30.0705L30.2382 67.1905H31.6811V68.1707C31.5133 68.3397 31.312 68.4749 31.1442 68.6439C30.9429 68.8129 30.7751 68.9481 30.6073 69.1171H28.4598L27.2183 68.0693V64.6556L28.4263 63.6416H30.6744L31.7147 64.5204V65.5682H31.6811Z"
        fill="white"
      />
      <path
        d="M37.3509 65.5682H35.908L35.7402 64.9936H34.6665L34.4316 65.1626V67.5623L34.6665 67.7651H35.7402L35.908 67.1905H37.3509V68.1707C37.1831 68.3397 36.9818 68.4749 36.814 68.6439C36.6127 68.8129 36.4449 68.9481 36.2771 69.1171H34.096L32.8545 68.0693V64.6556L34.0625 63.6416H36.3107L37.3509 64.5204V65.5682Z"
        fill="white"
      />
      <path
        d="M42.1507 65.5682L41.9829 64.9936H40.6743V65.8723H41.9829V66.8187H40.6743V67.7651H41.9829L42.1507 67.1905H43.2916V69.1171H38.4932V67.9341L39.0972 67.7651V64.9936L38.4932 64.8246V63.6416H43.258V65.5682H42.1507Z"
        fill="white"
      />
      <path
        d="M44.4316 69.1171V67.9341L45.0356 67.7651V64.9936L44.4316 64.8246V63.6416H48.4583L49.4985 64.5204V66.1427L48.7267 66.7849L49.3307 67.7313L49.7334 67.7989V69.0495H48.2569L47.0154 66.9201H46.6127V67.6975L47.2167 67.8665V69.0495H44.4316V69.1171ZM46.6127 65.9061H47.7201L47.9214 65.7372V65.1626L47.7201 64.9936H46.6127V65.9061Z"
        fill="white"
      />
      <path
        d="M59.6325 67.9341V69.1171H56.8809V67.9341L57.2836 67.7651L57.1494 67.2919H55.975L55.8407 67.7651L56.2098 67.9341V69.1171H53.8945V67.9341L54.4985 67.7651L55.3039 64.9936L54.8005 64.8246V63.6416H57.9212L58.9614 67.7651L59.6325 67.9341ZM56.2098 66.3455H56.9145L56.579 65.1288L56.2098 66.3455Z"
        fill="white"
      />
      <path
        d="M65.1347 65.5682H63.6918L63.5241 64.9936H62.4503L62.2154 65.1626V67.5623L62.4503 67.7651H63.5241L63.6918 67.1905H65.1347V68.1707C64.9669 68.3397 64.7656 68.4749 64.5978 68.6439C64.3965 68.8129 64.2287 68.9481 64.0609 69.1171H61.9134L60.6719 68.0693V64.6556L61.8799 63.6416H64.1281L65.1683 64.5204V65.5682H65.1347Z"
        fill="white"
      />
      <path
        d="M71.9132 67.9341V69.1171H69.1617V67.9341L69.5644 67.7651L69.4301 67.2919H68.2557L68.1215 67.7651L68.4906 67.9341V69.1171H66.1753V67.9341L66.7793 67.7651L67.5846 64.9936L67.0813 64.8246V63.6416H70.2019L71.2421 67.7651L71.9132 67.9341ZM68.4906 66.3455H69.1953L68.8597 65.1288L68.4906 66.3455Z"
        fill="white"
      />
      <path
        d="M76.5786 69.1171H72.854V67.9341L73.458 67.7651V64.9936L72.854 64.8246V63.6416H76.6122L77.9544 64.757V67.9003L76.5786 69.1171ZM75.0687 67.7651H76.0418L76.3773 67.4947V65.264L76.0418 64.9936H75.0351V67.7651H75.0687Z"
        fill="white"
      />
      <path
        d="M82.7855 65.5682L82.6177 64.9936H81.309V65.8723H82.6177V66.8187H81.309V67.7651H82.6177L82.7855 67.1905H83.9263V69.1171H79.1279V67.9341L79.7319 67.7651V64.9936L79.1279 64.8246V63.6416H83.8928V65.5682H82.7855Z"
        fill="white"
      />
      <path
        d="M91.2414 64.9936V67.7651L91.8119 67.9341V69.1171H88.9597V67.9341L89.6979 67.7651V65.9061L88.7248 67.5961H88.1208L87.1477 65.9061V67.7651L87.8859 67.9341V69.1171H85.0337V67.9341L85.6377 67.7651V64.9936L85.0337 64.8246V63.6416H87.5839L88.4899 65.3316L89.4294 63.6416H91.8119V64.8246L91.2414 64.9936Z"
        fill="white"
      />
      <path
        d="M97.483 64.9936L96.1744 66.7511V67.7651L96.8455 67.9341V69.1171H93.9262V67.9341L94.5973 67.7651V66.7849L93.2886 64.9936L92.8188 64.8246V63.6416H95.3355V64.8246L95.0335 64.9936L95.6375 65.9061L96.2415 64.9936L95.9059 64.8246V63.6416H98.0535V64.8246L97.483 64.9936Z"
        fill="white"
      />
      <path
        d="M103.018 63.8777C102.314 67.1562 101.911 70.4686 101.81 73.7471C99.797 73.4091 97.683 73.2739 95.502 73.3753C95.6362 74.0513 95.8039 74.7273 95.9382 75.4032C100.535 74.6259 104.965 75.0315 108.857 76.282C108.387 74.6259 107.85 73.0035 107.246 71.3811C108.689 69.5898 110.4 67.8998 112.38 66.345C109.461 65.1283 106.307 64.2833 103.018 63.8777Z"
        fill="#001F4E"
      />
      <path
        d="M10.8414 63.9114C11.5461 67.1899 11.9487 70.5022 12.0494 73.7808C14.0627 73.4428 16.1767 73.3076 18.3578 73.409C18.2236 74.085 18.0558 74.761 17.9216 75.4369C13.3245 74.6596 8.8952 75.0651 5.00279 76.3157C5.47257 74.6596 6.00945 73.0372 6.61345 71.4148C5.17057 69.6235 3.45925 67.9335 1.47949 66.3787C4.3988 65.1619 7.51944 64.317 10.8414 63.9114Z"
        fill="#001F4E"
      />
      <path
        d="M25.5076 23.2517L26.8833 27.5442H28.796C28.6618 24.8064 28.8967 22.0349 29.5678 19.3647C27.5544 20.1421 25.8431 20.8857 24.5009 21.5617L22.3198 22.6095V27.5442H24.1318L25.5076 23.2517Z"
        fill="#CAD4D8"
      />
      <path
        d="M27.7554 30.2142L29.1312 34.5067L25.5072 31.8366L22.2859 34.1687V35.2165C22.2859 35.2503 22.2524 35.9601 22.2859 37.2783H23.0577C23.2255 37.2783 23.4268 37.3121 23.5946 37.3121V37.2783H30.9767C29.903 34.7095 29.1983 32.0394 28.8963 29.3354L27.7554 30.2142Z"
        fill="#CAD4D8"
      />
      <path
        d="M88.2551 23.2514L86.8794 27.5439H85.0003C85.1345 24.8062 84.8661 22.0346 84.2285 19.3645C86.2418 20.1419 87.9532 20.8855 89.2954 21.5615L91.4765 22.6092V27.5439H89.6645L88.2551 23.2514Z"
        fill="#CAD4D8"
      />
      <path
        d="M85.9737 30.2145L84.598 34.507L88.2219 31.8368L91.4432 34.169V35.2168C91.4432 35.2506 91.4768 35.9604 91.4432 37.2785H90.6715C90.5037 37.2785 90.3024 37.3123 90.1346 37.3123V37.2785H82.7524C83.8262 34.7098 84.5309 32.0396 84.8329 29.3357L85.9737 30.2145Z"
        fill="#CAD4D8"
      />
      <path
        d="M88.2228 25.144L87.2832 28.1522H84.1626L86.6792 29.9773L85.7061 32.9855L88.2228 31.1265L90.773 32.9855L89.7999 29.9773L92.3165 28.1522H89.1959L88.2228 25.144Z"
        fill="#001F4E"
      />
      <path
        d="M25.5079 25.144L26.481 28.1522H29.6017L27.085 29.9773L28.0246 32.9855L25.5079 31.1265L22.9913 32.9855L23.9644 29.9773L21.4478 28.1522H24.5684L25.5079 25.144Z"
        fill="#001F4E"
      />
      <path
        d="M105.435 43.2947V35.9602H81.0072H73.8264L73.7929 35.994V35.9602H46.9487H42.8885H32.8219H32.3186H25.3055H22.2185H18.2254H15.2054H0.84375V43.2947H2.58863L5.97771 62.1885H13.125H15.239H22.252H25.3391H32.8555H36.3117H43.3918H46.8816H72.5849H73.7929H80.9737H86.1077H100.302L103.691 43.2947H105.435Z"
        fill="#001F4E"
      />
      <path
        d="M109.261 54.8198L107.047 43.2943H107.315V35.926H97.2149V43.2943H97.5169L95.3023 54.8198H93.6245V62.1881H110.805V54.8198H109.261Z"
        fill="#001F4E"
      />
      <path
        d="M9.90342 41.5031H10.9436L9.50076 49.5473L8.09144 41.5031H9.13165V37.7175H2.58838V41.5031H4.03125L7.42033 60.3969H11.6147L15.0038 41.5031H16.4803V37.7175H9.90342V41.5031Z"
        fill="#526F9A"
      />
      <path
        d="M16.9502 41.5031H18.2253V56.6113H16.9502V60.3969H23.5606V56.6113H22.2855V41.5031H23.5606V37.7175H16.9502V41.5031Z"
        fill="#526F9A"
      />
      <path
        d="M30.4402 56.6113H29.3328V41.5031H30.5408V37.7175H23.9976V41.5031H25.2391V56.6113H23.9976V60.3969H34.5339V53.3666H30.4402V56.6113Z"
        fill="#526F9A"
      />
      <path
        d="M41.0087 56.6113H39.9013V41.5031H41.1429V37.7175H34.5996V41.5031H35.8412V56.6113H34.5996V60.3969H45.1024V53.3666H41.0087V56.6113Z"
        fill="#526F9A"
      />
      <path
        d="M65.2695 41.4016L64.1286 37.7175H58.5585V41.5031H59.8V56.6113H58.7598H58.5585H57.5183L54.6325 41.5031H55.3036V37.7175H48.7268V41.5031H49.4314L46.5121 56.6113H45.1699V60.3969H51.4448V56.6113H50.3374L50.8743 53.8736H53.2903L53.8272 56.6113H52.5521V60.3969H58.5585H58.7598H65.1353V56.6113H63.8938V50.6627L66.8802 60.3969H70.8061V41.5031H72.0141V37.7175H65.2695V41.4016ZM51.5454 50.0543L52.0152 47.6545L52.485 50.0543H51.5454ZM66.7124 41.5031V46.1336L65.3031 41.5031H66.7124Z"
        fill="#526F9A"
      />
      <path
        d="M75.4041 37.7177L72.9546 40.5231V57.5579L75.4041 60.3633H80.9743L83.3232 57.5241V40.4893L80.9743 37.6501H75.4041V37.7177ZM79.2294 56.6116H77.0148V41.5033H79.2294V56.6116Z"
        fill="#526F9A"
      />
      <path
        d="M91.3752 41.5031H92.449L91.0061 49.5473L89.5968 41.5031H90.637V37.7175H84.0938V41.5031H85.5366L88.9257 60.3969H93.1201L96.5092 41.5031H97.9856V37.7175H91.3752V41.5031Z"
        fill="#526F9A"
      />
      <path
        d="M107.785 56.6113L104.899 41.5031H105.57V37.7175H98.9934V41.5031H99.698L96.7787 56.6113H95.4365V60.3969H101.711V56.6113H100.537L101.074 53.8736H103.49L104.027 56.6113H102.852V60.3969H109.06V56.6113H107.785ZM101.812 50.0543L102.282 47.6545L102.752 50.0543H101.812Z"
        fill="#526F9A"
      />
      <path
        d="M8.4279 40.7932H7.25347L9.43456 52.9947H9.63589L11.7834 40.7932H10.609V38.4272H15.7765V40.7932H14.4343L11.0452 59.687H8.02524L4.63616 40.7932H3.29395V38.4272H8.4279V40.7932Z"
        fill="white"
      />
      <path
        d="M17.6548 57.321H18.8963V40.7932H17.6548V38.4272H22.8223V40.7932H21.5807V57.321H22.8223V59.687H17.6548V57.321Z"
        fill="white"
      />
      <path
        d="M29.8356 40.7936H28.6276V57.3214H31.1443V54.1105H33.8287V59.7212H24.7017V57.3552H25.9432V40.8274H24.7017V38.4614H29.8356V40.7936Z"
        fill="white"
      />
      <path
        d="M40.4386 40.7936H39.2306V57.3214H41.7473V54.1105H44.4317V59.7212H35.3047V57.3552H36.5462V40.8274H35.3047V38.4614H40.4386V40.7936Z"
        fill="white"
      />
      <path
        d="M45.8418 57.321H47.0833L50.2711 40.7932H49.4322V38.4272H54.5997V40.7932H53.7944L56.9821 57.321H58.123V59.687H53.3246V57.321H54.6668L53.8615 53.1637H50.204L49.3987 57.321H50.6738V59.687H45.8418V57.321ZM50.6738 50.764H53.2911L51.9824 43.9027L50.6738 50.764Z"
        fill="white"
      />
      <path
        d="M63.6259 38.4272L67.4512 50.8316V40.7932H65.9747V38.4272H71.31V40.7932H70.102V59.687H67.4176L63.1896 45.9645V57.321H64.4312V59.687H59.2637V57.321H60.5052V40.7932H59.2637V38.4272H63.6259Z"
        fill="white"
      />
      <path
        d="M82.6179 40.7932V57.321L80.6382 59.687H75.7056L73.6587 57.321V40.7932L75.7056 38.4272H80.6382L82.6179 40.7932ZM79.9335 57.321V40.7932H76.3096V57.321H79.9335Z"
        fill="white"
      />
      <path
        d="M89.9331 40.7932H88.7251L90.9062 52.9947H91.1076L93.2551 40.7932H92.0807V38.4272H97.2482V40.7932H95.906L92.5169 59.687H89.4969L86.1078 40.7932H84.7656V38.4272H89.8996V40.7932H89.9331Z"
        fill="white"
      />
      <path
        d="M96.1069 57.321H97.3149L100.503 40.7932H99.6638V38.4272H104.831V40.7932H104.026L107.214 57.321H108.355V59.687H103.556V57.321H104.898L104.093 53.1637H100.503L99.6973 57.321H100.972V59.687H96.1069V57.321ZM100.972 50.764H103.59L102.281 43.9027L100.972 50.764Z"
        fill="white"
      />
      <path
        d="M8.36054 59.2812L6.48145 48.7358H8.22632L9.0652 53.4339H9.97119L10.8101 48.7358H12.5885L10.6759 59.2812H8.36054Z"
        fill="#CAD4D8"
      />
      <path
        d="M18.0913 59.2812V57.7265H19.3329V48.7358H21.1784V57.7265H22.4199V59.2812H18.0913Z"
        fill="#CAD4D8"
      />
      <path
        d="M25.1045 59.2812V57.7265H26.3796V48.7358H28.1916V57.7265H31.5471V54.5155H33.3926V59.2812H25.1045Z"
        fill="#CAD4D8"
      />
      <path
        d="M35.7085 59.2812V57.7265H36.95V48.7358H38.7956V57.7265H42.1511V54.5155H43.9966V59.2812H35.7085Z"
        fill="#CAD4D8"
      />
      <path
        d="M53.6929 59.2812V57.7265H55.1022L54.1291 52.7242H49.8676L48.8945 57.7265H50.2703V59.2812H46.2437V57.7265H47.4181L49.163 48.7358H50.6394L50.1696 51.1694H53.8271L53.3574 48.7358H54.8673L56.6122 57.7265H57.6524V59.2812H53.6929Z"
        fill="#CAD4D8"
      />
      <path
        d="M59.6997 59.2812V57.7265H60.9413V48.7358H62.7868V57.7265H64.0283V59.2812H59.6997Z"
        fill="#CAD4D8"
      />
      <path
        d="M67.7189 59.2812L64.4976 48.7358H66.3431L67.0478 51.0004L67.8531 50.899V48.7358H69.6986V59.2812H67.7189Z"
        fill="#CAD4D8"
      />
      <path
        d="M75.9067 59.2812L74.0947 57.1519V48.7358H75.9067V57.7265H80.3696V48.7358H82.2151V57.1519L80.4702 59.2812H75.9067Z"
        fill="#CAD4D8"
      />
      <path
        d="M89.8654 59.2812L87.9863 48.7358H89.7312L90.5701 53.4339H91.4761L92.315 48.7358H94.0598L92.1807 59.2812H89.8654Z"
        fill="#CAD4D8"
      />
      <path
        d="M103.959 59.2812V57.7265H105.402L104.395 52.7242H100.134L99.1942 57.7265H100.536V59.2812H96.5098V57.7265H97.6842L99.4291 48.7358H100.906L100.436 51.1694H104.093L103.623 48.7358H105.133L106.878 57.7265H107.919V59.2812H103.959Z"
        fill="#CAD4D8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_793_796"
          x1="56.9063"
          y1="67.5244"
          x2="56.9063"
          y2="85.6078"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.0937637" stopColor="#14181A" />
          <stop offset="0.3335" stopColor="#424F59" />
          <stop offset="0.5525" stopColor="#677C8A" />
          <stop offset="0.7436" stopColor="#819BAD" />
          <stop offset="0.8992" stopColor="#91AFC3" />
          <stop offset="1" stopColor="#97B6CB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_793_796"
          x1="66.7271"
          y1="67.5245"
          x2="66.7271"
          y2="85.6079"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.0937637" stopColor="#14181A" />
          <stop offset="0.3335" stopColor="#424F59" />
          <stop offset="0.5525" stopColor="#677C8A" />
          <stop offset="0.7436" stopColor="#819BAD" />
          <stop offset="0.8992" stopColor="#91AFC3" />
          <stop offset="1" stopColor="#97B6CB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_793_796"
          x1="76.5466"
          y1="69.5524"
          x2="76.5466"
          y2="81.7214"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.0937637" stopColor="#14181A" />
          <stop offset="0.3335" stopColor="#424F59" />
          <stop offset="0.5525" stopColor="#677C8A" />
          <stop offset="0.7436" stopColor="#819BAD" />
          <stop offset="0.8992" stopColor="#91AFC3" />
          <stop offset="1" stopColor="#97B6CB" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_793_796"
          x1="47.0866"
          y1="67.5245"
          x2="47.0866"
          y2="85.6079"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.0937637" stopColor="#14181A" />
          <stop offset="0.3335" stopColor="#424F59" />
          <stop offset="0.5525" stopColor="#677C8A" />
          <stop offset="0.7436" stopColor="#819BAD" />
          <stop offset="0.8992" stopColor="#91AFC3" />
          <stop offset="1" stopColor="#97B6CB" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_793_796"
          x1="37.2674"
          y1="69.5524"
          x2="37.2674"
          y2="81.7213"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.0937637" stopColor="#14181A" />
          <stop offset="0.3335" stopColor="#424F59" />
          <stop offset="0.5525" stopColor="#677C8A" />
          <stop offset="0.7436" stopColor="#819BAD" />
          <stop offset="0.8992" stopColor="#91AFC3" />
          <stop offset="1" stopColor="#97B6CB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const PaginationArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16506 19.503L10.5271 2.993C11.1171 1.669 12.8821 1.669 13.4731 2.993L20.8351 19.503C21.5021 20.998 20.0211 22.55 18.6331 21.809L12.7291 18.657C12.2701 18.412 11.7291 18.412 11.2711 18.657L5.36706 21.809C3.97906 22.549 2.49706 20.999 3.16506 19.503Z"
        fill="#00C5F4"
      />
    </svg>
  );
};

```

# src/components/common/RegistrationModal.tsx

```tsx
import React from 'react';

const RegistrationModal = ({
  setShowModal
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-darkBackGround shadow-lg w-[550px] h-72 flex rounded-[30px] opacity-95 relative">
        <div className="relative flex items-center justify-center w-1/4">
          <span className="text-[#FDFEFF] z-20 absolute text-4xl">✓</span>
          <div className="bg-skyblue opacity-95 w-full h-full rounded-l-[30px]"></div>
        </div>
        <div className="flex flex-col justify-around p-4 w-full bg-darkBackGround rounded-r-[30px]">
          <button 
            onClick={() => setShowModal(false)}
            className="text-[#FDFEFF] z-20 absolute top-0 right-0 mr-6 mt-4 cursor-pointer text-xl"
          >
            ✕
          </button>
          <h2 className="text-lg text-[#FDFEFF] mt-4">Registration Successful!</h2>
          <p className="text-md font-extralight text-[#FDFEFF] -mt-4">
            Thanks for registering for AthletiFi Select! You will receive an email with next steps soon.
          </p>
          <div className="flex justify-end mt-4">
            <button
              className="text-basemd text-[#FDFEFF] font-extralight py-px mr-6 border-b border-skyblue hover:text-skyblue"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
```

# src/components/common/Seo.tsx

```tsx
// Importing the Head component from Next.js for handling the head of the page

import Head from "next/head";

// Interface to define the properties of the 'pageSEO' object
interface PageSEO {
  // Define the properties of the 'pageSEO'
  title: string;        // Title of the page
  description: string;  // Description of the page
  websiteURL: string;   // URL of the website
  image: string;        // Image URL for SEO
}

// Functional component to handle SEO settings
const Seo: React.FC<{ pageSEO: PageSEO }> = ({ pageSEO }) => {

  return (
    <>
      <Head>
        <title>{pageSEO.title}</title>
        <meta name="title" content={pageSEO.title} />
        <meta name="description" content={pageSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageSEO.websiteURL} />
        <meta property="og:title" content={pageSEO.title} />
        <meta property="og:description" content={pageSEO.description} />
        <meta property="og:image" content={pageSEO.image} />
        <meta property="twitter:card" content={pageSEO.websiteURL} />
        <meta property="twitter:url" content={pageSEO.websiteURL} />
        <meta property="twitter:title" content={pageSEO.title} />
        <meta property="twitter:description" content={pageSEO.description} />
        <meta property="twitter:image" content={pageSEO.image} />
      </Head>
    </>
  );
};

export default Seo;

```

# src/components/common/SocialPopUp.tsx

```tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowButton,
  FacebookIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "./Icon";

const SocialPopUp = () => {
  return (
    <>
      <div className="bg_social_icon flex items-start justify-center gap-[20px] sm:fixed sm:top-[90px] top-[100%] left-[20%] sm:left-1/2 z-20 flex-col-reverse p-6 ">
        {/* CONTACT US BUTTON */}
        <div className="flex gap-4 flex-col">
          {/* SOCIAL ICONS LINKS */}
          <Link
            className="hover:-translate-y-1 transition duration-300 ease-out flex items-center"
            href="https://www.tiktok.com/@athletifi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiktokIcon />
            <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
              Tiktok
            </span>
          </Link>
          <Link
            className="hover:-translate-y-1 transition duration-300  flex items-center"
            href="https://www.facebook.com/profile.php?id=61553263775533"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
            <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
              Facebook
            </span>
          </Link>
          <Link
            className="hover:-translate-y-1 transition duration-300  flex items-center"
            href="https://twitter.com/Athletifi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
            <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
              Twitter
            </span>
          </Link>
          <Link
            className="hover:-translate-y-1 transition duration-300  flex items-center"
            href="https://www.instagram.com/athletifi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/img/svg/Instagram.svg"
              alt="grid-lines"
              width={32}
              height={32}
            />
            <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
              Instagram
            </span>
          </Link>
          <Link
            className="hover:-translate-y-1 transition duration-300  flex items-center"
            href="https://www.linkedin.com/company/athletifi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
              Linkedin
            </span>
          </Link>
          <Link
            href="/sign-up"
            className="sm:px-[24px] px-4 sm:py-[14.5px] py-2 flex bg-skyblue text-base font-semibold text-white font-Segoe leading-6 gap-[6px] group border border-skyblue hover:bg-black hover:text-skyblue join_now_btn transition duration-300 ease-in-out social_btn_contact_us relative z-20"
          >
            Contact Us
            <span className="group-hover:translate-x-3 transition duration-300 ease-out">
              <ArrowButton />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialPopUp;

```

# src/components/home/CoachesSection.tsx

```tsx
import React from 'react';
import { BlueShodow, UnderLIneText } from '../common/Icon';
import Image from 'next/image';
import BlueButton from '../common/BlueButton';
import Link from 'next/link';

const CoachesSection = () => {
  return (
    <>
      <section className="my-5 relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full">
        <div className='absolute top-0 xl:-top-[70px] -end-[80px] xl:w-[250px] xl:h-[380px] z-0'>
          <Image 
            className='max-w-[300px] me-0' 
            src='/assets/img/png/football_net.png' 
            width={300} 
            height={286} 
            alt='what we do foot ball image' 
          />
        </div>
        <Image 
          className='absolute -top-[250px] end-0 z-0' 
          src='/assets/img/png/what-we-do-shadow.png' 
          width={448} 
          height={448} 
          alt='shadow' 
        />
        <span className='absolute top-50 start-0 z-0'>
          <BlueShodow />
        </span>

        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
          <div className="lg:py-16 py-5 md:py-10 sm:mt-6 z-0">
            <div 
              className='flex flex-col items-center justify-center relative'
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='ease-in-sine'
              data-aos-delay='300'
              data-aos-offset='100'
            >
              <h2 className='p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[60px] relative z-20 text-center md:mb-4'>
                <span className='relative'>
                  Creating Excellence
                  <span className='absolute -bottom-2 left-0 z-0'>
                    <UnderLIneText />
                  </span>
                </span>
              </h2>
              <p className='font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
                Our coaching staff brings elite experience from various competitive levels, including the Philadelphia Union Academy, Penn State Abington, and leading youth academies. During the 2024 Summer Select program, they led our teams to remarkable success with 4 out of 5 teams winning their groups at the EDP Summer Sizzler tournament, and our 2011 boys team securing victory at the Hershey Summer Classic.
              </p>

              <p className='font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
                Our coaches follow the La Liga methodology, known for its emphasis on technical skills, tactical awareness, and game intelligence. During training, they focus on improving gameplay intelligence, reactions, and core principles within the game. Their approach has proven successful, with teams showing significant improvement throughout the season and demonstrating excellence in tournament play.
              </p>

              <div className='opacity-88 mb-5'>
                <Image 
                  data-aos='fade-in'
                  data-aos-duration='600'
                  data-aos-easing='linear'
                  data-aos-delay='200'
                  data-aos-offset='200'
                  className='m-10 max-w-[290px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[652px] opacity-1'
                  src='/assets/img/webp/coaches-on-blue.webp'
                  width={500}
                  height={500}
                  alt={'AthletiFi Select Coaches'}
                />
              </div>

              <div className='flex justify-center items-center mt-0'>
                <Link href='/about-coaches'>
                  <BlueButton text='Learn more about the coaches' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoachesSection;
```

# src/components/home/DigitalCardInfoSection.tsx

```tsx
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import BlueButton from "../common/BlueButton";
import Link from "next/link";

const DigitalCardInfoSection = () => {
  // const playerImageCenter = 'jose-nft-img';
  // const playerImageRight = 'stebi-nft-img';
  // const playerImageLeft = 'anderson-nft-img-new';
  const playerImageCenter = 'player-image-center';
  const playerImageRight = 'player-image-right';
  const playerImageLeft = 'player-image-left';

  // SLIDER
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-5 mb-14 relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full">
      <div className='absolute sm:-bottom-[40px] lg:-bottom-[80px] bottom-0 start-0 lg:w-[230px] lg:h-[286px] opacity-30'>
        <Image
          className='xl:max-w-[240px] sm:max-w-[140px] max-w-[100px]'
          src='/assets/img/png/left-ball.png'
          width={240}
          height={286}
          alt='what we do foot ball'
        />
      </div>
      <Image
        className='absolute -bottom-[300px] start-0 -z-10'
        src='/assets/img/png/left-shadow.png'
        width={448}
        height={448}
        alt='shadow'
      />
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto relative z-10'>
        <div className="blue_linear_gradient relative after:absolute flex justify-center flex-col items-center  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          <div className='mb-4'>
            <h2
              className='lg:text-5xl md:text-[40px] sm:text-4xl text-[24px] text-primary font-medium font-HelveticaNeueMedium relative z-20 max-w-[670px] mx-auto text-center md:pt-[24px] pt-6 px-3 md:px-0 lg:pt-[56px] sm:leading-[45px] md:!leading-[60px]'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='200'
              data-aos-offset='200'
            >
              <span className='relative'>
                {/* Stats Reimagined. */}
                Track Progress with Digital Player Cards
              </span>{' '}
              {/* Exposure elevated. */}
            </h2>
            <p
              className='font-Segoe font-normal text-md text-center text-[#FDFEFF] leading-7 px-4 md:px-0 max-w-[700px] lg:max-w-[769px] mx-auto md:mt-4 mt-2 relative z-20'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='400'
              data-aos-offset='200'
            >
              AthletiFi Select offers a personalized Player Card to every participant, highlighting their unique soccer journey. These cards are the ultimate tool for tracking and highlighting skills and achievements. 
              <br/>
              Parents also benefit from dynamic progress reports, keeping them up-to-date on their child's development. The Player Dashboard offers an interactive platform to monitor progress, share highlights, and connect with family, friends, and recruiters.
            </p>
         
          </div>
          {/* CARD SLIDER SAMLL SCREEN */}
          <Slider
            {...settings}
            className=" px-5 w-full justify-between items-center pt-5 md:pt-0 max-w-[1000px] mx-auto lg:justify-center relative z-10 before:content-[''] before:absolute before:w-[448px] before:h-[448px] before:-top-20 before:left-1/2 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/2 before:-z-10 before:rounded-full pb-6 sm:pb-0"
          >
            {/* Left Image */}
            <div
              className='md:py-16 sm:pb-8'
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease'
              data-aos-delay='400'
            >
              <div style={{ transform: 'translateX(0px)' }}>
                <Image
                  className='mx-auto w-full max-w-[350px]'
                  src={`/assets/img/webp/${playerImageLeft}.webp`}
                  width={280}
                  height={280}
                  alt='left-nft-img'
                />
              </div>
            </div>
            {/* Center Image */}
            <div
              className=' md:py-16 sm:pb-8 relative z-10 '
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease'
              data-aos-delay='800'
            >
              <div>
                <Image
                  className='mx-auto w-full max-w-[350px]'
                  src={`/assets/img/webp/${playerImageCenter}.webp`}
                  width={280}
                  height={280}
                  alt='center-nft-image'
                />
              </div>
            </div>
            {/* Right Image */}
            <div
              className='md:py-16 sm:pb-8' // mr-[2000px]"
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease'
              data-aos-delay='1200'
            >
              <div style={{ transform: 'translateX(0px)' }}>
                <Image
                  className='mx-auto w-full max-w-[350px]'
                  src={`/assets/img/webp/${playerImageRight}.webp`}
                  width={280}
                  height={280}
                  alt='right-nft-image'
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex lg:justify-center justify-center items-center mt-5 z-50">
                <Link href="/about-cards">
                  <BlueButton text="Learn more about the Digital Player Cards" />
                </Link>
              </div>
      </div>
    </section>
  );
};

export default DigitalCardInfoSection;

```

# src/components/home/HomeTitleSection.tsx

```tsx
// HomeTitleSection.tsx

// This component renders the hero section on the homepage, which is the top section below the menu with a big image and a call to action.

import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlueButton from "../common/BlueButton";

const HomeTitleSection = () => {
  return (
    <>
      <div className="container home-title-section md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="max-w-[490px] lg:max-w-[520px] xl:max-w-[608px]">
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
            🥅
            </h1>
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
            ⚽️
            </h1>
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
            🏆
            </h1>
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
              Eastern PA's Elite Soccer Experience 
            </h1>
            <p className="font-Segoe text-white text-[16px] sm:text-md font-normal mt-4 opacity-80 text-center lg:text-start">
              Premier Summer Development Program for U9-U17 Players
            </p>
            <br></br>
            <h3 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-md font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
              🌞 Registration now open 🌞 
            </h3>
            <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-lg font-large">
              Summer Select 2025
            </h4>
            <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-md font-medium leading-[15px] sm:leading-[25px] md:leading-[30px] lg:leading-[40px]">
              🗓️ June 10 - July 27, 2025
            </h4>
            <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-md font-medium leading-[15px] sm:leading-[25px] md:leading-[30px] lg:leading-[40px] mt-4">
            {/* <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-md font-medium leading-[15px] sm:leading-[25px] md:leading-[30px] lg:leading-[40px]"> */}
              ⚡️ Early Bird Discount Available!
            </h4>
            <div className="flex lg:justify-start justify-center lg:mt-10 mt-7 lg:pb-14 lg:mb-10">
              <Link href="/sign-up">
                <BlueButton text="Sign up for Summer Select!" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* LAPTOP AND MOBILE SCREEN IMG */}
      <div className="pt-6 sm:pt-10 lg:pt-0">
        <div className="sm:absolute right-0 top-[65%] md:-translate-y-1/2 max-w-[400px] sm:max-w-[500px] xl:max-w-[600px] sm:hidden lg:inline-block ms-auto">
          <Image
            className="w-full"
            src="/assets/img/webp/hero_female_player.webp"
            alt="female-player"
            width={600}
            height={600}
          />
        </div>
      </div>

      {/* IPAD SCREEN IMG */}
      <div className="hidden sm:block lg:hidden w-full">
        <Image
          className="mx-auto"
          src="/assets/img/webp/hero_female_player_2.webp"
          alt="female-player"
          width={350}
          height={350}
        />
      </div>
    </>
  );
};

export default HomeTitleSection;
```

# src/components/home/LatestNews.tsx

```tsx
// LatestNews.tsx

// This component displays the latest news articles on the homepage.
// It fetches data from the Strapi CMS and renders it in a list format.

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BlueButton from "../common/BlueButton";

interface NewsProps {
  allNewsList: any;
}

const LatestNews: React.FC<NewsProps> = (props) => {
  const { allNewsList } = props;
  const DataArray = allNewsList.data;
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(
    allNewsList.meta.pagination.pageCount
  );

  // Calculate the start and end indexes of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = DataArray.slice(startIndex, endIndex);


 
  return (
    <>
      <div className="py-14 md:py-0 relative before:content-[''] before:absolute sm:before:w-[448px] before:w-[248px] sm:before:h-[448px] before:h-[248px] before:top-0 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/4 before:z-0 before:rounded-full after:content-[''] after:absolute sm:after:w-[448px] sm:after:h-[448px] after:w-[248px] after:h-[248px] after:bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/4 after:z-0 after:rounded-full">
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto relative z-10">
          <h2
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="linear"
            data-aos-delay="100"
            data-aos-offset="200"
            className="text-center font-HelveticaNeueMedium font-medium lg:text-5xl md:text-[40px] text-[26px] text-primary md:py-10 pb-5"
          >
            <span className="relative after:content after:absolute after:bottom-[-6px] md:after:bottom-[-2px] after:left-0 md:after:w-[209px] after:w-[150px] after:h-2 after:bg-blue-underline after:bg-contain after:bg-no-repeat">
              Latest News
            </span>
          </h2>
          {displayedItems.map((val: any, index: any) => {
            return (
              <Link href={`/news/${val.slug}?page=1`} key={val.id}>
                <div
                  className="flex md:flex-row flex-col lg:p-8 p-6 bg-darkgray lg:gap-x-12 sm:gap-7 gap-3 rounded-[20px] mb-6 sm:mt-5  "
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-easing="ease"
                  data-aos-delay={val.delay}
                  key={index}
                >
                  <Image
                  className="md:w-[315px] max-h-[244px] rounded-[10px] object-cover w-full"
                    src={`https://vidalco.in${val.image.url}`}
                    width={315}
                    height={240}
                    alt="football match"
                  />
                  <div className="sm:pt-0 pt-3">
                    {/* NEWS HEADING */}
                    <h3 className="sm:text-basemd text-[18px] text-primary font-HelveticaNeueMedium leading-[140%]">
                      {val.title}{" "}
                    </h3>
                    <div className="flex sm:items-center sm:flex-row flex-col sm:gap-3 gap-2 pt-2">
                      <h4 className="lg:pe-3 ">
                        <span className="lg:text-md text-base text-primary font-Segoe opacity-80 font-normal lg:pe-2 pe-1">
                          by
                        </span>{" "}
                        <span className="lg:text-base text-sm text-primary font-Segoe font-semibold">
                          {val.author.fullName}
                        </span>
                      </h4>
                      {/* NEWS CATEGORY */}
                      {val.categories.map((obj: any, i: any) => {
                        return (
                          <span key={i} className="flex gap-x-3">
                            <button className="lg:text-base md:text-[13px] text-sm text-skyblue font-Segoe font-normal py-2 px-3 sm:py-[10px] sm:px-[18px] bg-matchtittles rounded-full leading-[150%] duration-300 hover:text-white">
                              {obj.title}
                            </button>
                          </span>
                        );
                      })}
                    </div>
                    {/* NEWS DATA */}
                    <p className="sm:text-md text:base text-primary opacity-80 font-Segoe leading-[150%] sm:pt-6 pt-3 lg:pe-14 sm:pe-4">
                      {val.previewSummary}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* <div className="flex justify-between lg:max-w-[210px] py-3  max-w-[230px] mx-auto bg-darkgray rounded-full lg:px-8 px-6 items-center scrollmodify">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? " opacity-70 cursor-not-allowed" : ""
              } -rotate-90 hover:-translate-x-1 duration-200`}
            >
              <PaginationArrow />
            </button>
            <div className="text-white">
              <span>{currentPage}</span>
              <span className="text-white px-3">of</span>
              <span>{totalPages}</span>
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? " opacity-70 cursor-not-allowed"
                  : ""
              } rotate-90 hover:translate-x-1 duration-200 `}
            >
              <PaginationArrow />
            </button>
          </div> */}

          <div className="flex justify-center items-center pt-10 md:pb-14 lg:mb-10 ">
            <Link href="/news?page=1">
              <BlueButton text="View all" />
            </Link>
          </div>
        </div>
        {/* BACKGROUND RIGHT GRID */}
        <Image
          className="xl:w-[600px] lg:[550px] sm:w-[400px] w-[250px] absolute bottom-10 right-[-50px] -z-10"
          src="/assets/img/svg/grid-lines.svg"
          width={716}
          height={692}
          alt={"grid image"}
        />
        {/* BACKGROUND LEFT GRID */}
        <Image
          className="xl:w-[606px] lg:[550px] sm:w-[400px] w-[250px] absolute top-40 -translate-y-1/3 left-2 -z-10"
          src="/assets/img/svg/grid-lines.svg"
          width={716}
          height={692}
          alt={"grid image"}
        />
      </div>
    </>
  );
};

export default LatestNews;
```

# src/components/home/OurStrategicAdvisor.tsx

```tsx
// OurStrategicAdvisor.tsx

// This component showcases the strategic advisors associated with the company.

import Image from "next/image";
import React from "react";
import BlueButton from "../common/BlueButton";
import Link from "next/link";

const OurStrategicAdvisor = () => {
  return (
    <>
      <div className=" bg-no-repeat bg-cover relative">
        {/* BACKGROUND GRID IMAGE */}
        <Image
          className="absolute top-0 -right-0 w-[40%] lg:block hidden z-0  h-[100%] opacity-70"
          src="/assets/img/png/football_net.png"
          width={996}
          height={768}
          alt="football net"
        />
        <div className="container xl:pb-14">
          <div
            data-aos="fade-in"
            data-aos-duration="600"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-offset="200"
            className="flex items-center justify-center lg:gap-8 xl:gap-[114px] flex-col-reverse lg:flex-row pt-14 pb-14 xl:pt-[95px] xlpb-[150px]"
          >
            {/* ADVISOR IMAGE */}
            <Image
              className="max-w-[270px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[475px] xl:max-h-[430px] mt-8 lg:mt-0 shadow-coach-shadow"
              src="/assets/img/webp/meet_our_strategic_profile.webp"
              alt="profile"
              width={475}
              height={430}
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-delay="200"
              data-aos-offset="200"
              className="lg:max-w-[555px] lg:after:w-[690px] relative after:absolute after:content-[''] after:lg:h-[420px] lg:after:bg-[#040F16] after:blur-[55px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-0"
            >
              <div className="relative z-10">
                <h3 className="text-primary font-HelveticaNeueMedium text-[26px] sm:text-[36px] xl:text-5xl lg:text-[43px] md:text-[40px] font-medium lg:!leading-[60px] sm:leading-[45px] md:leading-[58px] leading-[36px] text-center lg:text-start">
                  <span className="relative after:absolute after:bottom-[-8px] sm:after:bottom-[-5px] after:left-0 md:after:w-[209px] after:w-[150px] after:h-2 after:bg-blue-underline after:bg-contain after:bg-no-repeat">
                    Meet our
                  </span>{" "}
                  strategic advisor Darren John
                </h3>
                <p className="text-primary text-base md:text-md font-Segoe font-normal opacity-80 mt-4 text-center lg:text-start">
                  In 2009 Darren played in the Trinidad and Tobago pro league as
                  a 16 year old where he completed one year with Northeast Stars
                  before migrating to the U.S. During his coaching career Darren
                  has coached at several clubs in Montgomery County which
                  includes Philadelphia Union pre academy and FC Delco. He is
                  also the technical director of the Villanova Soccer Academy.
                </p>
                <div className="flex justify-center lg:justify-start pt-5 lg:pt-10">
                  <Link href="/sign-up">
                    <BlueButton text="Join now" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStrategicAdvisor;

```

# src/components/home/TrustedPartners.tsx

```tsx
import React from "react";
import { EyeBallIcon, VillanovaIcon } from "../common/Icon";

const TrustedPartners: React.FC = () => {
  return (
    <>
      <section>
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-5">
          <h2
            className="text-center font-HelveticaNeueMedium font-medium lg:text-5xl md:text-[40px] sm:text-4xl text-[26px] text-primary sm:py-10 pb-5 leading-[120%]"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="linear"
          >
            <span className="relative after:content after:absolute after:bottom-[-10px] sm:after:bottom-[-4px] after:left-0 md:after:w-[209px] after:w-[150px] after:h-2 after:bg-blue-underline after:bg-contain after:bg-no-repeat">
              Our trusted
            </span>{" "}
            partners
          </h2>
          <div
            className="flex md:justify-between flex-col md:flex-row lg:pt-5 sm:gap-4 gap-3 md:items-start items-center"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-offset="200"
          >
            <h3 className=" max-w-[396px] text-primary sm:text-2xl text-md font-HelveticaNeueMedium md:text-start text-center">
              Stats for the next generation of soccer superstars
            </h3>
            <h4 className="font-Segoe text-primary opacity-80 max-w-md md:text-start text-center">
              We have partnered with some of the top soccer clubs in the
              Mid-Atlantic region to bring sports technology to new heights.
            </h4>
          </div>
          <div className="flex justify-evenly xl:mt-16 mt-10 xl:mb-28 sm:mb-14 mb-4 sm:flex-row flex-col">
            {/* EYEBALL LOGO */}
            <div
              className="md:w-[43%] sm:max-w-[48%] w-full md:h-[152px] h-[120px] border border-solid border-[#49545C] hover:border-skyblue duration-300 transition-all flex justify-center items-center bg-[#000B13] rounded-lg"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-easing="linear"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              <EyeBallIcon />
            </div>
            {/* VILLANOVA LOGO */}
            <div
              className="md:w-[43%] sm:max-w-[48%] w-full mt-4 sm:mt-0 md:h-[152px] h-[120px] border border-solid border-[#49545C] hover:border-skyblue duration-300 transition-all flex justify-center items-center bg-[#000B13] rounded-lg"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-easing="linear"
              data-aos-delay="1000"
              data-aos-offset="200"
            >
              <VillanovaIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedPartners;

```

# src/components/home/WhyAthletifiSelectSection.tsx

```tsx
import React from 'react';
import Image from 'next/image';
import BlueButton from '../common/BlueButton';
import Link from 'next/link';
import TournamentSection from '../sign-up/TournamentSection';

const WhyAthletifiSelectSection = () => {
  // Get the current date
  const currentDate = new Date();
  // Define the target date
  const targetDate = new Date('March 1, 2025');

  // Determine whether to show the early bird discount
  const showEarlyBirdDiscount = currentDate < targetDate;

  return (
    <>
      <section className="my-5 relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full">
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto relative z-10 lg:mt-0 xl:mt-0'>
          <div className='lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 sm:bg-playground-unique bg-playground-unique-sm bg-opacity-50 bg-[length:100%_100%] bg-center bg-no-repeat flex flex-col items-center'>
            <h2 className='lg:text-5xl md:text-[40px] sm:text-4xl text-[26px] text-primary font-HelveticaNeueMedium text-center py-2'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='200'
              data-aos-offset='200'>
              <span className='relative mb-4 lg:leading-[60px] leading-[120%]'>
                🌟 Summer Select '25🌟
              </span>
            </h2>

            <div data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='400'
              data-aos-offset='200'
              className='lg:max-w-[900px] mx-auto'>
              
              <p className='font-Segoe font-normal text-md text-primary opacity-80 text-center mt-4 mb-6'>
                Building on the incredible success of our 2024 program, AthletiFi Select returns for Summer 2025! Last year, our teams dominated local tournaments with four championship victories at the EDP Summer Sizzler and one at the Hershey Summer Classic. Join us this summer to be part of our winning tradition!
              </p>

              <h3 className='text-md font-bold mt-6 text-primary'>Program Features:</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li>⚽ Elite coaching from Eastern PA's finest</li>
                <li>🏋️‍♂️ 12 intensive training sessions</li>
                <li>🏆 Prestigious tournament participation</li>
                <li>📊 Performance tracking via AthletiFi Dashboard</li>
                <li>🎯 Individual skill development focus</li>
              </ul>

              <h3 className='text-md font-bold mt-6 text-primary'>Training Schedule</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li>📅 <strong>Dates:</strong> June 10 - July 27, 2025</li>
                <li>⏰ <strong>Times:</strong> Tuesdays & Thursdays, 6:00-7:30 PM</li>
                <li>📍 <strong>Location:</strong> Arcadia University, Glenside, PA</li>
                <li>👥 <strong>Ages:</strong> U9-U17 players (2008-2017 birth years)</li>
              </ul>

              <h3 className='text-md font-bold mt-6 text-primary'>Tournament Schedule</h3>
              <div className='pl-4 mb-6 text-primary'>
                {/* UNCOMMENT BELOW */}
                <TournamentSection />
              </div>

              <h3 className='text-md font-bold mt-6 text-primary'>Price and Discounts:</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li>💰 Program Fee: $499</li>
                {showEarlyBirdDiscount && (
                  <li>⚡ Early Bird Discount: Save $50 (ends March 1st)</li>
                )}
                <li>👨‍👩‍👧‍👦 Family Discount: extra 10% off for siblings</li>
              </ul>

              <div className='flex justify-center items-center mt-10'>
                <Link href='/about-program'>
                  <BlueButton text='Learn More About Our Programs' />
                </Link>
              </div>
            </div>

            {/* PLAYER IMAGE */}
            <div className='opacity-88 mt-12 mb-5'>
              <Image
                data-aos='fade-in'
                data-aos-duration='600'
                data-aos-easing='linear'
                data-aos-delay='200'
                data-aos-offset='200'
                className='mb-[1px] max-w-[290px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[652px] opacity-1'
                src='/assets/img/webp/coach-with-players.webp'
                width={500}
                height={500}
                alt={'coach with players'}
              />
            </div>
          </div>
        </div>

        {/* FOOTBALL IMAGE CORNER */}
        <Image
          className='absolute lg:w-[220px] sm:w-[150px] w-[100px] -bottom-8 right-0 z-0'
          src='/assets/img/png/unique-football.png'
          width={220}
          height={286}
          alt={'football'}
        />
      </section>
    </>
  );
};

export default WhyAthletifiSelectSection;
```

# src/components/sign-up/Description.tsx

```tsx
import React from 'react';
import Link from 'next/link';
import TournamentSection from './TournamentSection';

const Description = () => {
  // Get the current date
  const currentDate = new Date();
  // Define the target date
  const targetDate = new Date('March 1, 2025');

  // Determine whether to show the early bird discount
  const showEarlyBirdDiscount = currentDate < targetDate;

  return (
    <div className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
      <h3 className='text-md font-HelveticaNeueMedium mt-4'>Summer Select 2025 Details:</h3>
      <ul className='list-none pl-4 opacity-80 text-primary'>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Who:</span> 👥 Boys & girls, ages U9 - U17 (2008 - 2017 birth years)</li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">What:</span> 🏋️‍♂️ Comprehensive summer program including:</li>
        <ul className='list-none pl-6 mt-1'>
          <li>⚽︎ Intensive training sessions twice weekly</li>
          <li>⚽︎ Tournament participation</li>
          <li>⚽︎ Highlights and stats on the AthletiFi Platform</li>
          <li>⚽︎ Commemorative player cards</li>
        </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">When:</span> 🗓️ June 10 - July 27, 2025</li>
        <ul className='list-none pl-6 mt-1'>
          {/* UNCOMMENT BELOW */}
          <li>⚽︎ Training: Tuesdays and Thursdays, 6:00 PM—7:30 PM</li>
          {/* <li>• Break week: July 1-5 (Independence Day)</li> */}
          <li>⚽︎ 12 sessions total (two sessions per week)</li>
        </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Where:</span></li>
        <ul className='list-none pl-6 mt-1'>
          <li>📍 All training sessions: Arcadia University</li>
          {/* <li className='pl-4'>Jean Lenox West Field</li> */}
          <li className='pl-4'>450 South Easton Road, Glenside, PA</li>
        </ul>
        {/* UNCOMMENT BELOW */}
        {/* <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Tournaments:</span> 🏆</li> */}
        <div className='pl-6 mt-2 mb-4'>
          {/* <TournamentSection /> */}
        </div>
        {/* <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Program Highlights:</span> ⭐</li>
        <ul className='list-none pl-6 mt-1'>
          <li>• Elite coaching from Eastern PA's top coaches</li>
          <li>• Individual skill development focus</li>
          <li>• Real game experience through tournaments</li>
          <li>• Performance tracking via AthletiFi platform</li>
          <li>• Digital player cards with stats and highlights</li>
        </ul> */}
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Price and Discounts:</span> 💰</li>
        <ul className='list-none pl-6 mt-1'>
          <li>💸 Registration Fee: $499</li>
          {showEarlyBirdDiscount && (
            <li>🐦 Early Bird Discount: Save $50 (Ends March 1st)</li>
          )}
          <li>👨‍👩‍👧‍👦 Family Discount: extra 10% off for siblings</li>
          <li>
            <p className='font-Segoe font-normal text-sm text-primary opacity-80 text-left mt-4'>
              To claim the family discount, email us at{' '}
              <Link href="mailto:welcome@athletifiselect.com?subject=Just signed up! I'd like the sibling discount please">
                welcome@athletifiselect.com
              </Link>
              {' '} after signing up and list the names of each child.
            </p>
          </li>
        </ul>
      </ul>
      {/* <div className='bg-darkgray p-4 rounded-lg mt-6'>
        <p className='text-md font-bold text-skyblue'>🏆 Program Success 🏆</p>
        <p className='mt-2'>Building on our incredible 2024 season where AthletiFi Select teams achieved remarkable success, with all teams winning a tournament championship!</p>
      </div> */}
    </div>
  );
};

export default Description;
```

# src/components/sign-up/SignUpForm.tsx

```tsx
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ButtonWhiteArrow, UnderLIneText } from '../common/Icon';
import { PostRequestHandler } from '../common/api/Api';
import { PostSummerSelectData } from '../common/api/ApiUrls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { phone } from 'phone';
import RegistrationModal from '../common/RegistrationModal';

// Interface to describe the structure of an API error
interface ApiError extends Error {
  // The response property is specific to HTTP request errors
  response?: {
    status: number; // The HTTP status code
    data?: any; // The response data (structure depends on the API)
  };
}

const SignUpForm = () => {
  // CUSTOM INPUT-CHECK
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const initialState = {
    email: '',
    parentFirstName: '',
    playerFirstName: '',
    currentTeam: '',
    playerLastName: '',
    parentLastName: '',
    playerDOB: '',
    playerGender: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    state: '',
  };
  const [data, setData] = useState(initialState);

  console.log(data);

  const formHandler = async (e: any) => {
    e.preventDefault();
    const phoneNumber = phone(data.phoneNumber);
    if (!phoneNumber.isValid) {
      toast.error('Please enter a valid phone number.', {
        position: 'bottom-left',
      });
      return;
    }
    const formDetails = { data };
    setLoading(true);

    if (!checked) {
      toast.error('Please agree to the terms and privacy policy to proceed.', {
        position: 'bottom-left',
      });
      setLoading(false);
      return;
    }

    try {
      const { response, data } = await PostRequestHandler(
        PostSummerSelectData(),
        formDetails
      );

      if (data) {
        // The old banner:
        // toast(
        //   '✅ Thanks for registering! You will receive an email with next steps soon.',
        //   {
        //     position: 'bottom-left',
        //   }
        // );
        // setData(initialState);
        // New banner (Added Thanksgiving 2024):
        setData(initialState);
        setShowSuccessModal(true);
      } else if (response.status === 400) {
        // Handling 400 status for unique constraint violation
        toast.error(
          'There was an error submitting your application. If this persists please email us at welcome@athletifiselect.com',
          {
            position: 'bottom-left',
          }
        );
      } else {
        // Handle other no-data response scenarios
        toast.error(
          'Form submitted, but no response received. Please check your input.',
          {
            position: 'bottom-left',
          }
        );
      }
    } catch (error: unknown) {
      // Handling other types of errors
      toast.error('An unexpected error occurred. Please try again.', {
        position: 'bottom-left',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 sm:pb-[64px] sm:pt-[32px] lg:pt-[0px] xl:pt-[50px] lg:pb-[100px] xl:pb-[139px] relative z-20 overflow-hidden">
      {/* GRID-LINE IMG */}
      <Image
        className='lg:w-[462px] lg:h-[452px] w-40 h-40 lg:top-10 lg:-left-10 absolute -z-20 opacity-40'
        src='/assets/img/svg/news-grid-line.svg'
        width={400}
        height={448}
        alt='grid-line'
      />
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10'>
        <div className='flex justify-between flex-wrap grid-cols-2 w-full'>
          <div className='lg:w-1/2 w-full'>
            <div className='flex flex-col items-center lg:items-start'>
              <h2 className='font-HelveticaNeueMedium font-medium text-[24px] md:text-5xl sm:text-4xl leading-[60px] text-[#FDFEFF] md:mb-3'>
                <span className='relative'>
                  Registration Form
                  <span className='absolute -bottom-3 left-0'>
                    <UnderLIneText />
                  </span>
                </span>
              </h2>
              <form
                action='submit'
                onSubmit={(e) => formHandler(e)}
                className='w-full sm:w-3/4'
              >
                {/* Your Information Sub-header */}
                <h3 className='font-HelveticaNeueMedium text-2xl text-[#FDFEFF] mt-10'>
                  Player Information
                </h3>
                <div className='flex flex-col mt-6'>
                  {/* PLAYER NAME INPUT */}
                  <label className={formLabel} htmlFor='playerFirstName'>
                    Player Name
                  </label>
                  <div className='flex flex-wrap -mx-3'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <input
                        required
                        value={data.playerFirstName}
                        type='text'
                        placeholder='First Name'
                        className={formInput}
                        id='playerFirstname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            playerFirstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                      <input
                        required
                        value={data.playerLastName}
                        type='text'
                        placeholder='Last Name'
                        className={formInput}
                        id='playerLastname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            playerLastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col mt-6'>
                  {/* DOB INPUT*/}
                  <label className={formLabel} htmlFor='DOB'>
                    Player Date of Birth (DOB)
                  </label>
                  <input
                    required
                    value={data.playerDOB}
                    type='date'
                    placeholder='Date of Birth'
                    className={formInput}
                    id='DOB'
                    onChange={(e) =>
                      setData({
                        ...data,
                        playerDOB: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='flex flex-col mt-6'>
                  {/* GENDER INPUT */}
                  <label className={formLabel} htmlFor='gender'>
                    Gender
                  </label>
                  <select
                    required
                    value={data.playerGender}
                    className={`${formInput} bg-darkBackGround`}
                    id='playerGender'
                    onChange={(e) =>
                      setData({
                        ...data,
                        playerGender: e.target.value,
                      })
                    }
                  >
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    {/* <option value='Prefer not to say'>Prefer not to say</option> */}
                  </select>
                </div>
                <div className='flex flex-col mt-6'>
                  {/* CURRENT TEAM INPUT */}
                  <label className={formLabel} htmlFor='currentTeam'>
                    Current Team (If Any)
                  </label>
                  <input
                    value={data.currentTeam}
                    type='text'
                    placeholder='Team (optional)'
                    className={formInput}
                    id='currentTeam'
                    onChange={(e) =>
                      setData({
                        ...data,
                        currentTeam: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Your Information Sub-header */}
                <h3 className='font-HelveticaNeueMedium text-2xl text-[#FDFEFF] mt-10'>
                  Parent Information
                </h3>
                {/* Parent Information Form Fields */}
                <div className='flex flex-col mt-6'>
                  {/* Email Input */}
                  <label htmlFor='email' className={formLabel}>
                    Email
                  </label>
                  <input
                    required
                    type='email'
                    id='email'
                    placeholder='Email'
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className={formInput}
                  />
                </div>
                <div className='flex flex-col mt-6'>
                  {/* PARENT NAME INPUT */}
                  <label className={formLabel} htmlFor='parentFirstName'>
                    Your Name
                  </label>
                  <div className='flex flex-wrap -mx-3'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <input
                        required
                        value={data.parentFirstName}
                        type='text'
                        placeholder='First Name'
                        className={formInput}
                        id='parentFirstname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            parentFirstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                      <input
                        required
                        value={data.parentLastName}
                        type='text'
                        placeholder='Last Name'
                        className={formInput}
                        id='parentLastname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            parentLastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='phoneNumber' className={formLabel}>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    value={data.phoneNumber}
                    onChange={(e) =>
                      setData({ ...data, phoneNumber: e.target.value })
                    }
                    className={formInput}
                  />
                </div>

                {/* Street Address */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='streetAddress' className={formLabel}>
                    Street Address
                  </label>
                  <input
                    required
                    type='text'
                    id='streetAddress'
                    placeholder='Street Address'
                    value={data.streetAddress}
                    onChange={(e) =>
                      setData({ ...data, streetAddress: e.target.value })
                    }
                    className={formInput}
                  />
                </div>

                {/* City */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='city' className={formLabel}>
                    City
                  </label>
                  <input
                    required
                    type='text'
                    id='city'
                    placeholder='City'
                    value={data.city}
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    className={formInput}
                  />
                </div>

                {/* Zip Code */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='zipCode' className={formLabel}>
                    Zip Code
                  </label>
                  <input
                    required
                    type='text'
                    id='zipCode'
                    placeholder='Zip Code'
                    value={data.zipCode}
                    onChange={(e) =>
                      setData({ ...data, zipCode: e.target.value })
                    }
                    className={formInput}
                  />
                </div>

                {/* State Dropdown */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='state' className={formLabel}>
                    State
                  </label>
                  <select
                    required
                    id='state'
                    value={data.state}
                    onChange={(e) =>
                      setData({ ...data, state: e.target.value })
                    }
                    className={`${formInput} bg-darkBackGround`}
                  >
                    <option value=''>Select State</option>
                    <option value='Pennsylvania'>Pennsylvania</option>
                    <option value='New Jersey'>New Jersey</option>
                    <option value='Delaware'>Delaware</option>
                    <option value='New York'>New York</option>
                    <option value='Alabama'>Alabama</option>
                    <option value='Alaska'>Alaska</option>
                    <option value='Arizona'>Arizona</option>
                    <option value='Arkansas'>Arkansas</option>
                    <option value='California'>California</option>
                    <option value='Colorado'>Colorado</option>
                    <option value='Connecticut'>Connecticut</option>
                    <option value='Delaware'>Delaware</option>
                    <option value='Florida'>Florida</option>
                    <option value='Georgia'>Georgia</option>
                    <option value='Hawaii'>Hawaii</option>
                    <option value='Idaho'>Idaho</option>
                    <option value='Illinois'>Illinois</option>
                    <option value='Indiana'>Indiana</option>
                    <option value='Iowa'>Iowa</option>
                    <option value='Kansas'>Kansas</option>
                    <option value='Kentucky'>Kentucky</option>
                    <option value='Louisiana'>Louisiana</option>
                    <option value='Maine'>Maine</option>
                    <option value='Maryland'>Maryland</option>
                    <option value='Massachusetts'>Massachusetts</option>
                    <option value='Michigan'>Michigan</option>
                    <option value='Minnesota'>Minnesota</option>
                    <option value='Mississippi'>Mississippi</option>
                    <option value='Missouri'>Missouri</option>
                    <option value='Montana'>Montana</option>
                    <option value='Nebraska'>Nebraska</option>
                    <option value='Nevada'>Nevada</option>
                    <option value='New Hampshire'>New Hampshire</option>
                    <option value='New Jersey'>New Jersey</option>
                    <option value='New Mexico'>New Mexico</option>
                    <option value='New York'>New York</option>
                    <option value='North Carolina'>North Carolina</option>
                    <option value='North Dakota'>North Dakota</option>
                    <option value='Ohio'>Ohio</option>
                    <option value='Oklahoma'>Oklahoma</option>
                    <option value='Oregon'>Oregon</option>
                    <option value='Pennsylvania'>Pennsylvania</option>
                    <option value='Rhode Island'>Rhode Island</option>
                    <option value='South Carolina'>South Carolina</option>
                    <option value='South Dakota'>South Dakota</option>
                    <option value='Tennessee'>Tennessee</option>
                    <option value='Texas'>Texas</option>
                    <option value='Utah'>Utah</option>
                    <option value='Vermont'>Vermont</option>
                    <option value='Virginia'>Virginia</option>
                    <option value='Washington'>Washington</option>
                    <option value='West Virginia'>West Virginia</option>
                    <option value='Wisconsin'>Wisconsin</option>
                    <option value='Wyoming'>Wyoming</option>
                  </select>
                </div>
                {/* CHECKBOX */}
                <div className="flex items-center gap-2 mt-4 sign_up_checkbox">
                  <input
                    type="checkbox"
                    id="Privacy-Policy"
                    onChange={event => setChecked(event.target.checked)}
                  />
                  <label
                    htmlFor="Privacy-Policy"
                    className="font-Segoe font-normal text-md md:max-w-[365px] text-[#FDFEFF] opacity-80 leading-[27px] "
                  >
                    I agree to the{' '}
                    <Link
                      href="/terms-of-use"
                      className="sign-up__legal-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Terms of Use
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/privacy-policy"
                      className="sign-up__legal-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {/* SIGN UP BUTTON */}
                <div className='flex mt-6 md:mt-8 lg:max-w-[400px]'>
                  <button
                    type='submit'
                    className={`sm:w-full justify-center text-center sm:px-[24px] px-4 sm:py-[14.5px] py-2 flex bg-skyblue text-base font-semibold text-white font-Segoe leading-6 gap-[6px] group border border-skyblue hover:bg-black  join_now_btn transition duration-300 ease-in-out ${
                      checked ? ' bg-skyblue' : ''
                    }`}
                  >
                    {loading ? 'Loading...' : ' Sign Up'}

                    <span className='group-hover:translate-x-3 transition duration-300 ease-out'>
                      <ButtonWhiteArrow />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-3/5 mx-auto w-full relative flex justify-center items-center z-20 before:content-[''] before:absolute before:w-[457px] before:h-[457px] before:-bottom-28 before:-right-40 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-z-10 before:rounded-full">
            {/* FOOTBALL PLAYER IMAGE */}
            <Image
              className='xl:max-w-[658px] xl:h-[610px] lg:absolute lg:right-0 mt-10 lg:mt-0'
              src='/assets/img/webp/signup-biting-medal.webp'
              width={658}
              height={598}
              alt='signUp-image'
            />
          </div>
        </div>
      </div>
      {showSuccessModal && <RegistrationModal setShowModal={setShowSuccessModal} />}
      <ToastContainer theme='dark' />
    </section>
  );
};

export default SignUpForm;

// Helper CSS classes
// const formLabel = {formLabel};
// const formInput = {formInput};

const formLabel =
  'font-Segoe font-normal group text-md md:max-w-[365px] text-[#FDFEFF] opacity-80 leading-[27px]';
const formInput =
  'font-Sugoe font-normal input:-webkit-autofill focus:border-[white] autofill:none text-base text-[#FDFEFF] leading-6 py-5 px-4 bg-transparent w-full lg:max-w-[400px] mt-[5px] border border-1 border-[#FFFFFF40] outline-none';

```

# src/components/sign-up/TournamentSection.tsx

```tsx
import Image from 'next/image';

export default function TournamentSection() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/hershey_summer_classic_049b4e952c.svg"
          alt="Hershey Summer Classic Logo"
          width={45}
          height={51}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">Hershey Summer Classic</span>
          <span className="text-sm opacity-80">June 14-15, 2025</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Image
          src="https://vidalco.in/uploads/2022_EDP_Summer_Sizzler_Logo_01_5c419f7507.png"
          alt="EDP Summer Sizzler Logo" 
          width={45}
          height={60}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold">EDP Summer Sizzler</span>
          <span className="text-sm opacity-80">July 26-27, 2025</span>
        </div>
      </div>
    </div>
  );
}
```

# src/components/terms/PrivacyPolicy.tsx

```tsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10 text-white">
      <section className="font-Segoe font-normal text-md leading-7 pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
        <p>
          <em>Last Updated: January 16, 2024</em>
        </p>

        <h2 className="legal-heading">1. Introduction</h2>
        <p className="legal-paragraph">
          Welcome to AthletiFi. We are committed to protecting the privacy of
          all individuals who interact with our services. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your information
          when you visit our website, use our mobile app, or engage with our
          digital sports trading card platform.
        </p>

        <h2 className="legal-heading">2. Information Collection</h2>
        <ul className="legal-list">
          <li>
            <strong>Personal Information:</strong> We may collect personal
            information such as your name, email address, and contact details
            when you register on our platform or subscribe to our services.
          </li>
          <li>
            <strong>Player Information:</strong> For players featured in our
            digital cards, we collect performance data, photographs, and other
            relevant sports-related information.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information on how our
            services are accessed and used, including but not limited to,
            clickstream data and interactions with our platform.
          </li>
        </ul>

        <h2 className="legal-heading">3. Use of Information</h2>
        <p className="legal-paragraph">
          The information we collect is used to:
        </p>
        <ul className="legal-list">
          <li>Provide, maintain, and improve our services.</li>
          <li>Communicate with you about your account or our services.</li>
          <li>Develop new products and services.</li>
          <li>Personalize your experience.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="legal-heading">4. Sharing of Information</h2>
        <p className="legal-paragraph">We may share your information with:</p>
        <ul className="legal-list">
          <li>Service providers who assist us in offering our services.</li>
          <li>Partners and affiliates for business purposes.</li>
          <li>Legal and regulatory authorities when required by law.</li>
        </ul>

        <h2 className="legal-heading">5. Data Security</h2>
        <p className="legal-paragraph">
          We implement appropriate technical and organizational measures to
          protect your personal data from unauthorized access, alteration,
          disclosure, or destruction.
        </p>

        <h2 className="legal-heading">6. Children’s Privacy</h2>
        <p className="legal-paragraph">
          Our services are not directed to individuals under the age of 13. We
          do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="legal-heading">7. Your Rights</h2>
        <p className="legal-paragraph">You have the right to:</p>
        <ul className="legal-list">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction or deletion of your personal information.</li>
          <li>
            Object to or restrict our processing of your personal information.
          </li>
        </ul>
        <h2 className="legal-heading">8. Changes to This Policy</h2>
        <p className="legal-paragraph">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="legal-heading">9. Contact Us</h2>
        <p className="legal-paragraph">
          If you have any questions or comments about these Terms, please
          contact us at{' '}
          <a href="mailto:support@athleti.fi">support@athleti.fi</a>.
        </p>
      </section>
      <br />
      <br />
    </div>
  );
};

export default PrivacyPolicy;

```

# src/components/terms/TermsOfUse.tsx

```tsx
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10 text-white">
      <section className="font-Segoe font-normal text-md leading-7 pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
        <p>
          <em>Last Updated: January 16, 2024</em>
        </p>

        <h2 className="legal-heading">1. Acceptance of Terms</h2>
        <p className="legal-paragraph">
          By accessing or using AthletiFi&apos;s digital sports platform,
          website, or mobile application (collectively, &quot;Services&quot;),
          you agree to be bound by these Terms of Use (&quot;Terms&quot;). If
          you do not agree to all of these Terms, do not use our Services.
        </p>

        <h2 className="legal-heading">2. Use of Services</h2>
        <ul className="legal-list">
          <li>
            <strong>Eligibility:</strong> You must be at least 13 years old to
            use our Services. Additional age restrictions may apply for certain
            features.
          </li>
          <li>
            <strong>Account Registration:</strong> You may need to register for
            an account to access some features of our Services.
          </li>
          <li>
            <strong>User Responsibilities:</strong> You are responsible for your
            use of the Services and for any content you provide, including
            compliance with applicable laws, rules, and regulations.
          </li>
        </ul>

        <h2 className="legal-heading">3. Intellectual Property</h2>
        <ul className="legal-list">
          <li>
            <strong>Ownership:</strong> All rights, title, and interest in and
            to the Services and its content, features, and functionality
            (including but not limited to information, software, text, displays,
            images, and the design) are owned by AthletiFi, its licensors, or
            other providers of such material.
          </li>
          <li>
            <strong>Restrictions:</strong> You must not reproduce, distribute,
            modify, create derivative works of, publicly display, publicly
            perform, republish, download, store, or transmit any material from
            our Services without prior written consent from AthletiFi.
          </li>
        </ul>

        <h2 className="legal-heading">4. Privacy</h2>
        <p className="legal-paragraph">
          Your use of our Services is also governed by our Privacy Policy.
          Please review our Privacy Policy, which also governs the Services and
          informs users of our data collection practices.
        </p>

        <h2 className="legal-heading">5. Disclaimers</h2>
        <p className="legal-paragraph">
          AthletiFi does not guarantee that the Services will be error-free or
          uninterrupted. The Services and its content are delivered on an
          &quot;as-is&quot; and &quot;as-available&quot; basis.
        </p>

        <h2 className="legal-heading">6. Limitation of Liability</h2>
        <p className="legal-paragraph">
          To the fullest extent provided by law, AthletiFi shall not be liable
          for any damages resulting from the use or inability to use the
          Services.
        </p>

        <h2 className="legal-heading">7. Indemnification</h2>
        <p className="legal-paragraph">
          You agree to indemnify, defend, and hold harmless AthletiFi, its
          officers, directors, employees, agents, licensors, and suppliers from
          and against all losses, expenses, damages, and costs, including
          reasonable attorneys&apos; fees, resulting from any violation of these
          Terms or your use of the Services.
        </p>

        <h2 className="legal-heading">8. Changes to Terms</h2>
        <p className="legal-paragraph">
          AthletiFi reserves the right, at its sole discretion, to change,
          modify, add, or remove portions of these Terms at any time.
        </p>

        <h2 className="legal-heading">9. Governing Law</h2>
        <p className="legal-paragraph">
          These Terms shall be governed by and construed in accordance with the
          laws of Pennsylvania.
        </p>

        <h2 className="legal-heading">10. Contact Information</h2>
        <p className="legal-paragraph">
          If you have any questions or comments about these Terms, please
          contact us at{' '}
          <a href="mailto:support@athleti.fi">support@athleti.fi</a>.
        </p>
      </section>
      <br />
      <br />
    </div>
  );
};

export default TermsOfUse;

```

# src/pages/_app.tsx

```tsx
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
```

# src/pages/_document.tsx

```tsx
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
```

# src/pages/about-cards.tsx

```tsx
// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import TrackTriumphs from '@/components/about-cards/TrackTriumphs';
import SoccerDevelopment from '@/components/about-cards/SoccerDevelopment';
import PlayerDashboardDevelopment from '@/components/about-cards/PlayerDashboardDevelopment';
import Backtotop from '@/components/common/Backtotop';
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';

const AboutCards = () => {
  // SEO
  const hero = {
    heading: 'Player Cards',
    title: 'AthletiFi Player Cards',
    subtitle: 'The fun and engaging way to follow youth soccer',
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutCards} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>
        <TrackTriumphs />
       {/* <SoccerDevelopment/> */}
        <PlayerDashboardDevelopment/>
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default AboutCards;

```

# src/pages/about-coaches.tsx

```tsx
// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import Coach1 from '@/components/about-coaches/Coach1';
import Coach2 from '@/components/about-coaches/Coach2';
import Coach3 from '@/components/about-coaches/Coach3';
import Coach4 from '@/components/about-coaches/Coach4';
import Philosophy from '@/components/about-coaches/Philosophy';
import Backtotop from '@/components/common/Backtotop';
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';

const AboutCoaches = () => {
  // SEO
  const hero = {
    heading: 'About The Coaches',
    title: 'Your Title Here',
    subtitle: 'Your Subtitle Here',
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutCoaches} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>
        <Coach1 />
        <Coach2 />
        <Coach3 />
        <Coach4 />
        <Philosophy />
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default AboutCoaches;

```

# src/pages/about-program.tsx

```tsx
// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import BeyondSummer from '@/components/about-program/BeyondSummer';
import SummerSelectDescription from '@/components/about-program/SummerSelect';
import GoalkeepingSection from '@/components/about-program/Goalkeeping';
import Backtotop from '@/components/common/Backtotop';
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';

const AboutProgram = () => {
  // SEO
  const hero = {
    heading: 'About The Program',
    title: 'Your Title Here',
    subtitle: 'Your Subtitle Here',
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutProgram} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>
        <SummerSelectDescription />
        <GoalkeepingSection />
        <BeyondSummer />
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default AboutProgram;

```

# src/pages/api/hello.ts

```ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

```

# src/pages/index.tsx

```tsx
// index.tsx
// This is the main landing page of the website.
// It includes various components to showcase the features and services offered.
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import DigitalCardInfoSection from '@/components/home/DigitalCardInfoSection';
import WhyAthletifiSelectSection from '@/components/home/WhyAthletifiSelectSection';
import CoachesSection from '@/components/home/CoachesSection';
import HomeTitleSection from '@/components/home/HomeTitleSection';
import Backtotop from '@/components/common/Backtotop';
import { useState, useEffect } from 'react';
import { PageLogo } from '@/components/common/Icon';
import Seo from '@/components/common/Seo';
import { GetRequestHandler } from '@/components/common/api/Api';
import { NewsListApiHandler } from '@/components/common/api/ApiUrls';
import { SEO_CONFIG } from '@/utils/seoConfig';

interface NewsProps {
  allNewsList: any;
}

// Main function component for the home page
const Home: React.FC<NewsProps> = (props) => {
  // PRELOADER
  // State variable for preloader. A preloader is a visual element that appears on the screen while a webpage or a portion of a webpage is loading.
  const [preloader, setpreloader] = useState(true);
  // The preloader state variable is initially set to true, indicating that the preloader should be displayed.

  // useEffect hook to handle preloader and body overflow
  useEffect(() => {
    // Delay for preloader to disappear
    setTimeout(() => {
      setpreloader(false);
    }, 1500);

    // Adding CSS classes to body for overflow control
    document.body.classList.add('overflow_anchor');
    if (preloader) {
      document.body.classList.add('overflow_hidden');
    } else {
      document.body.classList.remove('overflow_hidden');
    }
  });

  return (
    <div className="max-w-[5560px] mx-auto">
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.home} />
      {/* PRELOADER is conditionally rendered based on the value of the preloader state variable. */}
      {preloader && (
        <div className={`preloader fixed min-h-screen top-0 left-0 w-full z-50 flex justify-center items-center`}>
          <span>
            <PageLogo />
          </span>
        </div>
      )}

      <div className='overflow_hidden'>
        <div className='hero_homepage_bg min-h-screen bg-no-repeat bg-cover flex flex-col justify-center bg-center'>
          <Header />
          <div className='flex lg:items-center lg:flex-row flex-col relative'>
            <HomeTitleSection />
            <Image 
              className='absolute right-0 hero_grid_position -z-10 hidden lg:block w-[450px] xl:w-[700px]'
              src='/assets/img/svg/hero_grid.svg'
              alt='grid-lines'
              width={700}
              height={700}
              priority={true}  // Added priority for hero image
            />
          </div>
        </div>

        <WhyAthletifiSelectSection />
        <CoachesSection />
        <DigitalCardInfoSection />

        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await GetRequestHandler(NewsListApiHandler());
    return {
      props: {
        allNewsList: response,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        allNewsList: null,
      },
    };
  }
}

export default Home;
```

# src/pages/privacy-policy.tsx

```tsx
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';
import PrivacyPolicy from '@/components/terms/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  const hero = {
    heading: 'Privacy Policy',
    title: '',
    subtitle: ''
  };

  return (
    <>
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.home} />
      <div>
        <Header />
        <CommonHero hero={hero} />
        <PrivacyPolicy />
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

```

# src/pages/sign-up.tsx

```tsx
import CommonHero from "@/components/common/CommonHero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Seo from "@/components/common/Seo";
import SignUpForm from "@/components/sign-up/SignUpForm";
import Description from "@/components/sign-up/Description";
import { SEO_CONFIG } from "@/utils/seoConfig";

const Signup = () => {
  // Get the current date
  const currentDate = new Date();
  // Define the target date
  const targetDate = new Date('March 1, 2025');

  // Determine the sub-heading based on the current date
  const subHeading = currentDate < targetDate 
    ? "Register Now! 🌞 Early Bird Price Ends March 1st" 
    : undefined;

  // SEO
  const hero = {
    heading: "Sign-up for Summer Select 2025",
    subHeading: subHeading,
    title: "Join Our Elite Summer Soccer Program",
    subtitle: "Elite Training & Tournament Competition",
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.signUp} />
      <div className="bg-signup-hero-img bg-cover overflow-hidden">
        <Header />
        <CommonHero hero={hero} />
      </div>
      <section className='pt-2 pb-2 sm:mb-5 sm:pb-5 lg:mb-0 relative bg-hero-pattern bg-cover bg-center'>
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
          <div className=' relative pb-5 pt-2 lg:pb-16 md:pb-10 sm:mt-6 z-0'>
            <div
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='ease-in-sine'
              data-aos-delay='300'
              data-aos-offset='100'
            >
              {/* Instructions Section */}
              <div className='bg-darkgray p-4 rounded-lg shadow-md mb-6 font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
                <p className='text-md font-bold text-skyblue'>🏆 Getting started is easy 🏆</p>
                <div className='mt-2'>
                  <p className='mb-2 text-primary'>
                    1️⃣ Fill out this form to register your interest - no payment required yet ✍️
                  </p>
                  <p className='mb-2 text-primary'>
                    2️⃣ We'll process your registration shortly ⚡
                  </p>
                  <p className='mb-2 text-primary'>
                    3️⃣ We'll then email you a secure payment link to complete enrollment 🌟
                  </p>
                </div>
                <p className='mt-2 mb-4 text-primary'>
                  Questions? 📧 Email us at{' '}
                  <a href="mailto:welcome@athletifiselect.com" className='text-skyblue hover:underline'>
                    welcome@athletifiselect.com
                  </a>
                  {' '} - we're here to help!
                </p>
              </div>
              <Description />
            </div>
          </div>
        </div>
      </section>
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Signup;
```

# src/pages/terms-of-use.tsx

```tsx
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';
import TermsOfUse from '@/components/terms/TermsOfUse';

const TermsOfUsePage = () => {
  const hero = {
    heading: 'Terms of Use',
    title: '',
    subtitle: ''
  };

  return (
    <>
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.home} />
      <div>
        <Header />
        <CommonHero hero={hero} />
        <TermsOfUse />
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUsePage;

```

# src/styles/dev..css

```css
/* ================================================ NAV BAR ================================================== */
.overflow_hidden {
  overflow: hidden;
}

.nav_open {
  transition: all 0.3s linear;
}

.slideUp {
  -webkit-transform: translateY(-100px);
  transform: translateY(-100px);
  transition: transform 0.4s ease-out;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
}

.slideDown {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  transition: transform 0.4s ease-out;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
}

/* ================================================ HERO =========================================================== */
.hero_grid_position {
  top: 35%;
}

/* Header adjustments */
.header-class { /* Replace with your actual header class name */
  z-index: 10;
  position: relative;
}

/* Safari specific adjustment */
/* This targets Safari 7.1+ */
_::-webkit-full-page-media, _:future, :root .home-title-section {
  margin-top: 110px; /* Increased margin for Safari */
}

@media (max-width: 1024px) {
  .home-title-section {
    margin-top: 110px; /* Adjust based on your needs */
  }
}
/* ================================================ MEET OUR STRATEGIC ADVISOR ================================================ */
.join_now_btn:hover span {
  color: #00c5f4;
}

.join_now_btn:hover svg path {
  fill: #00c5f4;
}

/* PRELOADER */
.overflow_hidden {
  overflow: hidden;
}

.preloader {
  background-color: #000b13;
  animation: preloader_img 1.2s ease-in-out infinite alternate;
}

/* ============================ legal pages ================================= */

.legal-heading {
  font-weight: bold;
  margin-top: 2rem; 
  margin-bottom: 1rem; 
}

.legal-paragraph {
  text-align: justify;
  margin-bottom: 1rem; 
}

.legal-list {
  margin-bottom: 1rem;
  list-style-type: lower-alpha;
  list-style-position: outside;
  padding-left: 1.5rem;
}


/* ==============================  Social Icon================================ */

.bg_social_icon {
  background: rgba(0, 0, 0, 0.656);
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(20px) !important; */
}

/* SLIDER CUSTOM DOTES */
.social_btn_contact_us svg path {
  fill: white;
}

.news_nsights_slider .slick-dots {
  bottom: -35px;
}

.news_nsights_slider .slick-dots li.slick-active button:before {
  color: #00c5f4 !important;
}

.news_nsights_slider .slick-dots li button:before {
  color: #00c5f4 !important;
  font-size: 10px;
}

.social_icons_show:hover .social_btns {
  display: block;
}

.scroll_bar_hidden::-webkit-scrollbar {
  width: 0;
}

/* ============================ sign up ================================= */

/* ============================ sign up ================================= */

.sign_up_checkbox input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #60666b;
  background: transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 7px;
}

.sign_up_checkbox input[type="checkbox"]::before {
  content: "\2713";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  color: white;
  opacity: 0;
  padding: 7px;
}

.sign_up_checkbox input[type="checkbox"]:checked::before {
  opacity: 1;
}

.sign-up__legal-link {
  color: #00c5f4;
}

.sign-up__legal-link:hover {
  text-decoration: underline;
}


/* Style for date input type calendar picker indicator */
/* Style for date input type */
input[type='date'] {
  position: relative;
}

/* Adding underlay on the right side */
input[type='date']::before {
  content: '';
  position: absolute;
  right: 0; /* Align to the right side */
  top: 0;
  bottom: 0;
  width: 50px; /* Adjust the width as needed */
  background: rgba(255, 255, 255, 0.3); /* Light semi-transparent background */
  z-index: -1; /* Place it under the content */
}



/* PRELOADER ANIMATION */
@keyframes preloader_img {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.2);
  }
}

@media (min-width: 640px) {
  .nav_open {
    all: unset;
  }

  .news_nsights_slider .slick-dots {
    bottom: -40px;
  }
}
```

# src/styles/globals.css

```css
@import url("./dev..css");
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CUSTOM INPUT AUTO-FILL */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white !important;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
  transition: background-color 5000s ease-in-out 0s !important;
}

/* FONT-FAMILY HELVETICAMED */
@layer base {
  @font-face {
    font-family: "HelveticaNeueMedium";
    src: url("../../public/assets/fonts/HelveticaMedExt.ttf");
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueLight";
    src: url("../../public/assets/fonts/HelveticaNeueLight.ttf"); 
    font-weight: 300; 
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: "HelveticaNeueRegular";
    src: url("../../public/assets/fonts/HelveticaNeueRegular.ttf"); 
    font-weight: 400; 
    font-display: swap;
    font-style: normal;
  }

  .font-HelveticaNeueMedium {
    font-family: "HelveticaNeueMedium";
  }
  
  .font-HelveticaNeueRegular {
    font-family: "HelveticaNeueRegular";
  }

  .font-HelveticaNeueLight {
    font-family: "HelveticaNeueLight";
  }
  
  /* FONT-FAMILY SEGOE-UI */
  @font-face {
    font-family: "SegoeUI";
    src: url("../../public/assets/fonts/SegoeUI.ttf");
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }
}

.font-Segoe {
  font-family: "SegoeUI";
}

body {
  background-color: #000b13 !important;
}

/* BLUE-BORDER GRADIENT */
.blue_linear_gradient::after {
  background: linear-gradient(148.79deg, #11568c 17.97%, #00c5f4 91.1%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.blue_linear_gradient {
  -webkit-backdrop-filter: blur(17.5px);
  backdrop-filter: blur(17.5px);
}

/* BACKGROUDN-IMG */
.hero_homepage_bg {
  background-image: url("/assets/img/webp/header_bg.webp");
}

.bg-about-hero {
  background-image: url("/assets/img/webp/about-hero-darren.webp");
}

.bg-new-hero-img {
  background-image: url("/assets/img/webp/news-hero-img.webp");
}

.bg-signup-hero-img {
  background-image: url("/assets/img/webp/sign-up-hero-img.webp");
}

/* CUSTOM SCROLLBAR  */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: #000b13;
}

::-webkit-scrollbar-thumb {
  background-color: #00c5f4;
}

/* CUSTOM SCROLLBAR FOR FIREFOX */
html {
  scrollbar-color: #000b13 #00c5f4;
  scrollbar-width: thin;
}
.scrollmodify ::-webkit-scrollbar {
  width: 0px !important;
  height: 0 !important;
}

/* ==== ==== */
.loading-animation{
  overflow: hidden;
  background: #d0d0d0;
}

.loading-animation::before{
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  animation: loading 3s infinite;
  background: linear-gradient(to right, transparent,#807b7baf,transparent);
}

@keyframes loading {
  0%{
      transform: translateX(-100%);
  }
  100%{
      transform: translateX(100%);
  }
}

/* RECENT NEWS SLIDER HEIGHT  */
@media (max-width: 1023.9px) {
  #recentnews_slider .slick-track {
    display: flex !important;
  }

  #recentnews_slider .slick-slide {
    height: inherit !important;
    display: flex !important;
  }

  #recentnews_slider .slick-slide > div {
    display: flex;
  }
}

```

# src/utils/helpers.ts

```ts
// import { NewsArticle } from "../types";
interface NewsArticle {
  id: number;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Record<string, unknown>;
  author: Record<string, unknown>;
  categories: Record<string, unknown>[];
}

export function filterTargetArticle(allNewsData: { data: NewsArticle[] }, targetArticle: NewsArticle): NewsArticle[] {
  return allNewsData.data.filter((article) => article.slug !== targetArticle.slug);
}
```

# src/utils/seoConfig.ts

```ts
// seoConfig.ts
export const SEO_CONFIG = {
  aboutCoaches: {
    title: "About the Coaches | AthletiFi Select",
    description: "Meet the experienced and passionate coaching team behind AthletiFi Select, featuring elite coaches implementing the La Liga methodology.",
    websiteURL: "https://athletifiselect.com/about-coaches",
    image: "https://athletifiselect.com/about_coaches_meta.jpg",
    canonical: "https://athletifiselect.com/about-coaches",
  },
  aboutProgram: {
    title: "About AthletiFi Select | Premier Youth Soccer Program",
    description: "Discover AthletiFi Select's Summer 2025 Program - elite training, tournament competition, and comprehensive player development for U9-U17 players.",
    websiteURL: "https://athletifiselect.com/about-program",
    image: "https://athletifiselect.com/about_program_meta.jpg",
    canonical: "https://athletifiselect.com/about-program",
  },
  aboutCards: {
    title: "AthletiFi's Player Cards | Track Your Soccer Progress",
    description: "Experience AthletiFi's digital Player Cards - track achievements, view stats, and share highlights from our elite soccer program.",
    websiteURL: "https://athletifiselect.com/about-cards",
    image: "https://athletifiselect.com/player_cards_meta.jpg",
    canonical: "https://athletifiselect.com/about-cards",
  },
  home: {
    title: "AthletiFi Select | Summer 2025 Elite Soccer Training",
    description: "Join AthletiFi Select's Summer 2025 program. Elite coaching, tournament play, and comprehensive player development for young athletes in Eastern PA.",
    websiteURL: "https://athletifiselect.com",
    image: "https://athletifiselect.com/home_meta.jpg",
    canonical: "https://athletifiselect.com",
  },
  signUp: {
    title: "Register for Summer Select 2025 | AthletiFi Select",
    description: "Secure your spot in AthletiFi Select's Summer 2025 program. Elite training, tournament competition, and player development for U9-U17 athletes.",
    websiteURL: "https://athletifiselect.com/sign-up",
    image: "https://athletifiselect.com/sign_up_meta.jpg",
    canonical: "https://athletifiselect.com/sign-up",
  },
};
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "0rem",
          "2xl": "0rem",
        },
      },
      fontSize: {
        base: "16px",
        md: "18px",
        basemd: "24px",
        lg: "28px",
        lgxl: "36px",
        xl: "48px",
        xxl: "50px",
      },
      colors: {
        skyblue: "#00C5F4",
        primary: "#FDFEFF",
        bgnav: "rgba(0, 8, 15, 0.10)",
        matchtittles: "rgba(0, 197, 244, 0.05)",
        darkgray: "#0D171F",
        offwhite: "#B1B5B8",
        blue_linear_gradient: "rgba(255, 255, 255, 0.03)",
        darkBackGround: "#000b13"
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/img/png/about-hero-center-shadow.png')",
        "header-bg": "url('/assets/img/webp/header_bg_2.webp')",
        "blue-underline": "url('/assets/img/svg/blue-underline.svg')",
        "strategic-advisor": "url('/assets/img/webp/our_strategic_bg.webp')",
        "playground-unique": "url('/assets/img/webp/Unique-section-bg.webp')",
        "stats-reimagined": "url('/assets/img/svg/bg_stats_reimagined.svg')",
        "about-hero": "url('/assets/img/webp/about-hero-darren.webp')",
        "new-hero-img": "url('/assets/img/webp/news-hero-img.webp')",
        "playground-unique-sm":
          "url('/assets/img/webp/sm_Unique-section-bg.webp')",
        shadow_blue: "linear-gradient(151deg, #11568C 0%, #00C5F4 100%)",
      },
      boxShadow: {
        "coach-shadow": "0 50px 60px 0px rgba(88, 133, 249, 0.10)",
      },
    },
  },
  plugins: [],
};

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "src/pages/news/[news].js",
    "src/pages/news/index.js"
  ],
  "exclude": [
    "node_modules"
  ]
}

```


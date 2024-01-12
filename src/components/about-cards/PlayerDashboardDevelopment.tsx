// WhoWeAre.tsx

// This component renders the "Who We Are" section on the "About Us" page.
// It provides background information about the company and its team.

import React from 'react';
import { BlueShodow, UnderLIneText } from '../common/Icon';
import Image from 'next/image';
import Link from 'next/link';
import BlueButton from '../common/BlueButton';

const PlayerDashboardDevelopment = () => {
  return (
    <section className='pt-5 pb-5 sm:mb-14 sm:pb-12 lg:mb-0 relative'>
      <div className='absolute top-0 xl:-top-[70px] -end-[80px]  xl:w-[250px] xl:h-[380px] z-0'>
        {/* RIGHT FOOTBALL IMG */}
        <Image
          className='max-w-[300px] me-0'
          src='/assets/img/png/football.png'
          width={300}
          height={286}
          alt='what we do foot ball image'
        />
      </div>
      {/* SHADOW IMG */}
      <Image
        className='absolute -top-[250px] end-0 z-0'
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
            <h2 className=' p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4'>
              <span className='relative '>
                Soccer Development
                {/* <span className="absolute -bottom-2 left-0 z-0">
                  <UnderLIneText />
                </span> */}
              </span>
              <span className="lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 flex flex-col items-center text-primary text-lgxl font-HelveticaNeueRegular" >
              Visualized with the AthletiFi Dashboard
              </span>
            </h2>
            <p className='font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
              The AthletiFi Player Dashboard offers an intuitive and interactive
              way for parents to track the growth of their young soccer star and
              analyze their performance data. It's more than just a statistical
              overview; it's a comprehensive tool that helps players take
              control of their development journey, understand their strengths
              and areas for improvement, and set actionable goals. The dashboard
              also fosters a connection between the players and their community
              – making it easy for friends, family, and scouts to stay updated
              with the athlete's progress and highlights, thus creating a
              supportive environment for the player's ongoing development.
            </p>
          </div>
        </div>
      </div>
      <div className='flex lg:justify-center justify-center lg:mt-10 mt-7 lg:pb-5 lg:mb-0'>
        <Link href='https://www.athleti.fi/' target='_blank' rel='noopener noreferrer'>
          <BlueButton text='Learn more at www.athleti.fi' />
        </Link>
      </div>
    </section>
  );
};

export default PlayerDashboardDevelopment;

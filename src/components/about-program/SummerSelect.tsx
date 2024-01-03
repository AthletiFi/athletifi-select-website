// OurMission.tsx

// This component renders the "Our Mission" section on the "About Us" page.
// It provides information about the company's mission and objectives.

import React from 'react';
import Image from 'next/image';
import { UnderLIneText } from '../common/Icon';
import { CenterBlueShadow, BlueShodow } from '../common/Icon';

const OurMission = () => {
  const playerImageMission = 'stebi-nft-mission';
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
      <span className='absolute top-50 start-0 z-0'>
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
                Summer Select:June 11—July 22, 2024
                {/* <span className="absolute -bottom-2 left-0 z-0">
                  <UnderLIneText />
                </span> */}
              </span>
            </h2>
            <p className='font-Segoe font-normal text-md leading-7 text-start pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
              <span className='block pb-2'>
                Our flagship Summer Select 2024 program is designed for U9-U14
                players seeking to elevate their game. This intensive summer
                training program includes expert coaching, advanced skill
                development, and participation in prestigious tournaments. We
                provide a structured yet dynamic platform for athletes to excel
                in their soccer journey, with a balance of rigorous training and
                fun, engaging activities.
              </span>
              <span className='block pb-2'>
                <span className='font-bold'>Who: </span>Boys & Girls, Ages U9 - U14 (2010 - 2015 birth
                years).{' '}
              </span>
              <span className='block pb-2'>
                <span className='font-bold'> What: </span>
                Intensive Training - Two sessions per week for five weeks,
                totaling 10 skill-enhancing sessions.
              </span>
              <span className='block pb-2'>
                <span className='font-bold'> Dates: </span>
                Weeks of 6/10, 6/17, 6/24, 7/8, 7/15 (Note: Off for July 4th
                break).
              </span>
              <span className='block pb-2'>
                <span className='font-bold'>Cost: </span> $450
              </span>
              <span className='block pb-2'>
                <span className='font-bold'>Tournaments: </span>
                Hershey Summer Classic, EDP Summer Sizzler.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
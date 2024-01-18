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

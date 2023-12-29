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

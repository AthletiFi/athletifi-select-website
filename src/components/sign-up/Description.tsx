// WhoWeAre.tsx

// This component renders the "Who We Are" section on the "About Us" page.
// It provides background information about the company and its team.

import React from 'react';


const Description = () => {
  return (
    <section className='pt-2 pb-2 sm:mb-5 sm:pb-5 lg:mb-0 relative bg-hero-pattern bg-cover bg-center'>

      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
        <div className=' relative pb-5 pt-2 lg:pb-16  md:pb-10 sm:mt-6 z-0'>
          <div
            data-aos='fade-up'
            data-aos-duration='400'
            data-aos-easing='ease-in-sine'
            data-aos-delay='300'
            data-aos-offset='100'
          >
            <div className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
     
              <p>
                Designed by a team of local expert coaches for a more impactful
                experience. The program provides information about our coaching
                leadership, offers optimal team sizes for more personalized
                training, and our AthletiFi dashboard for player updates.
              </p>
              <h3 className='text-md font-bold mt-4'>Details:</h3>
              <ul className='list-disc list-inside block pb-2 pl-4'>
                <li>
                  Who: Boys & girls, ages U9 - U14 (2010 - 2015 birth years)
                </li>
                <li>Where: Conshohocken, PA</li>
                <li>
                  When: Weeks of 6/10, 6/17, 6/24, 7/8, & 7/15 (Note: off for
                  July 4 week)
                </li>
                <li>
                  Tournaments (planned): Hershey Summer Classic, Lititz Summer
                  Showcase, EDP Summer Sizzler
                </li>
                <li>Early bird pricing: $450.00</li>
              </ul>
              <p className='mt-4'>
                <strong>Early bird pricing ends on January 28</strong> (-10%
                discount, a $50 savings). Spots are limited, so sign up today
                below!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;

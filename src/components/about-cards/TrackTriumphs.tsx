import React from 'react';
import Image from 'next/image';
import { BlueShodow } from '../common/Icon';

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
          <h2 className='p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-8'>
            <span className='relative '>
              Digital Player Cards: Now on Pleyr
            </span>
          </h2>

          {/* Flex container for Text and Image */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Text Content */}
            <div className="md:w-1/2 md:pr-6 md:pl-10 p-3">
              <p className='font-Segoe font-normal text-md leading-7 text-center md:text-left pb-4 text-[#FDFEFF] opacity-80 m-0 relative z-20'>
                The digital player cards that made Summer Select special are now available to all youth athletes through Pleyr. Create your card, track your progress, and share your journey.
              </p>
              
              <h3 className='text-xl font-HelveticaNeueMedium text-skyblue mt-6 mb-2 text-center md:text-left relative z-20'>
                What Started at Summer Select
              </h3>
              <p className='font-Segoe font-normal text-md leading-7 text-center md:text-left pb-0.5 text-[#FDFEFF] opacity-80 m-0 relative z-20'>
                Every Summer Select player received a personalized digital card showcasing their stats, achievements, and highlights. These cards became collectible among teammates and a source of pride for players, turning every game into a moment to remember.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center items-center p-3">
              <Image
                src="/assets/img/webp/player-card-7.webp" 
                width={350}
                height={350}
                alt="Digital Player Card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackTriumphs;
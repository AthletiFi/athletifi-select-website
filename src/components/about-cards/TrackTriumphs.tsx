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

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
                Our program is meticulously designed for U9-U15 players seeking to elevate their game. With two training sessions per week and participation in prestigious tournaments, we provide the perfect blend of skill development and competitive experience. Our coaches follow the La Liga methodology, emphasizing technical skills, tactical awareness, and game intelligence.
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
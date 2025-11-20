import React from 'react';
import Image from 'next/image';
import { BlueShodow } from '../common/Icon';
import Link from 'next/link';
import BlueButton from '../common/BlueButton';

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
                The AthletiFi Select Experience
              </span>
              <span className="lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 flex flex-col items-center text-primary text-lgxl font-HelveticaNeueRegular">
                Celebrating Our Championship Seasons
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
              <span className='block pb-4'>
                Over the 2024 and 2025 seasons, we brought together over 100 families and elite coaches to create a unique development environment. Our program combines intensive training with the Spanish methodology—emphasizing technical skills, short passing, positional play, and game intelligence.
              </span>
              <span className='block pb-4'>
                <strong>A Proven Track Record:</strong> The results speak for themselves. Our teams secured victories at the prestigious Hershey Summer Classic and the EDP Summer Sizzler, demonstrating that our development model translates directly to on-field success.
              </span>
              <span className='block pb-4'>
                <strong>Technology Integration:</strong> Every player in our program is a pioneer. They are the first to use the <strong>AthletiFi Player Cards</strong> and the <strong>Pleyr</strong> video platform, allowing them to track their journey and own their highlights like pros.
              </span>
            </p>

            <div className="flex flex-col items-center justify-center mt-10 gap-4">
              <h3 className="text-xl font-HelveticaNeueMedium text-skyblue text-center">
                Interested in Future Seasons?
              </h3>
              <p className="text-white opacity-80 text-center max-w-[600px]">
                We are currently planning for the 2026 season and year-round clinic opportunities. 
                Join our waitlist to be notified as soon as registration opens.
              </p>
              <Link href='/sign-up'>
                <BlueButton text='Join the Waitlist' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerSelectDescription;
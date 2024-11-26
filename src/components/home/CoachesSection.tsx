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
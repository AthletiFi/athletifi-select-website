import React from 'react';
import Image from 'next/image';
import BlueButton from '../common/BlueButton';
import Link from 'next/link';
import { ArrowButton } from '../common/Icon';

const WhyAthletifiSelectSection = () => {
  return (
    <>
      <section className="my-5 relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full">
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto relative z-10 lg:mt-0 xl:mt-0'>
          <div className='lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 sm:bg-playground-unique bg-playground-unique-sm bg-opacity-50 bg-[length:100%_100%] bg-center bg-no-repeat flex flex-col items-center '>
            <h2
              className='lg:text-5xl md:text-[40px] sm:text-4xl text-[26px] text-primary font-HelveticaNeueMedium text-center py-2'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='200'
              data-aos-offset='200'
            >
              <span className='relative mb-4 lg:leading-[60px] leading-[120%]'>
                Why Choose AthletiFi Select?
              </span>
            </h2>
            <div
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='400'
              data-aos-offset='200'
            >
              <p className='font-Segoe text-md opacity-80 text-primary text-center md:pb-3 pb-6 mt-4'>
                Choose AthletiFi Select for an unparalleled soccer experience.
                Work with some of the region's best coaches, and seize the
                opportunity to be identified for our AthletiFi Team of the Year.
                This elite team travels to prestigious tournaments across the
                country and abroad, offering significant exposure and
                competitive experiences. Plus, when you sign up with us, you
                gain access to our innovative player dashboard at no additional
                cost.
              </p>
              <p className='font-Segoe font-normal text-md text-primary opacity-80 text-center lg:text-start mt-4'>
                <span className='font-bold'>The Summer Select '24</span> is our
                inaugural program for the AthletiFi Select series. It will be
                the first of many seasonal and specialized training
                opportunities that focus on individual growth, team dynamics,
                and strategic understanding of the game.
              </p>
              <div className='flex lg:justify-center justify-center items-center m-10'>
                <Link href='/about-program'>
                  <BlueButton text='Learn more about the program' />
                </Link>
              </div>
            </div>
            {/* FOOTBALL PLAYER IMAGE */}
            <div className='opacity-88 mb-5'>
              <Image
                data-aos='fade-in'
                data-aos-duration='600'
                data-aos-easing='linear'
                data-aos-delay='200'
                data-aos-offset='200'
                // className="mb-[1px] lg:max-w-[267px] max-w-[180px] sm:max-w-[220px]"
                className='mb-[1px] max-w-[290px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[652px] opacity-1'
                src='/assets/img/webp/coach-with-players.webp'
                width={500}
                height={500}
                alt={'football palyer'}
              />
            </div>
          </div>
        </div>
        {/* FOOTBALL IMAGE CORNOR*/}
        <Image
          className='absolute lg:w-[220px] sm:w-[150px] w-[100px] -bottom-8 right-0 z-0'
          src='/assets/img/png/unique-football.png'
          width={220}
          height={286}
          alt={'football'}
        />
      </section>
    </>
  );
};

export default WhyAthletifiSelectSection;

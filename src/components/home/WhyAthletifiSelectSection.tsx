import React from 'react';
import Image from 'next/image';
import BlueButton from '../common/BlueButton';
import Link from 'next/link';
import TournamentSection from '../sign-up/TournamentSection';

const WhyAthletifiSelectSection = () => {
  return (
    <>
      <section className="my-5 relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full">
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto relative z-10 lg:mt-0 xl:mt-0'>
          <div className='lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 sm:bg-playground-unique bg-playground-unique-sm bg-opacity-50 bg-[length:100%_100%] bg-center bg-no-repeat flex flex-col items-center'>
            <h2 className='lg:text-5xl md:text-[40px] sm:text-4xl text-[26px] text-primary font-HelveticaNeueMedium text-center py-2'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='200'
              data-aos-offset='200'>
              <span className='relative mb-4 lg:leading-[60px] leading-[120%]'>
                🌟 Summer Select '25🌟
              </span>
            </h2>

            <div data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='400'
              data-aos-offset='200'
              className='lg:max-w-[900px] mx-auto'>
              
              <p className='font-Segoe font-normal text-md text-primary opacity-80 text-center mt-4 mb-6'>
                Building on the incredible success of our 2024 program, AthletiFi Select returns for Summer 2025! Last year, our teams dominated local tournaments with four championship victories at the EDP Summer Sizzler. Join us this summer to be part of our winning tradition!
              </p>

              <h3 className='text-md font-bold mt-6 text-primary'>Program Features:</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li>⚽ Elite coaching from Eastern PA's finest</li>
                <li>🏋️‍♂️ 12 intensive training sessions</li>
                <li>🏆 Prestigious tournament participation</li>
                <li>📊 Performance tracking via AthletiFi Dashboard</li>
                <li>🎯 Individual skill development focus</li>
              </ul>

              <h3 className='text-md font-bold mt-6 text-primary'>Training Schedule</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li>📅 <strong>Dates:</strong> June 10 - July 27, 2025</li>
                {/* UNCOMMENT BELOW */}
                {/* <li>⏰ <strong>Times:</strong> Tuesdays & Thursdays, 6:00-7:30 PM</li> */}
                <li>⏰ <strong>Times:</strong> Tuesdays & Thursdays</li>
                <li>📍 <strong>Location:</strong> Arcadia University, Glenside, PA</li>
                <li>👥 <strong>Ages:</strong> U9-U15 players (2010-2017 birth years)</li>
              </ul>

              <h3 className='text-md font-bold mt-6 text-primary'>Tournament Schedule</h3>
              <div className='pl-4 mb-6 text-primary'>
                {/* UNCOMMENT BELOW */}
                {/* <TournamentSection /> */}
              </div>

              <h3 className='text-md font-bold mt-6 text-primary'>Price and Discounts:</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li>💰 Program Fee: $499</li>
                <li>⚡ Early Bird Discount: Save $50 (ends February 1st)</li>
                <li>👨‍👩‍👧‍👦 Family Discount: extra 10% off for siblings</li>
              </ul>

              <div className='flex justify-center items-center mt-10'>
                <Link href='/about-program'>
                  <BlueButton text='Learn More About Our Programs' />
                </Link>
              </div>
            </div>

            {/* PLAYER IMAGE */}
            <div className='opacity-88 mt-12 mb-5'>
              <Image
                data-aos='fade-in'
                data-aos-duration='600'
                data-aos-easing='linear'
                data-aos-delay='200'
                data-aos-offset='200'
                className='mb-[1px] max-w-[290px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[652px] opacity-1'
                src='/assets/img/webp/coach-with-players.webp'
                width={500}
                height={500}
                alt={'coach with players'}
              />
            </div>
          </div>
        </div>

        {/* FOOTBALL IMAGE CORNER */}
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
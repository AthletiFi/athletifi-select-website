import React from 'react';
import Image from 'next/image';
import BlueButton from '../common/BlueButton';
import Link from 'next/link';

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
                🌟 Program Highlights 🌟
              </span>
            </h2>
            <div
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='400'
              data-aos-offset='200'
            >
              <p className='font-Segoe font-normal text-md text-primary opacity-80 text-center lg:text-start mt-4'>
                AthletiFi Select offers year-round, club-neutral programs meticulously designed to nurture young talents and elevate their soccer skills in every season. Led by Eastern Pennsylvania's finest coaches, we focus on individual growth, teamwork, and strategic gameplay.
              </p>
              <h3 className='text-md font-bold mt-4 text-primary'>What We Offer:</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li>🏋️‍♂️ Intensive training sessions</li>
                <li>⚽ Competitive league play (Winter)</li>
                <li>🏆 Tournament participation (Summer)</li>
                <li>📈 Year-round development opportunities</li>
              </ul>
              <h3 className='text-md font-bold mt-4 text-primary'>Program Details:</h3>
              <ul className='list-disc list-inside block pb-2 pl-4 opacity-80 text-primary'>
                <li><strong>Who:</strong> 👥 Boys & girls, ages U9 - U16</li>
                <li><strong>When:</strong> 🗓️ Winter Select: November - January | Summer Select: June - July</li>
                <li><strong>Where:</strong> 📍 Training: Arcadia University, Glenside, PA | Winter Games: YSC Sports, Wayne, PA</li>
                <li><strong>Pricing:</strong> 💰 Varies by program (Winter Select: $400, Summer Select: $500)</li>
              </ul>
              <p className='text-md font-bold mt-4 text-primary'>
                👨‍👩‍👧‍👦 Family Discount: 20% off for siblings in the same program
              </p>
              <p className='font-Segoe font-normal text-md text-primary opacity-80 text-center lg:text-start mt-4'>
                Send us an email at 
                <Link href="mailto:welcome@athletifiselect.com?subject=Just signed up! I'd like the sibling discount please"> welcome@athletifiselect.com </Link>
                after signing up both siblings and let us know you'd like the discount.
              </p>
              <div className='flex lg:justify-center justify-center items-center m-10'>
                <Link href='/about-program'>
                  <BlueButton text='Learn More About Our Programs' />
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
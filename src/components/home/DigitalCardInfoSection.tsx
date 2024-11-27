import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import BlueButton from "../common/BlueButton";
import Link from "next/link";

const DigitalCardInfoSection = () => {
  // const playerImageCenter = 'jose-nft-img';
  // const playerImageRight = 'stebi-nft-img';
  // const playerImageLeft = 'anderson-nft-img-new';
  const playerImageCenter = 'player-image-center';
  const playerImageRight = 'player-image-right';
  const playerImageLeft = 'player-image-left';

  // SLIDER
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-5 mb-14 relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full">
      <div className='absolute sm:-bottom-[40px] lg:-bottom-[80px] bottom-0 start-0 lg:w-[230px] lg:h-[286px] opacity-30'>
        <Image
          className='xl:max-w-[240px] sm:max-w-[140px] max-w-[100px]'
          src='/assets/img/png/left-ball.png'
          width={240}
          height={286}
          alt='what we do foot ball'
        />
      </div>
      <Image
        className='absolute -bottom-[300px] start-0 -z-10'
        src='/assets/img/png/left-shadow.png'
        width={448}
        height={448}
        alt='shadow'
      />
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto relative z-10'>
        <div className="blue_linear_gradient relative after:absolute flex justify-center flex-col items-center  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          <div className='mb-4'>
            <h2
              className='lg:text-5xl md:text-[40px] sm:text-4xl text-[24px] text-primary font-medium font-HelveticaNeueMedium relative z-20 max-w-[670px] mx-auto text-center md:pt-[24px] pt-6 px-3 md:px-0 lg:pt-[56px] sm:leading-[45px] md:!leading-[60px]'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='200'
              data-aos-offset='200'
            >
              <span className='relative'>
                {/* Stats Reimagined. */}
                Track Progress with Digital Player Cards
              </span>{' '}
              {/* Exposure elevated. */}
            </h2>
            <p
              className='font-Segoe font-normal text-md text-center text-[#FDFEFF] leading-7 px-4 md:px-0 max-w-[700px] lg:max-w-[769px] mx-auto md:mt-4 mt-2 relative z-20'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-easing='linear'
              data-aos-delay='400'
              data-aos-offset='200'
            >
              AthletiFi Select offers a personalized Player Card to every participant, highlighting their unique soccer journey. These cards are the ultimate tool for tracking and highlighting skills and achievements. 
              <br/>
              Parents also benefit from dynamic progress reports, keeping them up-to-date on their child's development. The Player Dashboard offers an interactive platform to monitor progress, share highlights, and connect with family, friends, and recruiters.
            </p>
         
          </div>
          {/* CARD SLIDER SAMLL SCREEN */}
          <Slider
            {...settings}
            className=" px-5 w-full justify-between items-center pt-5 md:pt-0 max-w-[1000px] mx-auto lg:justify-center relative z-10 before:content-[''] before:absolute before:w-[448px] before:h-[448px] before:-top-20 before:left-1/2 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/2 before:-z-10 before:rounded-full pb-6 sm:pb-0"
          >
            {/* Left Image */}
            <div
              className='md:py-16 sm:pb-8'
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease'
              data-aos-delay='400'
            >
              <div style={{ transform: 'translateX(0px)' }}>
                <Image
                  className='mx-auto w-full max-w-[350px]'
                  src={`/assets/img/webp/${playerImageLeft}.webp`}
                  width={280}
                  height={280}
                  alt='left-nft-img'
                />
              </div>
            </div>
            {/* Center Image */}
            <div
              className=' md:py-16 sm:pb-8 relative z-10 '
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease'
              data-aos-delay='800'
            >
              <div>
                <Image
                  className='mx-auto w-full max-w-[350px]'
                  src={`/assets/img/webp/${playerImageCenter}.webp`}
                  width={280}
                  height={280}
                  alt='center-nft-image'
                />
              </div>
            </div>
            {/* Right Image */}
            <div
              className='md:py-16 sm:pb-8' // mr-[2000px]"
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease'
              data-aos-delay='1200'
            >
              <div style={{ transform: 'translateX(0px)' }}>
                <Image
                  className='mx-auto w-full max-w-[350px]'
                  src={`/assets/img/webp/${playerImageRight}.webp`}
                  width={280}
                  height={280}
                  alt='right-nft-image'
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex lg:justify-center justify-center items-center mt-5 z-50">
                <Link href="/about-cards">
                  <BlueButton text="Learn more about the Digital Player Cards" />
                </Link>
              </div>
      </div>
    </section>
  );
};

export default DigitalCardInfoSection;

// HomeTitleSection.tsx

// This component renders the hero section on the homepage, which is the top section below the menu with a big image and a call to action.

import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlueButton from "../common/BlueButton";
import { PleyrLogo } from "../common/Icon";

const HomeTitleSection = () => {
  return (
    <>
      <div className="container home-title-section md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="max-w-[490px] lg:max-w-[520px] xl:max-w-[608px]">
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
            🏆
            </h1>
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
              Eastern PA's Elite Soccer Experience 
            </h1>
            <p className="font-Segoe text-white text-[16px] sm:text-md font-normal mt-4 opacity-80 text-center lg:text-start">
              Thank you to the 100+ families who made Summer Select 2024 and 2025 unforgettable. 
              As we explore what's next, we invite you to experience Pleyr—our new platform 
              that captures every moment of your soccer journey.
            </p>
            
            <div className="flex lg:justify-start justify-center lg:mt-8 mt-7 gap-4 mb-10">
              <Link href="/sign-up">
                <BlueButton text="Join Waitlist for 2026" />
              </Link>
            </div>

            {/* Pleyr Promotion Box - Moved from Sign Up Page */}
            <div className='bg-darkgray p-6 rounded-[20px] border border-[#ffffff10] shadow-lg lg:mr-10 relative z-20'>
              <div className="flex justify-center lg:justify-start mb-4">
                <PleyrLogo className="w-32 h-auto" mode="responsive" />
              </div>
              <h3 className='text-xl font-HelveticaNeueMedium text-skyblue mb-2 text-center lg:text-left'>
                What's Next? 🚀
              </h3>
              <p className='font-Segoe text-base text-primary opacity-90 mb-4 leading-6 text-center lg:text-left'>
                As we explore what's next, we invite you to experience Pleyr: our new social platform built for youth athletes 
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link href="https://pleyr.com" target="_blank" rel="noopener noreferrer">
                  <button className='bg-skyblue text-white px-6 py-2 rounded font-semibold 
                                   hover:bg-black hover:border hover:border-skyblue border border-transparent
                                   transition duration-300 flex items-center gap-2 text-sm'>
                    Explore Pleyr Platform
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LAPTOP AND MOBILE SCREEN IMG */}
      <div className="pt-6 sm:pt-10 lg:pt-0">
        <div className="sm:absolute right-0 top-[65%] md:-translate-y-1/2 max-w-[400px] sm:max-w-[500px] xl:max-w-[600px] sm:hidden lg:inline-block ms-auto">
          <Image
            className="w-full"
            src="/assets/img/webp/hero_female_player.webp"
            alt="female-player"
            width={600}
            height={600}
          />
        </div>
      </div>

      {/* IPAD SCREEN IMG */}
      <div className="hidden sm:block lg:hidden w-full">
        <Image
          className="mx-auto"
          src="/assets/img/webp/hero_female_player_2.webp"
          alt="female-player"
          width={350}
          height={350}
        />
      </div>
    </>
  );
};

export default HomeTitleSection;
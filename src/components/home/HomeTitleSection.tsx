// HomeTitleSection.tsx

// This component renders the hero section on the homepage, which is the top section below the menu with a big image and a call to action.

import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlueButton from "../common/BlueButton";

const HomeTitleSection = () => {
  return (
    <>
      <div className="container home-title-section md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="max-w-[490px] lg:max-w-[520px] xl:max-w-[608px]">
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
            🥅
            </h1>
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
            ⚽️
            </h1>
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
            🏆
            </h1>
            <h1 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-[30px] sm:text-[45px] lg:text-[50px] xl:text-xxl font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
              Eastern PA's Elite Soccer Experience 
            </h1>
            <p className="font-Segoe text-white text-[16px] sm:text-md font-normal mt-4 opacity-80 text-center lg:text-start">
              Premier Summer Development Program for U9-U15 Players
            </p>
            <br></br>
            <h3 className="font-HelveticaNeueMedium text-white text-center lg:text-start text-md font-medium leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[66px]">
              🌞 Registration now open 🌞 
            </h3>
            <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-lg font-large">
              Summer Select 2025
            </h4>
            <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-md font-medium leading-[15px] sm:leading-[25px] md:leading-[30px] lg:leading-[40px]">
              🗓️ June 10 - July 27, 2025
            </h4>
            <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-md font-medium leading-[15px] sm:leading-[25px] md:leading-[30px] lg:leading-[40px] mt-4">
            {/* <h4 className="font-HelveticaNeueMedium text-white text-center opacity-85 lg:text-start text-md font-medium leading-[15px] sm:leading-[25px] md:leading-[30px] lg:leading-[40px]"> */}
              ⚡️ Early Bird Discount Available!
            </h4>
            <div className="flex lg:justify-start justify-center lg:mt-10 mt-7 lg:pb-14 lg:mb-10">
              <Link href="/sign-up">
                <BlueButton text="Sign up for Summer Select!" />
              </Link>
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
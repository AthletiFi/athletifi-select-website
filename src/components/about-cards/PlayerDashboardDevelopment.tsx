import React from "react";
import { BlueShodow, UnderLIneText } from "../common/Icon";
import Image from "next/image";
import Link from "next/link";
import BlueButton from "../common/BlueButton";

const PlayerDashboardDevelopment = () => {
  return (
    <section className="pt-5 pb-5 sm:mb-14 sm:pb-12 lg:mb-0 relative">
      <div className="absolute top-0 xl:-top-[70px] -end-[80px]  xl:w-[250px] xl:h-[380px] z-0">
        <Image
          className="max-w-[300px] me-0"
          src="/assets/img/png/football.png"
          width={300}
          height={286}
          alt="what we do foot ball image"
        />
      </div>
      <Image
        className="absolute -top-[250px] end-0 z-0"
        src="/assets/img/png/what-we-do-shadow.png"
        width={448}
        height={448}
        alt="shadow"
      />
      <span className="absolute top-50 start-0 -z-10">
        <BlueShodow />
      </span>
      <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative">
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          {/* Title */}
          <h2 className=" p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4">
            <span className="relative ">Soccer Development</span>
            <span className="lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 flex flex-col items-center text-primary text-lgxl font-HelveticaNeueRegular">
              Visualized with the AthletiFi Dashboard
            </span>
          </h2>

          {/* Image */}
          <div className="flex justify-center items-center py-6">
            <Image
              src="/assets/img/webp/platform-screenshot.webp"
              width={800}
              height={800}
              alt="Dashboard"
            />
          </div>

          {/* Text Content */}
          <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
            We understand that, as a parent, you want the best for your young
            soccer stars. That's why we're thrilled to introduce you to the
            AthletiFi Player Dashboard - the perfect tool to follow your young
            soccer star. 
          </p>
          <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
          The AthletiFi Dashboard, accessible through these digital player cards, brings to life the intricate details of a player's on-field performance, allowing friends, family, and scouts to stay updated with the athlete's progress. Experience a visual feast of data, from skill ratings and game-by-game analyses to video highlights and developmental trends. 
          </p>
        </div>
      </div>
      <div className="flex lg:justify-center justify-center lg:mt-10 mt-7 lg:pb-5 lg:mb-0">
        <Link
          href="https://www.athleti.fi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlueButton text="Learn more at www.athleti.fi" />
        </Link>
      </div>
    </section>
  );
};

export default PlayerDashboardDevelopment;

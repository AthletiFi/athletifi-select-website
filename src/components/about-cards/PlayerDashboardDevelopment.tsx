import React from "react";
import { BlueShodow, PleyrLogo } from "../common/Icon";
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
          
          {/* Pleyr Logo Branding */}
          <div className="flex justify-center pt-4 md:pt-0 relative z-20">
            <PleyrLogo mode="responsive" className="w-48 sm:w-72 opacity-100" />
          </div>

          {/* Title */}
          <h2 className="p-[15px] pt-2 font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4">
            <span className="relative ">Now Available to Everyone</span>
            <span className="lg:px-14 lg:pt-6 sm:px-8 px-4 pt-4 flex flex-col items-center text-primary text-lgxl font-HelveticaNeueRegular">
              Build Your Digital Soccer Portfolio
            </span>
          </h2>

          {/* Image */}
          <div className="flex justify-center items-center py-6">
            <Image
              src="/assets/img/webp/platform-screenshot.webp"
              width={800}
              height={800}
              alt="Pleyr Platform"
            />
          </div>

          {/* Text Content */}
          <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
            Pleyr brings the Summer Select experience to all youth athletes. Create custom cards, unlock new designs through achievements, and build your digital soccer portfolio to share with friends, family, and recruiters.
          </p>
          
          <div className="flex lg:justify-center justify-center lg:mt-10 mt-7 lg:pb-5 lg:mb-0 relative z-20">
            <Link
              href="https://pleyr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlueButton text="Create Your Player Card on Pleyr" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerDashboardDevelopment;

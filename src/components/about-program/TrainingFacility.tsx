import React from "react";
import { BlueShodow } from "../common/Icon";
import Image from "next/image";

const TrainingFacility = () => {
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
          <h2 className="p-[15px] pt-2 font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[30px] relative z-20 text-center md:mb-4">
            <span className="relative ">Our Training Facility</span>
          </h2>

          {/* Text Content */}
          <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
            AthletiFi Select has recently moved into its own dedicated training space, designed to give players a professional environment for year-round development. The facility supports structured practice, video review, and individual skill work so players can keep growing beyond the traditional season.
          </p>
          
          
        </div>
      </div>
    </section>
  );
};

export default TrainingFacility;

import React from "react";
import Image from "next/image";
import { BlueShodow, UnderLIneText } from "../common/Icon";

const WhatWeDo = () => {
  return (
    <>
      <section className="relative py-6 lg:pt-10 sm:pt-20 pt-14">
        <Image
          className="absolute top-[30%] -translate-y-24 end-0"
          src="/assets/img/png/what-we-do-shadow.png"
          width={500}
          height={500}
          alt="what we do shadow"
        />
        <span className="absolute top-50 -start-10">
          <BlueShodow />
        </span>
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-delay="200"
                data-aos-offset="200"
                className="flex flex-col justify-center h-full lg:pe-6 xl:p-0 text-center lg:text-start lg:mt-20"
              >
                <h2 className="font-HelveticaNeueMedium font-medium text-[24px]  md:text-5xl sm:text-4xl leading-[60px] text-[#FDFEFF] md:mb-4">
                  <span className="relative">
                    What we do
                    <span className="absolute -bottom-2 left-0">
                      <UnderLIneText />
                    </span>
                  </span>
                </h2>
                <p className="font-Segoe font-normal text-md md:max-w-[530px] text-[#FDFEFF] mx-auto lg:ms-0 opacity-80 leading-7">
                  We are a sports technology app that makes travel soccer teams
                  more accessible for all players. Our mission is to level the
                  playing field for enrollment in travel teams and club soccer
                  -- to give every athlete equal access to exposure from scouts.
                  A portion of every sale goes directly to teams.
                </p>
              </div>
            </div>
            <div className="lg:w-5/12 w-9/12 sm:w-3/5 mx-auto lg:me-0 mt-8">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-delay="400"
                data-aos-offset="100"
                className="flex justify-center lg:justify-start"
              >
                <Image
                  src="/assets/img/png/what-we-do-img.png"
                  width={496}
                  height={603}
                  alt="what we do sec img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;

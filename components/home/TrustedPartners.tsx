import React from "react";
import {
  DisealIcon,
  EuropcarIcon,
  HsbcIcon,
  KayakIcon,
  KelloggsIcon,
  MerckIcon,
  SpotifyIcon,
  StripeIcon,
} from "../common/Icon";

const TrustedPartners = () => {
  return (
    <>
      <section>
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-5">
          <h2
            className="text-center font-HelveticaNeueMedium font-medium lg:text-5xl md:text-[40px] sm:text-4xl text-[26px] text-primary sm:py-10 pb-5 leading-[120%]"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <span className="relative after:content after:absolute after:bottom-[-10px] sm:after:bottom-[-4px] after:left-0 md:after:w-[209px] after:w-[150px] after:h-2 after:bg-blue-underline after:bg-contain after:bg-no-repeat">
              Our trusted
            </span>{" "}
            partners
          </h2>
          <div
            className="flex md:justify-between flex-col md:flex-row lg:pt-5 xl:pt-10 sm:gap-4 gap-3 md:items-start items-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            <h3 className=" max-w-[396px] text-primary sm:text-2xl text-md font-HelveticaNeueMedium md:text-start text-center">
              Stats for the next generation of soccer superstars
            </h3>
            <h4 className="font-Segoe text-primary opacity-80 max-w-lg md:text-start text-center">
              We have partnered with some of the top soccer clubs in the
              Mid-Atlantic region to bring sports technology to new heights.
            </h4>
          </div>
         <div  data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-offset="200"> <div className="flex lg:justify-between justify-center md:py-12 pt-5 sm:pb-10 flex-wrap md:gap-x-24 lg:gap-[38px] xl:gap-x-14  gap-x-5 gap-y-3">
            <span  className="lg:max-w-[214px] max-w-[130px] grayscale">
              <MerckIcon />
            </span>
            <span  className="lg:max-w-[183px] max-w-[120px] grayscale">
              <KelloggsIcon />
            </span>
            <span  className="lg:max-w-[311px] max-w-[170px] grayscale">
              <KayakIcon />
            </span>
            <span  className="lg:max-w-[159px] max-w-[115px] grayscale">
              <DisealIcon />
            </span>
            <span  className="lg:max-w-[238px] max-w-[150px] grayscale">
              <HsbcIcon />
            </span>
            <span  className="lg:max-w-[135px] max-w-[100px] grayscale">
              <StripeIcon />
            </span>
            <span  className="lg:max-w-[211px] max-w-[140px] grayscale">
              <SpotifyIcon />
            </span>
            <span  className="lg:max-w-[185px] max-w-[130px] grayscale">
              <EuropcarIcon />
            </span>
          </div> </div>
        </div>
      </section>
    </>
  );
};

export default TrustedPartners;

import Image from "next/image";
import React from "react";
import BlueButton from "../common/BlueButton";
import Link from "next/link";

const CoachesSection = () => {
  return (
    <>
      <div className="relative flex items-center md:mt-10 lg:bg-soccer-expensive-bg bg-no-repeat bg-cover justify-center flex-col lg:flex-row lg:mb-0 md:mb-5 xl:py-20 xl:pb-44">
        <Image
          className="absolute -top-20 -left-0 w-[40%] lg:block hidden z-0  h-[120%]"
          src="/assets/img/png/football_net.png"
          width={996}
          height={768}
          alt="football net"
        />
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
          <div className="max-w-[623px] mx-auto lg:mx-0 relative after:content after:absolute lg:after:w-[690px] lg:after:h-[420px] lg:after:bg-[#040F16] after:blur-[55px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-0">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-delay="200"
              data-aos-offset="200"
              className=" relative z-10"
            >
              <h2 className="font-HelveticaNeueMedium text-primary xl:text-xl lg:text-[43px] md:text-[40px] font-medium mb-4 text-[25px] sm:text-[35px] text-center lg:text-start leading-[120%] xl:leading-[60px] pt-10">
                <span className="relative after:content after:absolute after:bottom-[-4px] sm:after:bottom-[-2px] after:left-0 md:after:w-[220px] after:w-[120px] after:h-2 after:bg-blue-underline after:bg-contain after:bg-no-repeat">
                 Creating Excellence
                </span>
              </h2>
              <p className="font-Segoe font-normal text-md text-primary opacity-80 text-center lg:text-start">Introducing our expert coaching team, led by seasoned professionals Darren John, Brian Blasy, and Ashley "AJ" Johnson. Our coaches have years of experience at various competitive levels, and they bring a wealth of knowledge and a dedicated approach to developing youth soccer skills.              </p>
              <div className="flex lg:justify-start justify-center items-center mt-10">
                <Link href="/about-coaches">
                  <BlueButton text="Learn more about the coaches" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          data-aos-delay="200"
          data-aos-offset="200"
        >

          <div className="absolute lg:right-10 xl:right-20 2xl:right-32 lg:top-[40%] lg:-translate-y-[50%] xl:w-[600px] xl:h-[600px] w-[300px] sm:w-[450px] lg:w-[500px] hidden lg:inline-block -z-10">
            <Image
              className="w-full"
              src="/assets/img/webp/coaches-on-blue.webp"
              alt="football"
              width={700}
              height={700}
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          data-aos-delay="200"
          data-aos-offset="200"
        >
          {/* SMALL FOOTBALL CORNOR */}
          <div className="lg:hidden relative w-full sm:w-[80%] mx-auto mt-5">
            <Image
              className="mx-auto"
              src="/assets/img/webp/coaches-on-blue.webp"
              alt="football"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachesSection;

import Image from "next/image";
import React from "react";
import BlueButton from "../common/BlueButton";
import Link from "next/link";

const CoachesSection = () => {
  return (
    <>
      <section className="relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full py-14">
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto lg:pt-14 relative z-10 lg:mt-14 xl:mt-0">
          <div className="lg:px-14 lg:pt-14 sm:px-8 px-4 pt-6 sm:bg-playground-unique bg-playground-unique-sm bg-opacity-50 bg-[length:100%_100%] bg-center bg-no-repeat flex flex-col items-center ">
            <h2
              className="lg:text-5xl md:text-[40px] sm:text-4xl text-[26px] text-primary font-HelveticaNeueMedium text-center py-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              <span className="relative after:content after:absolute after:bottom-[-7px] sm:after:bottom-[-2px] after:left-0 md:after:w-[209px] after:w-[150px] after:h-2 after:bg-blue-underline after:bg-contain after:bg-no-repeat mb-4 lg:leading-[60px] leading-[120%]">
              Creating Excellence
              </span> 
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              <p className="font-Segoe text-md opacity-80 text-primary text-center md:pb-3 pb-6 mt-4">
              Meet our expert coaching team, led by seasoned professionals including Darren John, Brian Blasy, Guillermo Escalera Alonso and Ashley "AJ" Johnson. With decades of experience at various competitive levels, our coaches bring a wealth of knowledge and a dedicated approach to youth soccer development.
              </p>
              <div className="flex lg:justify-center justify-center items-center">
                <Link href="/about-us">
                  <BlueButton text="Learn more about the coaches" />
                </Link>
              </div>
            </div>
            {/* FOOTBALL PLAYER IMAGE */}
            <div className="opacity-88 mt-5">
              <Image
                data-aos="fade-in"
                data-aos-duration="600"
                data-aos-easing="linear"
                data-aos-delay="200"
                data-aos-offset="200"
                // className="mb-[1px] lg:max-w-[267px] max-w-[180px] sm:max-w-[220px]"
                className="mb-[1px] max-w-[290px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[652px] opacity-1"
                // src="/assets/img/png/portrait-young.png"
                src="/assets/img/webp/gen-soccer-player.webp"
                width={652}
                height={512}
                alt={"football palyer"}
              />
            </div>
          </div>
        </div>
        {/* FOOTBALL IMAGE CORNOR*/}
        <Image
          className="absolute lg:w-[220px] sm:w-[150px] w-[100px] -bottom-8 right-0 z-0"
          src="/assets/img/png/unique-football.png"
          width={220}
          height={286}
          alt={"football"}
        />
      </section>
    </>
  );
};

export default CoachesSection;

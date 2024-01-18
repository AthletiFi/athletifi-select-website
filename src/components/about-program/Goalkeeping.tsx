import React from "react";
import { BlueShodow, UnderLIneText } from "../common/Icon";
import Image from "next/image";

const GoalkeepingSection = () => {
  return (
    <section className="pt-10 pb-5 sm:mb-14 sm:pb-12 lg:mb-0 relative">
      <div className="absolute top-0 xl:-top-[70px] -end-[80px]  xl:w-[250px] xl:h-[380px] z-0">
        <Image
          className="max-w-[300px] me-0"
          src="/assets/img/png/football_net.png"
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
      <span className="absolute top-50 start-0 z-0">
        <BlueShodow />
      </span>
      <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative">
        <div className="blue_linear_gradient bg-blue_linear_gradient after:absolute relative lg:py-16 py-5 md:py-10 sm:mt-6 z-0  after:contents-[''] after:inset-0 after:p-[1px] after:rounded-[30px] rounded-[30px]">
          
          {/* Title */}
          <h2 className="p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[60px] relative z-20 text-center md:mb-4">
            <span className="relative ">
              Specialized Goalkeeping Training
              <span className="absolute -bottom-2 left-0 z-0">
                <UnderLIneText />
              </span>
            </span>
          </h2>

          {/* Flex container for Text and Image */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Text Content */}
            <div className="md:w-1/2 md:pr-6 md:pl-10 p-3">
              <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
                AthletiFi Select's specialized goalkeeping training is a unique opportunity for aspiring goalkeepers. It's designed to develop not only the physical and technical aspects of goalkeeping, but also to foster a deeper, strategic understanding of this pivotal role on the soccer field.
              </p>
              <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
                Leading this segment is AJ, a coach with over ten years of dedicated experience in goalkeeper training and the current head goalkeeper coach at Penn State Abington College. His credentials are extensive, including a National D coaching license and Goalkeeper 1 & 2 Certification, enriched by La Liga Methodology.
              </p>
              <p className="font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20">
                AJ's training sessions are a blend of rigorous practice and strategic learning, with a strong emphasis on improving decision-making skills under pressure, which is crucial in the high-stakes environment of goalkeeping. The goal is to develop agile, mentally sharp goalkeepers who can confidently handle the challenges of the game.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center items-center p-3">
              <Image
                src="/assets/img/webp/diving-goalkeeper.webp" 
                width={550}
                height={550}
                alt="Goalkeeping"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalkeepingSection;




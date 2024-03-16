import React from 'react';
import { BlueShodow, UnderLIneText } from '../common/Icon';
import Image from 'next/image';
import BlueButton from '../common/BlueButton';
import Link from 'next/link';

const CoachesSection = () => {
  return (
    <>
     <section className="my-5 relative lg:before:content-[''] before:absolute lg:before:w-[448px] before:h-[448px] before:-top-20 before:left-0 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-translate-x-1/3 before:-z-10 before:rounded-full after:content-[''] after:absolute after:w-[448px] after:h-[448px] after:-bottom-20 after:right-0 after:bg-shadow_blue after:blur-[111px] after:opacity-25 after:translate-x-1/3 after:-z-10 after:rounded-full">
      <div className='absolute top-0 xl:-top-[70px] -end-[80px]  xl:w-[250px] xl:h-[380px] z-0'>
        {/* RIGHT FOOTBALL IMG */}
        <Image
          className='max-w-[300px] me-0'
          src='/assets/img/png/football_net.png'
          width={300}
          height={286}
          alt='what we do foot ball image'
        />
      </div>
      {/* SHADOW IMG */}
      <Image
        className='absolute -top-[250px] end-0 z-0'
        src='/assets/img/png/what-we-do-shadow.png'
        width={448}
        height={448}
        alt='shadow'
      />
      <span className='absolute top-50 start-0 z-0'>
        <BlueShodow />
      </span>
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
        <div className=" lg:py-16 py-5 md:py-10 sm:mt-6 z-0">
          <div className='flex flex-col items-center justify-center relative'
            data-aos='fade-up'
            data-aos-duration='400'
            data-aos-easing='ease-in-sine'
            data-aos-delay='300'
            data-aos-offset='100'
          >
            <h2 className='p-[15px] font-HelveticaNeueMedium md:text-5xl text-[26px] sm:text-4xl text-[#FDFEFF] font-medium leading-[60px] relative z-20 text-center md:mb-4'>
              <span className='relative '>
                Creating Excellence
                <span className='absolute -bottom-2 left-0 z-0'>
                  <UnderLIneText />
                </span>
              </span>
            </h2>
            <p className='font-Segoe font-normal text-md leading-7 text-center pb-0.5 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20'>
              Introducing our expert coaching team, led by seasoned
              professionals Darren John, Brian Blasy, and Ashley "AJ" Johnson.
              Our coaches have years of experience at various competitive
              levels, and they bring a wealth of knowledge and a dedicated
              approach to developing youth soccer skills.{' '}
            </p>
            <div className='opacity-88 mb-5'>
              <Image
                data-aos='fade-in'
                data-aos-duration='600'
                data-aos-easing='linear'
                data-aos-delay='200'
                data-aos-offset='200'
                // className="mb-[1px] lg:max-w-[267px] max-w-[180px] sm:max-w-[220px]"
                className='m-10 max-w-[290px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[652px] opacity-1'
                src='/assets/img/webp/coaches-on-blue.webp'
                width={500}
                height={500}
                alt={'AthletiFi Select Coaches'}
              />
            </div>
            <div className='flex justify-center items-center mt-0'>
              <Link href='/about-coaches'>
                <BlueButton text='Learn more about the coaches' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
};

export default CoachesSection;


// import Image from 'next/image';
// import React from 'react';
// import BlueButton from '../common/BlueButton';
// import Link from 'next/link';

// const CoachesSection = () => {
//   return (
//     <>
//       <div className='relative flex items-center lg:bg-soccer-expensive-bg bg-no-repeat bg-cover justify-center flex-col xl:flex-row my-28 py-28'>
//         <Image
//           className='absolute -top-20 -left-0 w-[40%] lg:block hidden z-0  h-[120%]'
//           src='/assets/img/png/football_net.png'
//           width={996}
//           height={768}
//           alt='football net'
//         />
//         <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto'>
//           <div className='max-w-[623px] mx-auto lg:mx-0 relative after:content after:absolute lg:after:w-[690px] lg:after:h-[420px] lg:after:bg-[#040F16] after:blur-[55px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-0'>
//             <div
//               data-aos='fade-up'
//               data-aos-duration='600'
//               data-aos-easing='linear'
//               data-aos-delay='200'
//               data-aos-offset='200'
//               className='relative z-10'
//             >
//               <h2 className='font-HelveticaNeueMedium text-primary xl:text-xl lg:text-[43px] md:text-[40px] font-medium mb-4 text-[25px] sm:text-[35px] text-center lg:text-start leading-[120%] xl:leading-[60px] pt-10'>
//                 <span className='relative after:content after:absolute after:bottom-[-4px] sm:after:bottom-[-2px] after:left-0 md:after:w-[220px] after:w-[120px] after:h-2 after:bg-blue-underline after:bg-contain after:bg-no-repeat'>
//                   Creating Excellence
//                 </span>
//               </h2>
//               <p className='font-Segoe font-normal text-md text-primary opacity-80 text-center lg:text-start'>
//                 Introducing our expert coaching team, led by seasoned
//                 professionals Darren John, Brian Blasy, and Ashley "AJ" Johnson.
//                 Our coaches have years of experience at various competitive
//                 levels, and they bring a wealth of knowledge and a dedicated
//                 approach to developing youth soccer skills.{' '}
//               </p>
//               <div className='flex lg:justify-start justify-center items-center mt-10'>
//                 <Link href='/about-coaches'>
//                   <BlueButton text='Learn more about the coaches' />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           data-aos='fade-up'
//           data-aos-duration='600'
//           data-aos-easing='linear'
//           data-aos-delay='200'
//           data-aos-offset='200'
//         >
//           <div className='absolute lg:right-10 xl:right-10 2xl:right-16 lg:top-[40%] lg:-translate-y-[50%] md:w-[500px] md:h-[600px] lg:w-[500px] lg:h-[600px] xl:w-[500px] xl:h-[600px] hidden lg:inline-block -z-10'>
//             <Image
//               className='w-full'
//               src='/assets/img/webp/coaches-on-blue.webp'
//               alt='football'
//               width={700}
//               height={700}
//             />
//           </div>
//         </div>
//         <div
//           data-aos='fade-up'
//           data-aos-duration='600'
//           data-aos-easing='linear'
//           data-aos-delay='200'
//           data-aos-offset='200'
//         >
//           {/* SMALL FOOTBALL CORNOR */}
//           <div className='lg:hidden relative w-full sm:w-[80%] mx-auto mt-5'>
//             <Image
//               className='mx-auto'
//               src='/assets/img/webp/coaches-on-blue.webp'
//               alt='football'
//               width={550}
//               height={550}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CoachesSection;

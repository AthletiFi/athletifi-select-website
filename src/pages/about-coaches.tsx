// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import Coach1 from '@/components/about-coaches/Coach1';
import Coach2 from '@/components/about-coaches/Coach2';
import Coach3 from '@/components/about-coaches/Coach3';
import Coach4 from '@/components/about-coaches/Coach4';
import Philosophy from '@/components/about-coaches/Philosophy';
import Backtotop from '@/components/common/Backtotop';
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';

const AboutCoaches = () => {
  // SEO
  const hero = {
    heading: 'About The Coaches',
    title: 'Elite Coaching Staff',
    subtitle: 'Developing the Next Generation',
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutCoaches} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>

        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 pt-14 relative z-10">
          <h2 className='font-HelveticaNeueMedium md:text-5xl sm:text-4xl text-[26px] text-[#FDFEFF] font-medium leading-[60px] md:mb-4'>
            Elite Coaching Excellence
          </h2>
          <p className='font-Segoe font-normal text-md leading-7 text-[#FDFEFF] opacity-80 m-0 sm:pt-4 max-w-[900px]'>
            Our coaching staff led AthletiFi Select to unprecedented success over 
            two championship seasons. Their expertise in player development and 
            the La Liga methodology created an environment where athletes thrived.
          </p>
          
          <div className='bg-darkgray p-8 rounded-[20px] mt-8 border border-[#ffffff10] max-w-[900px]'>
            <p className='text-skyblue font-HelveticaNeueMedium text-lg'>
              Our coaches continue to support youth athlete development through 
              the Pleyr platform and private training opportunities.
            </p>
            <p className='mt-4 text-[#FDFEFF] opacity-80 font-Segoe'>
              For training inquiries, contact: <a href="mailto:welcome@athletifiselect.com" className="hover:text-skyblue transition-colors">welcome@athletifiselect.com</a>
            </p>
          </div>
        </div>

        <Coach1 />
        <Coach2 />
        <Coach3 />
        <Coach4 />
        <Philosophy />
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default AboutCoaches;

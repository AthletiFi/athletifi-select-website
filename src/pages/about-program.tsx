// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import OurMission from '@/components/about-program/OurMission';
import BeyondSummer from '@/components/about-program/BeyondSummer';
import SummerSelect from '@/components/about-program/SummerSelect';
import Backtotop from '@/components/common/Backtotop';
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';

const AboutProgram = () => {
  // SEO
  const hero = {
    heading: 'Program',
    title: 'Your Title Here',
    subtitle: 'Your Subtitle Here',
  };

  return (
    <div className="max-w-[1500px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutCoaches} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>
        <OurMission />
        <SummerSelect />
        <BeyondSummer />
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default AboutProgram;

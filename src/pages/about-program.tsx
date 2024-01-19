// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import BeyondSummer from '@/components/about-program/BeyondSummer';
import SummerSelectDescription from '@/components/about-program/SummerSelect';
import GoalkeepingSection from '@/components/about-program/Goalkeeping';
import Backtotop from '@/components/common/Backtotop';
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';

const AboutProgram = () => {
  // SEO
  const hero = {
    heading: 'About The Program',
    title: 'Your Title Here',
    subtitle: 'Your Subtitle Here',
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutProgram} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>
        <SummerSelectDescription />
        <GoalkeepingSection />
        <BeyondSummer />
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default AboutProgram;

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
    title: 'Your Title Here',
    subtitle: 'Your Subtitle Here',
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutCoaches} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
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

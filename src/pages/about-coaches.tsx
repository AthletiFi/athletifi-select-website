// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import Coach2 from '@/components/about-coaches/Coach2';
import Coach3 from '@/components/about-coaches/Coach3';
import Coach1 from '@/components/about-coaches/Coach1';
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
    heading: 'Coaches',
    title: 'Your Title Here',
    subtitle: 'Your Subtitle Here',
  };

  return (
    <>
      <Seo pageSEO={SEO_CONFIG.aboutCoaches} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>
        <Coach1 />
        <Coach3 />
        <Coach2 />
        <Philosophy />
        <Footer />
        <Backtotop />
      </div>
    </>
  );
};

export default AboutCoaches;

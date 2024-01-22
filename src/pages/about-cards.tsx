// about-us.tsx

// This file renders the "About Us" page.
// It includes various components to display information about the company.

import TrackTriumphs from '@/components/about-cards/TrackTriumphs';
import SoccerDevelopment from '@/components/about-cards/SoccerDevelopment';
import PlayerDashboardDevelopment from '@/components/about-cards/PlayerDashboardDevelopment';
import Backtotop from '@/components/common/Backtotop';
import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';

const AboutCards = () => {
  // SEO
  const hero = {
    heading: 'Player Cards',
    title: 'AthletiFi Player Cards',
    subtitle: 'The fun and engaging way to follow youth soccer',
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      <Seo pageSEO={SEO_CONFIG.aboutCards} />
      <div className='overflow_hidden'>
        <div className=' bg-about-hero bg-no-repeat bg-cover'>
          <Header />
          <CommonHero hero={hero} />
        </div>
        <TrackTriumphs />
       {/* <SoccerDevelopment/> */}
        <PlayerDashboardDevelopment/>
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default AboutCards;

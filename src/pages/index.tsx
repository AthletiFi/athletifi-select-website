// index.tsx
// This is the main landing page of the website.
// It includes various components to showcase the features and services offered.
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import DigitalCardInfoSection from '@/components/home/DigitalCardInfoSection';
import WhyAthletifiSelectSection from '@/components/home/WhyAthletifiSelectSection';
import CoachesSection from '@/components/home/CoachesSection';
import HomeTitleSection from '@/components/home/HomeTitleSection';
import Backtotop from '@/components/common/Backtotop';
import { useState, useEffect } from 'react';
import { PageLogo } from '@/components/common/Icon';
import Seo from '@/components/common/Seo';
import { GetRequestHandler } from '@/components/common/api/Api';
import { NewsListApiHandler } from '@/components/common/api/ApiUrls';
import { SEO_CONFIG } from '@/utils/seoConfig';

interface NewsProps {
  allNewsList: any;
}

// Main function component for the home page
const Home: React.FC<NewsProps> = (props) => {
  // PRELOADER
  // State variable for preloader. A preloader is a visual element that appears on the screen while a webpage or a portion of a webpage is loading.
  const [preloader, setpreloader] = useState(true);
  // The preloader state variable is initially set to true, indicating that the preloader should be displayed.

  // useEffect hook to handle preloader and body overflow
  useEffect(() => {
    // Delay for preloader to disappear
    setTimeout(() => {
      setpreloader(false);
    }, 1500);

    // Adding CSS classes to body for overflow control
    document.body.classList.add('overflow_anchor');
    if (preloader) {
      document.body.classList.add('overflow_hidden');
    } else {
      document.body.classList.remove('overflow_hidden');
    }
  });

  return (
    <div className="max-w-[5560px] mx-auto">
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.home} />
      {/* PRELOADER is conditionally rendered based on the value of the preloader state variable. */}
      {preloader && (
        <div className={`preloader fixed min-h-screen top-0 left-0 w-full z-50 flex justify-center items-center`}>
          <span>
            <PageLogo />
          </span>
        </div>
      )}

      <div className='overflow_hidden'>
        <div className='hero_homepage_bg min-h-screen bg-no-repeat bg-cover flex flex-col justify-center bg-center'>
          <Header />
          <div className='flex lg:items-center lg:flex-row flex-col relative'>
            <HomeTitleSection />
            <Image 
              className='absolute right-0 hero_grid_position -z-10 hidden lg:block w-[450px] xl:w-[700px]'
              src='/assets/img/svg/hero_grid.svg'
              alt='grid-lines'
              width={700}
              height={700}
              priority={true}  // Added priority for hero image
            />
          </div>
        </div>

        <WhyAthletifiSelectSection />
        <CoachesSection />
        <DigitalCardInfoSection />

        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await GetRequestHandler(NewsListApiHandler());

    if (!response) {
       return {
        props: {
          allNewsList: null,
        },
      };
    }
    
    return {
      props: {
        allNewsList: response,
      },
    };
    
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        allNewsList: null,
      },
    };
  }
}

export default Home;
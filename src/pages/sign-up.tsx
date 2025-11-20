import CommonHero from "@/components/common/CommonHero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Seo from "@/components/common/Seo";
import SignUpForm from "@/components/sign-up/SignUpForm";
// import Description from "@/components/sign-up/Description";
import { SEO_CONFIG } from "@/utils/seoConfig";
import Link from "next/link";
import BlueButton from "@/components/common/BlueButton";
import { PleyrLogo } from "@/components/common/Icon";

const Signup = () => {
  /* 
    // Get the current date
    const currentDate = new Date();
    // Define the target date
    const targetDate = new Date('March 1, 2025');

    // Determine the sub-heading based on the current date
    const subHeading = currentDate < targetDate 
      ? "Register Now! 🌞 Early Bird Price Ends March 1st" 
      : undefined;  
  */

  // SEO
  const hero = {
    heading: "Stay Updated",
    subHeading: "Join the AthletiFi & Pleyr Community",
    title: "Join Our Elite Summer Soccer Program",
    subtitle: "Elite Training & Tournament Competition",
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.signUp} />
      
      <div className="bg-signup-hero-img bg-cover overflow-hidden">
        <Header />
        <CommonHero hero={hero} />
      </div>

      {/* Narrative Section */}
      <section className='pt-12 pb-2 relative bg-hero-pattern bg-cover bg-center'>
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3'>
          <div className='max-w-[900px] mx-auto text-center'>
            
            {/* Retrospective */}
            <h2 className='font-HelveticaNeueMedium text-[28px] md:text-4xl text-primary mb-6'>
              Thank You for an Incredible 2024 & 2025
            </h2>
            <p className='font-Segoe text-lg text-primary opacity-80 mb-10 leading-8'>
              Over the past two summers, AthletiFi Select brought together 100+ families 
              and achieved unprecedented success—with 4 out of 5 teams winning championships 
              at the EDP Summer Sizzler and multiple victories at Hershey Summer Classic.
            </p>

            {/* Pleyr Promotion Box */}
            <div className='bg-darkgray p-8 rounded-[30px] border border-[#ffffff10] mb-12 shadow-lg'>
              <div className="flex justify-center mb-6">
                <PleyrLogo className="w-48 h-auto" mode="responsive" />
              </div>
              <h3 className='text-2xl font-HelveticaNeueMedium text-skyblue mb-4'>
                What's Next? 🚀
              </h3>
              <p className='font-Segoe text-md text-primary opacity-90 mb-6 leading-7 max-w-[700px] mx-auto'>
                While we explore the future of our summer program, we're excited to 
                introduce you to <strong>Pleyr</strong>—the gamified video platform we've been building 
                to help every young athlete own their soccer journey.
              </p>
              
              <div className="flex justify-center">
                <Link href="https://pleyr.com" target="_blank" rel="noopener noreferrer">
                  <button className='bg-skyblue text-white px-8 py-3 rounded font-semibold 
                                   hover:bg-black hover:border hover:border-skyblue border border-transparent
                                   transition duration-300 flex items-center gap-2'>
                    Explore Pleyr Platform
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Transition to Form */}
            <div className='text-left lg:text-center mb-4'>
              <h3 className='text-xl font-HelveticaNeueMedium text-primary mb-2'>
                Stay Connected
              </h3>
              <p className='text-md text-primary opacity-80 mb-4'>
                Want to be first to know about future programs, year-round clinics, 
                or opportunities with our coaching staff? Fill out the interest form below.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Functional Form Component */}
      <SignUpForm />
      
      <Footer />
    </div>
  );
};

export default Signup;
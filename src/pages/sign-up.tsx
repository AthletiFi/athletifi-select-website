import CommonHero from "@/components/common/CommonHero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Seo from "@/components/common/Seo";
import SignUpForm from "@/components/sign-up/SignUpForm";
import Description from "@/components/sign-up/Description";
import { SEO_CONFIG } from "@/utils/seoConfig";

const Signup = () => {
  // Get the current date
  const currentDate = new Date();
  // Define the target date
  const targetDate = new Date('March 1, 2025');

  // Determine the sub-heading based on the current date
  const subHeading = currentDate < targetDate 
    ? "Early Bird Price Ends March 1st!" 
    : undefined;

  // SEO
  const hero = {
    heading: "Sign up for ☀️ Summer Select ☀️",
    subHeading: subHeading,
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
      <section className='pt-2 pb-2 sm:mb-5 sm:pb-5 lg:mb-0 relative bg-hero-pattern bg-cover bg-center'>
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative'>
          <div className=' relative pb-5 pt-2 lg:pb-16 md:pb-10 sm:mt-6 z-0'>
            <div
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='ease-in-sine'
              data-aos-delay='300'
              data-aos-offset='100'
            >
              <Description />
            </div>
          </div>
        </div>
      </section>
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Signup;
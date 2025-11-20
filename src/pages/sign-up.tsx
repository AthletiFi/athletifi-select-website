import CommonHero from "@/components/common/CommonHero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Seo from "@/components/common/Seo";
import SignUpForm from "@/components/sign-up/SignUpForm";
import { SEO_CONFIG } from "@/utils/seoConfig";

const Signup = () => {
  // SEO
  const hero = {
    heading: "Summer Select Waitlist",
    title: "Summer Select 2026 Interest Form",
    subtitle: "Express Your Interest in Our Elite Program",
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.signUp} />
      
      <div className="bg-signup-hero-img bg-cover overflow-hidden">
        <Header />
        <CommonHero hero={hero} />
      </div>

      {/* Introduction Section */}
      <section className='pt-12 pb-2 relative bg-hero-pattern bg-cover bg-center'>
        <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3'>
          <div className='max-w-[900px] mx-auto text-center'>

            {/* Transition to Form */}
            <div className='text-left lg:text-center mb-4'>
              <h3 className='text-xl font-HelveticaNeueMedium text-primary mb-2'>
                Planning for Summer 2026
              </h3>
              <p className='text-md text-primary opacity-80 mb-4'>
                We're currently developing plans for the 2026 season, along with potential 
                year-round clinic opportunities. Join our waitlist to be among the first to 
                know when registration opens.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <SignUpForm />
      
      <Footer />
    </div>
  );
};

export default Signup;
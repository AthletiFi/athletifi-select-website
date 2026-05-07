import CommonHero from "@/components/common/CommonHero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Seo from "@/components/common/Seo";
import SignUpForm from "@/components/sign-up/SignUpForm";
import { SEO_CONFIG } from "@/utils/seoConfig";

const Signup = () => {
  // SEO
  const hero = {
    heading: "Fall 2026 Tryouts",
    title: "Tryouts Are Underway",
    subtitle: "Limited roster spots for a competitive fall season at Arcadia University",
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
                Fall 2026 Season Tryout Inquiries
              </h3>
              <p className='text-md text-primary opacity-80 mb-4'>
                AthletiFi Select is currently running tryouts for the upcoming Fall 2026 season,
                which kicks off the last week of August 2026. Spots are limited in this selective
                program, and interested families should reach out directly for tryout schedule and availability.
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

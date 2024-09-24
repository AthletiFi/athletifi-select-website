import CommonHero from "@/components/common/CommonHero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Seo from "@/components/common/Seo";
import SignUpForm from "@/components/sign-up/SignUpForm";
import Description from "@/components/sign-up/Description"
import { SEO_CONFIG } from "@/utils/seoConfig";

const Signup = () => {
  // SEO
  const hero = {
    heading: "Now Registering: ❄️ Winter Select ❄️",
    title: "Join Our Elite Soccer Programs",
    subtitle: "Develop Your Skills Year-Round",
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
          <div className=' relative pb-5 pt-2 lg:pb-16  md:pb-10 sm:mt-6 z-0'>
            <div
              data-aos='fade-up'
              data-aos-duration='400'
              data-aos-easing='ease-in-sine'
              data-aos-delay='300'
              data-aos-offset='100'
            >
              {/* <p className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
                AthletiFi Select's Winter Program ❄️ offers elite, club-neutral ⚽️ soccer training designed to keep players sharp during the off-season. Led by Eastern Pennsylvania's top coaches 🏅, our program combines focused, small-group training with competitive winter league play 🏆. With optimal team sizes, players receive personalized attention to develop their skills in a structured environment.
              </p>
              <p className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
                Plus, our innovative AthletiFi dashboard 📊 provides real-time access to player stats and video highlights 🎥, keeping you connected to your progress every step of the way.
              </p>
              <p className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
                Stay competitive this winter ❄️ and take your game to the next level! 🚀
              </p> */}
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
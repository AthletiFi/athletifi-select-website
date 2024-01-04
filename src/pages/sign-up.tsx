import CommonHero from "@/components/common/CommonHero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Seo from "@/components/common/Seo";
import SignUpForm from "@/components/sign-up/SignUpForm";
import { SEO_CONFIG } from "@/utils/seoConfig";

const Signup = () => {
  // SEO
  const hero = {
    heading: "Register for Summer Select 2024",
    title: "Your Title Here",
    subtitle: "Your Subtitle Here",
  };

  return (
    <div className="max-w-[5560px] mx-auto">
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.signUp} />
      <div className="bg-signup-hero-img bg-cover  overflow-hidden">
        <Header />
        <CommonHero hero={hero} />
      </div>
      <SignUpForm />
      <Footer />
    </div> 
  );
};

export default Signup;

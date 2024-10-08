import CommonHero from '@/components/common/CommonHero';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Seo from '@/components/common/Seo';
import { SEO_CONFIG } from '@/utils/seoConfig';
import TermsOfUse from '@/components/terms/TermsOfUse';

const TermsOfUsePage = () => {
  const hero = {
    heading: 'Terms of Use',
    title: '',
    subtitle: ''
  };

  return (
    <>
      {/* SEO */}
      <Seo pageSEO={SEO_CONFIG.home} />
      <div>
        <Header />
        <CommonHero hero={hero} />
        <TermsOfUse />
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUsePage;

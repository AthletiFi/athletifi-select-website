import Backtotop from "../../../components/common/Backtotop";
import CommonHero from "../../../components/common/CommonHero";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import Seo from "../../../components/common/Seo";
import FocusArticle from "../../../components/news-insights/FocusArticle";
import NewsInsightsCards from "../../../components/news-insights/NewsInsightsCards";

// Importing API handlers for fetching news data
import { GetRequestHandler } from "../../../components/common/api/Api";
import {
  NewsListApiHandler,
  NewsListFilterApiHandler,
} from "../../../components/common/api/ApiUrls";

// The main functional component for the News and Insights page
const NewsInsight = ({ newsListData, allNewsList }) => {
  // SEO
  const hero = {
    heading: "News and Insights1111",
    title: "Your Title Here",
    subtitle: "Your Subtitle Here",
  };
  const pageSEO = {
    // SEO TITLE
    title: `${newsListData[0].title}`,

    // SEO DESCRIPTION
    description: `${newsListData[0].description}`,

    // SEO WEBSITE URL
    websiteURL: `https://athletif.fi`,

    // SEO IMAGE
    image: `https://vidalco.in${newsListData[0].image.url}`,
  };
  return (
    <>
      {/* SEO */}
      <Seo pageSEO={pageSEO} />
      <div className="overflow_hidden">
        <div className="bg-new-hero-img bg-center bg-no-repeat bg-cover">
          <Header />
          <CommonHero hero={hero} />
        </div>
        <FocusArticle newsListData={newsListData} />
        <NewsInsightsCards allNewsList={allNewsList} />
        <Footer />
        <Backtotop />
      </div>
    </>
  );
};

// Server-side data fetching for the News and Insights page
export async function getServerSideProps() {
  try {
        // Fetching news list and filter data
    const response = await GetRequestHandler(NewsListApiHandler());
    const responseFilter = await GetRequestHandler(NewsListFilterApiHandler());
    const NewsData = responseFilter && responseFilter.data;

    return {
      props: {
        newsListData: NewsData,
        allNewsList: response,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        newsListData: null,
        allNewsList: null,
      },
    };
  }
}

export default NewsInsight;
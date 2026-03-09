import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LearnHero from "../components/learn/LearnHero";
import FeaturedSection from "../components/learn/FeaturedSection";
import CategoryStrip from "../components/learn/CategoryStrip";
import TopicSection from "../components/learn/TopicSection";
import TagCloudSection from "../components/learn/TagCloudSection";
import Tips from "../components/learn/Tips";
import WalletArticles from "../components/learn/WalletArticles";
import Futures from "../components/learn/Futures";
import AdvancedTrading from "../components/learn/AdvancedTrading";


export default function LearnPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f7fa] pt-[86px]">
        <LearnHero />
        <FeaturedSection />
        <CategoryStrip />

        <TopicSection
          title="Crypto basics"
          subtitle="New to crypto? Not for long — start with these guides and explainers"
          buttonText="See more crypto basics"
        />

        <TagCloudSection />

        <Tips
          title="Tips and tutorials"
          subtitle="Get practical, step-by-step answers to all things crypto"
          buttonText="See more tips and tutorials"
        />

        <AdvancedTrading
          title="Advanced trading"
          subtitle="Ready to advance? Learn the tools and terminology you need to take control of your trades."
          buttonText="See more advanced trading"
        />

        <Futures
          title="Futures"
          subtitle="New to futures trading? Get up to speed on the basics."
          buttonText="See more about futures"
        />

        <WalletArticles
          title="All Things Wallet"
          subtitle="Earn yield, dive into crypto apps, control your holdings, and much more"
          buttonText="See more Wallet articles"
        />

        <Footer />
      </main>
    </>
  );
}
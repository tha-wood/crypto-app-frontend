import Header from "../components/layout/Header";
import ExploreMainHero from "../components/crypto/explore/ExploreHero";
import ExploreSidebar from "../components/crypto/explore/ExploreSidebar";
import MarketStatsMain from "../components/crypto/explore/MarketStats";
import PricesTable from "../components/crypto/explore/PricesTable";
import ExploreCta from "../components/crypto/explore/ExploreCta";
import Footer from "../components/layout/Footer";

export default function ExplorePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f7fa] pt-[86px]">
        <div className="mx-auto max-w-[1440px] xl:grid xl:grid-cols-[minmax(0,1fr)_390px]">
          {/* LEFT / MAIN */}
          <div className="min-w-0 xl:border-r xl:border-gray-200">
            <ExploreMainHero />
            <MarketStatsMain />
            <PricesTable />
          </div>

          {/* RIGHT SIDEBAR */}
          <ExploreSidebar />
        </div>

        <ExploreCta />
        <Footer />
      </main>
    </>
  );
}
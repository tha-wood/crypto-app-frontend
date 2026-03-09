import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Explore from "../components/crypto/Explore";
import Hero from "../components/common/Hero";
import AdvancedTrader from "../components/common/AdvancedTrader";
import CoinbaseOne from "../components/common/CoinbaseOne";
import LearnBasics from "../components/common/LearnBasics";
import TakeControl from "../components/common/TakeControl";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-25 md:pt-15">
        <Hero />
        <Explore />
        <AdvancedTrader />
        <CoinbaseOne />
        <LearnBasics />
        <TakeControl />
        <Footer />
      </main>
    </>
  );
}
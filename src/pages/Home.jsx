import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import AdvancedTrader from "../components/AdvancedTrader";
import CoinbaseOne from "../components/CoinbaseOne";
import LearnBasics from "../components/LearnBasics";
import TakeControl from "../components/TakeControl"

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
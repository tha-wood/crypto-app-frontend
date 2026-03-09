import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import AdvancedTrader from "../components/AdvancedTrader";
import CoinbaseOne from "../components/CoinbaseOne";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero />
        <Explore />
        <AdvancedTrader />
        <CoinbaseOne />
        <Footer />
      </main>
    </>
  );
}
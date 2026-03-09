import advancedTraderImg from "../../assets/images/advanced-trader.png";

export default function AdvancedTrader() {
  return (
    <section className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-[32px] bg-black p-6 md:p-8">
            <img
              src={advancedTraderImg}
              alt="Advanced trading tools"
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="order-1 max-w-[560px] lg:order-2">
          <h2 className="text-[34px] leading-[1.05] tracking-[-0.03em] text-black md:text-[48px] lg:text-[56px]">
            Powerful tools, designed for the advanced trader.
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-gray-600 md:text-[18px]">
            Powerful analytical tools with the safety and security of Coinbase
            deliver the ultimate trading experience. Tap into sophisticated
            charting capabilities, real-time order books, and deep liquidity
            across hundreds of markets.
          </p>

          <button className="mt-8 rounded-full bg-black px-7 py-3 text-[16px] font-semibold text-white transition hover:opacity-90">
            Start trading
          </button>
        </div>
      </div>
    </section>
  );
}
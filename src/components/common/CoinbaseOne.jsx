import coinbaseOneImg from "../../assets/images/coinbase-one.png";
import coinbaseTwoImg from "../../assets/images/coinbase-two.png";
import coinbaseLogo from "../../assets/images/logo.png"


export default function CoinbaseOne() {
  return (
    <section className="bg-white pt-16 md:pt-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[14px] font-medium text-gray-600">
            <img
              src={coinbaseLogo}
              alt="coinbase logo"
              className="filter brightness-0 h-3"
            />
            COINBASE ONE
          </div>

          <h2 className="mt-6 text-[34px] leading-[1.05] tracking-[-0.03em] text-black md:text-[48px] lg:text-[56px]">
            Zero trading fees,
            <br />
            more rewards.
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-gray-600 md:text-[18px]">
            Get more out of crypto with one membership: zero trading fees,
            boosted rewards, priority support, and more.
          </p>

          <button className="mt-8 rounded-full bg-black px-7 py-3 text-[16px] font-semibold text-white transition hover:opacity-90">
            Claim free trial
          </button>
        </div>

        <div>
          <div className="overflow-hidden rounded-[32px] bg-[#f5f7fa] p-6 md:p-8">
            <img
              src={coinbaseOneImg}
              alt="Coinbase One"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>


      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 py-24">

        <div>
          <div className="overflow-hidden rounded-[32px] bg-[#f5f7fa] p-6 md:p-8">
            <img
              src={coinbaseTwoImg}
              alt="Coinbase two"
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[14px] font-medium text-gray-600">
            <img
              src={coinbaseLogo}
              alt="coinbase logo"
              className="filter brightness-0 h-3"
            />
            BASE APP
          </div>

          <h2 className="mt-6 text-[34px] leading-[1.05] tracking-[-0.03em] text-black md:text-[48px] lg:text-[56px]">
            Countless ways to earn
            <br />
            crypto with the Base App.
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-gray-600 md:text-[18px]">
            An everything app to trade, create, discover, and chat, all in one place.
          </p>

          <button className="mt-8 rounded-full bg-black px-7 py-3 text-[16px] font-semibold text-white transition hover:opacity-90">
            Learn more
          </button>
        </div>


      </div>
    </section>
  );
}
import coinsGraphic from "../../assets/images/take-control-coins.png";

export default function TakeControl() {
  return (
    <section className="py-16 md:pt-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-12 px-4 md:px-8 lg:grid-cols-2 lg:px-10">
        <div className="max-w-[560px]">
          <h2 className="text-[44px] leading-[0.95] tracking-[-0.03em] text-black md:text-[64px] lg:text-[76px]">
            Take control
            <br />
            of your money
          </h2>

          <p className="mt-6 text-[18px] leading-8 text-black">
            Start your portfolio today and discover crypto
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="h-14 w-full rounded-xl border border-gray-300 bg-white px-5 text-[16px] outline-none placeholder:text-gray-500 focus:border-gray-400 sm:max-w-[340px]"
            />

            <button className="h-14 rounded-full bg-blue-600 px-8 text-[18px] font-semibold text-white transition hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={coinsGraphic}
            alt="Crypto icons graphic"
            className="w-full max-w-[520px] object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-[980px] px-4 text-center md:px-8">
        <p className="text-[14px] leading-7 text-gray-500">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>

        <p className="mt-6 text-[14px] leading-7 text-gray-500">
          Products and features may not be available in all regions.
          Information is for informational purposes only and is not (i) an
          offer, or solicitation of an offer, to invest in, or to buy or sell,
          any interests or shares, or to participate in any investment or
          trading strategy or (ii) intended to provide accounting, legal, or
          tax advice, or investment recommendations. Trading cryptocurrency
          comes with risk.
        </p>
      </div>
    </section>
  );
}
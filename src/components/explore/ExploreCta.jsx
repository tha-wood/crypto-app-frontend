import coinsGraphic from "../../assets/images/take-control-coins.png";

export default function ExploreCta() {
  return (
    <section className="bg-[#1652f0]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-12 md:px-8 lg:grid-cols-2 lg:px-10">
        <div className="max-w-[620px]">
          <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] text-white md:text-[52px]">
            Create a Coinbase account to trade crypto. It’s quick, easy, and
            secure.
          </h2>

          <button className="mt-10 flex items-center gap-4 rounded-full bg-[#e9edf2] px-8 py-4 text-[18px] font-semibold text-black">
            Start Trading
            <span className="text-3xl">→</span>
          </button>
        </div>

        <div className="hidden justify-center lg:flex">
          <img
            src={coinsGraphic}
            alt="Trading illustration"
            className="w-full max-w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
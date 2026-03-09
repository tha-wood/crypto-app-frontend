const tags = [
  "Bitcoin",
  "Blockchain",
  "Cardano",
  "Crypto wallet",
  "DeFi",
  "Ethereum",
  "Fork",
  "Inflation",
  "Market cap",
  "NFT",
  "Private key",
  "Protocol",
  "Smart contract",
  "Token",
  "Volatility memecoin",
];

export default function TagCloudSection() {
  return (
    <section className="border-b border-gray-200 px-4 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="text-[44px] font-semibold leading-none tracking-[-0.03em] text-black md:text-[64px]">
          What is...
        </h2>

        <div className="mx-auto mt-14 flex max-w-[1160px] flex-wrap justify-center gap-4">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-md bg-white px-7 py-4 text-[18px] font-semibold text-black shadow-sm"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-14">
          <button className="rounded-md bg-[#1652f0] px-10 py-4 text-[18px] font-semibold text-white">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}
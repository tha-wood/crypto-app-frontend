import CryptoBasics from "../../assets/images/invest-card.png"
import AltCoin from "../../assets/images/Alt-Coin.png"
import Eth from "../../assets/images/ethereum.png"
import Defi from "../../assets/images/defi.png"
import StableCoin from "../../assets/images/stablecoin.png"
import Glossary from "../../assets/images/glossary.png"
const demoCards = [
  {
    image: CryptoBasics,
    label: "BEGINNER'S GUIDE",
    title: "What is Bitcoin?",
    description:
      "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.",
  },
  {
    image: AltCoin,
    label: "BEGINNER'S GUIDE",
    title: "Guide to DeFi tokens and altcoins",
    description:
      "From Aave to Zcash, decide what to trade with our beginner's guide",
  }
];

const demoCards2 = [
  {
    image: Eth,
    label: "BEGINNER'S GUIDE",
    title: "What is Ethereum?",
  },
  {
    image: Defi,
    label: "KEY TERM",
    title: "What is DeFi",
  },
  {
    image: StableCoin,
    label: "BEGINNER'S GUIDE",
    title: "What is a stablecoion?",
  },
  {
    image: Glossary,
    label: "GLOSSARY",
    title: "Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained",
  }
];

export default function TopicSection({ title, subtitle, buttonText }) {
  return (
    <section className="border-b border-gray-200 px-4 py-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="text-[44px] font-semibold leading-none tracking-[-0.03em] text-black md:text-[64px]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[20px] leading-8 text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {demoCards.map((card, index) => (
            <article key={`${card.title}-${index}`}>
              <div className="overflow-hidden bg-[#c8d3d3]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover"
                />
              </div>

              <p className="mt-5 text-[14px] font-semibold tracking-wide text-gray-500 uppercase">
                {card.label}
              </p>

              <h3 className="mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-black">
                {card.title}
              </h3>

              {card.description && (
                <p className="mt-4 text-[18px] leading-8 text-black">
                  {card.description}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          {demoCards2.map((card, index) => (
            <article key={`${card.title}-${index}`}>
              <div className="overflow-hidden bg-[#c8d3d3]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-85 object-cover"
                />
              </div>

              <p className="mt-5 text-[14px] font-semibold tracking-wide text-gray-500 uppercase">
                {card.label}
              </p>

              <h3 className="mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-black">
                {card.title}
              </h3>

              {card.description && (
                <p className="mt-4 text-[18px] leading-8 text-black">
                  {card.description}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button className="rounded-md bg-[#1652f0] px-10 py-4 text-[18px] font-semibold text-white">
            {buttonText} →
          </button>
        </div>
      </div>
    </section>
  );
}
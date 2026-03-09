import usdcCard from "../assets/images/usdc-card.png";
import banklessCard from "../assets/images/bankless-card.png";
import investCard from "../assets/images/invest-card.png";

const articles = [
  {
    image: usdcCard,
    title: "USDC: The digital dollar for the global crypto economy",
    description:
      "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...",
  },
  {
    image: banklessCard,
    title: "Can crypto really replace your bank account?",
    description:
      "If you're a big enough fan of crypto, you've probably heard the phrase “be your own bank” or the term “bankless” — the idea being that...",
  },
  {
    image: investCard,
    title: "When is the best time to invest in crypto?",
    description:
      "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...",
  },
];

export default function LearnBasics() {
  return (
    <section className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="max-w-[620px]">
            <h2 className="text-[38px] leading-[0.98] tracking-[-0.03em] text-black md:text-[56px] lg:text-[58px]">
              New to crypto?
              <br />
              Learn some
              <br />
              crypto basics
            </h2>
          </div>

          <div className="max-w-[520px] lg:justify-self-end">
            <p className="text-[18px] leading-8 text-gray-600">
              Beginner guides, practical tips, and market updates for
              first-timers, experienced investors, and everyone in between
            </p>

            <button className="mt-8 rounded-full bg-black px-7 py-3 text-[16px] font-semibold text-white transition hover:opacity-90">
              Read More
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title}>
              <div className="overflow-hidden rounded-[30px] bg-white">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-50 w-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-[28px] leading-[1.08] tracking-[-0.02em] text-black md:text-[32px]">
                {article.title}
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-gray-600">
                {article.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
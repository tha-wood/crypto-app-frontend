import FeaturedImage from "../../assets/images/featured-article.png"
const popularItems = [
  {
    label: "BEGINNER'S GUIDE",
    title: "What is cryptocurrency?",
  },
  {
    label: "GETTING STARTED",
    title: "How to earn crypto rewards",
  },
  {
    label: "GETTING STARTED",
    title: "How to add crypto to your Coinbase Wallet",
  },
  {
    label: "YOUR CRYPTO",
    title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports",
  },
  {
    label: "GETTING STARTED",
    title: "Beginner’s guide to dapps",
  },
  {
    label: "MARKET UPDATE",
    title: "Everything you need to know about the first-ever U.S. Bitcoin ETF",
  },
];

export default function FeaturedSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-[22px] font-semibold text-black">Featured</h2>

          <div className="mt-8 overflow-hidden rounded-none bg-[#c8d3d3]">
            <img
              src={FeaturedImage}
              alt="Featured article"
              className="w-full object-cover"
            />
          </div>

          <p className="mt-5 text-[14px] font-semibold tracking-wide text-gray-500 uppercase">
            Video tutorial
          </p>

          <h3 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-black">
            When is the best time to invest in crypto?
          </h3>

          <p className="mt-4 max-w-[900px] text-[18px] leading-8 text-black">
            When prices are fluctuating, how do you know when to buy? Learn
            more about using dollar-cost averaging to weather price volatility.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-black">Popular</h2>

          <div className="mt-8 space-y-8">
            {popularItems.map((item) => (
              <article key={item.title}>
                <p className="text-[14px] font-semibold tracking-wide text-gray-500 uppercase">
                  {item.label}
                </p>

                <h3 className="mt-3 text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-black">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
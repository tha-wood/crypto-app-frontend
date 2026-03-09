import { marketStats } from "../../../data/exploreData";

export default function MarketStatsMain() {
  return (
    <section className="border-b border-gray-200">
      <div className="px-4 py-10 md:px-8 xl:px-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-black md:text-[36px]">
              Market stats
            </h2>

            <p className="mt-4 max-w-[980px] text-[16px] leading-8 text-gray-600">
              The overall crypto market is shrinking this week. As of today,
              the total crypto market capitalization is 24.57 trillion,
              representing a 0.62% decrease from last week.
            </p>

            <button className="mt-3 text-[16px] font-medium text-blue-600">
              Read more
            </button>
          </div>

          <div className="hidden items-center gap-6 xl:flex">
            <button className="text-3xl text-gray-500">←</button>
            <button className="text-3xl text-gray-700">→</button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto hide-scrollbar">
          <div className="flex w-max gap-4 pb-2">
            {marketStats.map((item) => (
              <div
                key={item.title}
                className="w-[340px] shrink-0 rounded-[24px] bg-gray-100 p-5"
              >
                <p className="text-[16px] text-gray-500">{item.title}</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[16px] font-semibold text-black">
                    {item.value}
                  </span>
                  <span className={`text-[16px] font-semibold ${item.changeColor}`}>
                    {item.change}
                  </span>
                </div>

                <div className="mt-8">
                  <img
                    src={item.chart}
                    alt={item.title}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
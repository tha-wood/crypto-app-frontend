import StarImage from "../../../assets/images/star.svg";
import { newOnCoinbase, topMovers } from "../../../data/exploreData";

export default function ExploreSidebar() {
  return (
    <aside className="px-4 py-8 md:px-8 xl:px-8">
      <div className="space-y-12">
        {/* Blue card */}
        <section className="relative flex items-center justify-between overflow-hidden rounded-[32px] bg-[#1652f0] px-10 py-5 text-white">

          {/* Left content */}
          <div className="max-w-[200px]">
            <h3 className="text-[18px] font-semibold">Get started</h3>

            <p className="mt-3 text-[16px] font-medium">
              Create your account today
            </p>

            <button className="mt-6 rounded-full bg-[#e9edf2] px-6 py-3 text-[16px] font-semibold text-black">
              Sign up
            </button>
          </div>

          {/* Right image */}
          <img
            src={StarImage}
            alt="Coinbase star graphic"
            className="h-[90px] w-auto object-contain"
          />

        </section>

        {/* Top movers */}
        <section>
          <div className="flex items-center justify-between">
            <h3 className="text-[24px] font-semibold text-black">Top movers</h3>

            <div className="flex items-center gap-4">
              <button className="text-3xl text-gray-500">←</button>
              <button className="text-3xl text-gray-700">→</button>
            </div>
          </div>

          <p className="mt-3 text-[16px] text-gray-500">24hr change</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {topMovers.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] bg-[#e9edf2] p-5"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-contain"
                />

                <p className="mt-5 text-[14px] text-gray-500">{item.name}</p>

                <p className="mt-1 text-[18px] font-semibold text-green-600">
                  {item.change}
                </p>

                <p className="mt-1 text-[16px] text-gray-700">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* New on Coinbase */}
        <section>
          <div className="flex items-center justify-between">
            <h3 className="text-[24px] font-semibold text-black">
              New on Coinbase
            </h3>

            <div className="flex items-center gap-4">
              <button className="text-3xl text-gray-500">←</button>
              <button className="text-3xl text-gray-700">→</button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {newOnCoinbase.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] bg-[#e9edf2] p-5"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-contain"
                />

                <p className="mt-5 text-[14px] uppercase text-gray-500">
                  {item.symbol}
                </p>

                <p className="mt-1 text-[18px] font-semibold text-black">
                  {item.name}
                </p>

                <p className="mt-2 text-[16px] text-gray-600">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
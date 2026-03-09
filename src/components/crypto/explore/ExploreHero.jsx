import { Info, Search } from "lucide-react";

export default function ExploreMainHero() {
  return (
    <section className="border-b border-gray-200">
      <div className="px-4 py-10 md:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_minmax(360px,540px)] lg:items-start lg:gap-10">
          <div>
            <h1 className="text-[40px] leading-none tracking-[-0.03em] text-black md:text-[56px]">
              Explore crypto
            </h1>

            <div className="mt-4 flex items-center gap-2 text-[18px] text-black">
              <span>Coinbase 50 Index is up</span>
              <span className="text-green-600">↗ 3.10%</span>
              <span className="text-gray-600">(24hrs)</span>
              <Info size={16} className="text-gray-500" />
            </div>
          </div>

          <div className="flex lg:justify-end">
            <div className="flex h-16 w-full max-w-[540px] items-center gap-3 rounded-full bg-[#e9edf2] px-6">
              <Search size={22} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search for an asset"
                className="w-full bg-transparent text-[18px] outline-none placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
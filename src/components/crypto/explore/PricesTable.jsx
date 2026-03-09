import { priceFilters, priceRows } from "../../../data/exploreData";

function chartColorClass(color) {
  if (color === "orange") return "text-orange-500";
  if (color === "blue") return "text-blue-500";
  if (color === "green") return "text-green-500";
  if (color === "yellow") return "text-yellow-500";
  if (color === "purple") return "text-purple-500";
  if (color === "red") return "text-red-500";
  return "text-black";
}

export default function PricesTable() {
  return (
    <section className="border-t border-b border-gray-200">
      <div className="mx-auto max-w-[1440px]">
        <div className="px-4 py-10 md:px-8 xl:px-10">
          <div className="flex flex-wrap items-end gap-3">
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-black md:text-[36px]">
              Crypto market prices
            </h2>
            <span className="pb-1 text-[18px] text-gray-500">
              18,532 assets
            </span>
          </div>

          <p className="mt-4 max-w-[920px] text-[16px] leading-8 text-gray-600">
            The overall crypto market is shrinking this week. As of today, the
            total crypto market capitalization is 24.57 trillion, representing
            a 0.62% decrease from last week.
          </p>

          <button className="mt-3 text-[16px] font-medium text-blue-600">
            Read more
          </button>

          <div className="mt-8 flex flex-wrap gap-3">
            {priceFilters.map((item) => (
              <button
                key={item}
                className="rounded-full bg-[#e9edf2] px-5 py-3 text-[16px] font-medium text-black"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-[1080px] w-full border-separate border-spacing-y-6">
              <thead>
                <tr className="text-left text-[16px] font-semibold text-gray-500">
                  <th className="w-10"></th>
                  <th>Asset</th>
                  <th>Market price</th>
                  <th>Chart</th>
                  <th>Change</th>
                  <th className="text-blue-600">Mkt cap</th>
                  <th>Volume</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {priceRows.map((row) => (
                  <tr key={row.name}>
                    <td className="text-gray-400">☆</td>

                    <td>
                      <div className="flex items-center gap-4">
                        <img
                          src={row.icon}
                          alt={row.name}
                          className="h-10 w-10 rounded-full object-contain"
                        />
                        <div>
                          <p className="text-[18px] font-semibold text-black">
                            {row.name}
                          </p>
                          <p className="text-[16px] text-gray-500">
                            {row.symbol}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="text-[18px] text-black">{row.price}</td>

                    <td className={`text-[18px] ${chartColorClass(row.chart)}`}>
                      ↗↘↗
                    </td>

                    <td className={`text-[18px] ${row.changeColor}`}>
                      {row.change}
                    </td>

                    <td className="text-[18px] text-black">{row.mktCap}</td>

                    <td className="text-[18px] text-black">{row.volume}</td>

                    <td>
                      <button className="rounded-full bg-[#1652f0] px-7 py-3 text-[16px] font-semibold text-white">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-8 text-[18px]">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1652f0] text-white">
                1
              </button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>1,854</button>
              <button className="text-2xl text-gray-500">›</button>
            </div>

            <p className="text-[16px] text-gray-500">1-10 of 18,532 assets</p>
          </div>
        </div>
      </div>
    </section>
  );
}
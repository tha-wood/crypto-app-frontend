import { useState } from "react";
import { Link } from "react-router-dom";
import { newCoins, topGainers, tradable } from "../../data/homeData";

export default function Explore() {
  const [tab, setTab] = useState("tradable");

  const currentData =
    tab === "tradable" ? tradable : tab === "gainers" ? topGainers : newCoins;

  return (
    <section className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="max-w-[560px]">
          <h2 className="text-[34px] leading-[1.05] tracking-[-0.03em] text-black md:text-[48px] lg:text-[56px]">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>

          <p className="my-5 text-[16px] leading-7 text-gray-600 md:text-[18px]">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </p>

          <Link 
            to="/explore"
            className="mt-7 rounded-full bg-black px-7 py-3 text-[16px] font-semibold text-white transition hover:opacity-90 hover:cursor-pointer">
            See more assets
          </Link>
        </div>

        <div className="rounded-[32px] bg-black p-5 text-white shadow-xl md:p-7 lg:p-9">
          <div className="flex items-center gap-2 overflow-x-auto text-[14px] font-semibold md:gap-4">
            <button
              onClick={() => setTab("tradable")}
              className={`whitespace-nowrap rounded-full hover:cursor-pointer hover:bg-slate-500 px-4 py-2 transition ${
                tab === "tradable" ? "bg-[#1f2430] text-white" : "text-white"
              }`}
            >
              Tradable
            </button>

            <button
              onClick={() => setTab("gainers")}
              className={`whitespace-nowrap rounded-full hover:cursor-pointer hover:bg-slate-500 px-4 py-2 transition ${
                tab === "gainers" ? "bg-[#1f2430] text-white" : "text-white"
              }`}
            >
              Top gainers
            </button>

            <button
              onClick={() => setTab("new")}
              className={`whitespace-nowrap rounded-full hover:cursor-pointer hover:bg-slate-500 px-4 py-2 transition ${
                tab === "new" ? "bg-[#1f2430] text-white" : "text-white"
              }`}
            >
              New on Coinbase
            </button>
          </div>

          <div className="mt-8 space-y-5 md:space-y-6">
            {currentData.map((coin) => (
              <div
                key={coin.name}
                className="flex items-center justify-between rounded-xl p-1 transition hover:bg-[#111418]"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={coin.icon}
                    alt={coin.name}
                    className="h-8 w-8 rounded-full object-contain md:h-9 md:w-9"
                  />
                  <span className="text-[18px] font-medium md:text-[22px]">
                    {coin.name}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-[16px] font-medium text-white md:text-[18px]">
                    {coin.price}
                  </p>
                  <p className={`mt-1 text-[14px] ${coin.color}`}>
                    {coin.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
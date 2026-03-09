import { useState } from "react";

import btc from "../assets/icons/btc.png";
import eth from "../assets/icons/eth.png";
import tether from "../assets/icons/tether.png";
import bnb from "../assets/icons/bnb.png";
import xrp from "../assets/icons/xrp.png";
import usdc from "../assets/icons/usdc.png";

import freysa from "../assets/icons/freysa.png";
import ocean from "../assets/icons/ocean.png";
import assemble from "../assets/icons/assemble.png";
import omni from "../assets/icons/omni.png";
import bittensor from "../assets/icons/bittensor.png";
import kerneldao from "../assets/icons/kerneldao.png";

import hyperliquid from "../assets/icons/hyperliquid.png";
import jupiter from "../assets/icons/jupiter.png";
import lighter from "../assets/icons/lighter.png";
import walrus from "../assets/icons/walrus.png";
import sentient from "../assets/icons/sentient.png";
import raydium from "../assets/icons/raydium.png";

const tradable = [
  {
    icon: btc,
    name: "Bitcoin",
    price: "GHS 729,506.04",
    change: "↘ 0.05%",
    color: "text-red-400",
  },
  {
    icon: eth,
    name: "Ethereum",
    price: "GHS 21,522.63",
    change: "↗ 1.51%",
    color: "text-green-400",
  },
  {
    icon: tether,
    name: "Tether",
    price: "GHS 10.77",
    change: "↘ 0.01%",
    color: "text-red-400",
  },
  {
    icon: bnb,
    name: "BNB",
    price: "GHS 6,760.14",
    change: "↗ 1.20%",
    color: "text-green-400",
  },
  {
    icon: xrp,
    name: "XRP",
    price: "GHS 14.52",
    change: "↘ 1.26%",
    color: "text-red-400",
  },
  {
    icon: usdc,
    name: "USDC",
    price: "GHS 10.78",
    change: "--",
    color: "text-gray-400",
  },
];

const gainers = [
  {
    icon: freysa,
    name: "Freysa",
    price: "GHS 0.0908",
    change: "↗ 31.77%",
    color: "text-green-400",
  },
  {
    icon: ocean,
    name: "Ocean Protocol",
    price: "GHS 1.23",
    change: "↗ 11.34%",
    color: "text-green-400",
  },
  {
    icon: assemble,
    name: "Assemble AI",
    price: "GHS 0.0820",
    change: "↗ 11.28%",
    color: "text-green-400",
  },
  {
    icon: omni,
    name: "Omni Network",
    price: "GHS 8.68",
    change: "↗ 9.84%",
    color: "text-green-400",
  },
  {
    icon: bittensor,
    name: "Bittensor",
    price: "GHS 2,107.29",
    change: "↗ 9.62%",
    color: "text-green-400",
  },
  {
    icon: kerneldao,
    name: "KernelDAO",
    price: "GHS 0.95",
    change: "↗ 9.33%",
    color: "text-green-400",
  },
];

const newCoins = [
  {
    icon: hyperliquid,
    name: "Hyperliquid",
    price: "GHS 334.71",
    change: "↗ 2.14%",
    color: "text-green-400",
  },
  {
    icon: jupiter,
    name: "Jupiter",
    price: "GHS 1.74",
    change: "↘ 2.34%",
    color: "text-red-400",
  },
  {
    icon: lighter,
    name: "Lighter",
    price: "GHS 10.88",
    change: "↘ 7.23%",
    color: "text-red-400",
  },
  {
    icon: walrus,
    name: "Walrus",
    price: "GHS 0.81",
    change: "↗ 3.79%",
    color: "text-green-400",
  },
  {
    icon: sentient,
    name: "Sentient",
    price: "GHS 0.25",
    change: "↘ 3.05%",
    color: "text-red-400",
  },
  {
    icon: raydium,
    name: "Raydium",
    price: "GHS 6.30",
    change: "↗ 1.39%",
    color: "text-green-400",
  },
];

export default function Explore() {
  const [tab, setTab] = useState("tradable");

  const currentData =
    tab === "tradable" ? tradable : tab === "gainers" ? gainers : newCoins;

  return (
    <section className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="max-w-[560px]">
          <h2 className="text-[34px] leading-[1.05] tracking-[-0.03em] text-black md:text-[48px] lg:text-[56px]">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-gray-600 md:text-[18px]">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </p>

          <button className="mt-7 rounded-full bg-black px-7 py-3 text-[16px] font-semibold text-white transition hover:opacity-90">
            See more assets
          </button>
        </div>

        <div className="rounded-[32px] bg-black p-5 text-white shadow-xl md:p-7 lg:p-9">
          <div className="flex items-center gap-2 overflow-x-auto text-[14px] font-semibold md:gap-4">
            <button
              onClick={() => setTab("tradable")}
              className={`whitespace-nowrap rounded-full px-4 py-2 transition ${
                tab === "tradable" ? "bg-[#1f2430] text-white" : "text-white"
              }`}
            >
              Tradable
            </button>

            <button
              onClick={() => setTab("gainers")}
              className={`whitespace-nowrap rounded-full px-4 py-2 transition ${
                tab === "gainers" ? "bg-[#1f2430] text-white" : "text-white"
              }`}
            >
              Top gainers
            </button>

            <button
              onClick={() => setTab("new")}
              className={`whitespace-nowrap rounded-full px-4 py-2 transition ${
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
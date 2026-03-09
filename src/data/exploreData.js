import graph1 from "../assets/images/graph-1.png";
import graph2 from "../assets/images/graph-2.png";
import graph3 from "../assets/images/graph-3.png";
import graph4 from "../assets/images/graph-4.png";

import btc from "../assets/icons/btc.png";
import eth from "../assets/icons/eth.png";
import tether from "../assets/icons/tether.png";
import bnb from "../assets/icons/bnb.png";
import xrp from "../assets/icons/xrp.png";
import usdc from "../assets/icons/usdc.png";
import solana from "../assets/icons/btc.png";
import tron from "../assets/icons/jupiter.png";

import hypeIcon from "../assets/icons/hyperliquid.png";
import jupiterIcon from "../assets/icons/jupiter.png";
import faiIcon from "../assets/icons/freysa.png";
import flowIcon from "../assets/icons/flow.png";

export const marketStats = [
  {
    title: "Total market cap",
    value: "GHS 24.57T",
    change: "↗ 2.21%",
    changeColor: "text-green-600",
    chart: graph1,
  },
  {
    title: "Trade volume",
    value: "GHS 2.15T",
    change: "↗ 67.01%",
    changeColor: "text-green-600",
    chart: graph2,
  },
  {
    title: "Buy-sell ratio",
    value: "GHS 0.77",
    change: "↗ 0.24%",
    changeColor: "text-green-600",
    chart: graph3,
  },
  {
    title: "BTC dominance",
    value: "60.21%",
    change: "↗ 0.29%",
    changeColor: "text-green-600",
    chart: graph4,
  },
];

export const priceRows = [
  {
    icon: btc,
    name: "Bitcoin",
    symbol: "BTC",
    price: "GHS 740,190.48",
    change: "↗ 2.44%",
    changeColor: "text-green-600",
    mktCap: "GHS 14.8T",
    volume: "GHS 544.0B",
    chart: "orange",
  },
  {
    icon: eth,
    name: "Ethereum",
    symbol: "ETH",
    price: "GHS 21,778.35",
    change: "↗ 4.30%",
    changeColor: "text-green-600",
    mktCap: "GHS 2.6T",
    volume: "GHS 258.4B",
    chart: "blue",
  },
  {
    icon: tether,
    name: "Tether",
    symbol: "USDT",
    price: "GHS 10.79",
    change: "↗ 0.01%",
    changeColor: "text-green-600",
    mktCap: "GHS 2.0T",
    volume: "GHS 991.8B",
    chart: "green",
  },
  {
    icon: bnb,
    name: "BNB",
    symbol: "BNB",
    price: "GHS 6,873.11",
    change: "↗ 3.77%",
    changeColor: "text-green-600",
    mktCap: "GHS 936.0B",
    volume: "GHS 17.5B",
    chart: "yellow",
  },
  {
    icon: xrp,
    name: "XRP",
    symbol: "XRP",
    price: "GHS 14.74",
    change: "↗ 1.43%",
    changeColor: "text-green-600",
    mktCap: "GHS 897.5B",
    volume: "GHS 26.3B",
    chart: "black",
  },
  {
    icon: usdc,
    name: "USDC",
    symbol: "USDC - Earns 3.35% APY",
    price: "GHS 10.78",
    change: "0.00%",
    changeColor: "text-black",
    mktCap: "GHS 838.6B",
    volume: "GHS 138.4B",
    chart: "blue",
  },
  {
    icon: solana,
    name: "Solana",
    symbol: "SOL",
    price: "GHS 921.97",
    change: "↗ 4.74%",
    changeColor: "text-green-600",
    mktCap: "GHS 521.7B",
    volume: "GHS 43.1B",
    chart: "purple",
  },
  {
    icon: tron,
    name: "TRON",
    symbol: "TRX",
    price: "GHS 3.09",
    change: "↘ 1.10%",
    changeColor: "text-red-500",
    mktCap: "GHS 292.7B",
    volume: "GHS 6.4B",
    chart: "red",
  },
];

export const priceFilters = ["All assets", "1D", "GHS", "10 rows"];

export const topMovers = [
  {
    icon: flowIcon,
    name: "FLOW",
    change: "↗ 17.28%",
    price: "GHS 0.52",
  },
  {
    icon: faiIcon,
    name: "FAI",
    change: "↗ 19.66%",
    price: "GHS 0.0878",
  },
];

export const newOnCoinbase = [
  {
    icon: hypeIcon,
    symbol: "HYPE",
    name: "Hyperliquid",
    subtitle: "Added Feb 5",
  },
  {
    icon: jupiterIcon,
    symbol: "JUPITER",
    name: "Jupiter",
    subtitle: "Added Dec 9",
  },
];

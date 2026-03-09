import featuredImage from "../assets/images/featured-article.png";
import cryptoImage from "../assets/images/crypto-basics.png";
import tipsImage from "../assets/images/tips.png";
import advancedImage from "../assets/images/advanced-trading-image.png";
import futuresImage from "../assets/images/futures.png";

import cryptoBasics from "../assets/images/invest-card.png";
import altCoin from "../assets/images/Alt-Coin.png";
import eth from "../assets/images/ethereum.png";
import defi from "../assets/images/defi.png";
import stableCoin from "../assets/images/stablecoin.png";
import glossary from "../assets/images/glossary.png";

import donate from "../assets/images/donate.png";
import wallet from "../assets/images/wallet.png";
import dollarCost from "../assets/images/dollar-cost.png";
import invest from "../assets/images/invest.png";

import technicalAnalysis from "../assets/images/technical-analysis.png";
import futuresMarketData from "../assets/images/futures-market-data.png";
import tradingCharts from "../assets/images/trading-charts.png";
import orderBook from "../assets/images/order-book.png";

import futuresIntro from "../assets/images/futures-intro.png";
import futuresBasics from "../assets/images/futures-basics.png";
import futuresPosition from "../assets/images/futures-position.png";
import futuresStrategies from "../assets/images/futures-strategies.png";

import differenceWallet from "../assets/images/difference-wallet.png";
import setupWallet from "../assets/images/wallet.png";
import addWallet from "../assets/images/add-wallet.png";
import sendWallet from "../assets/images/send-wallet.png";

export const featuredContent = {
  image: featuredImage,
  label: "Video tutorial",
  title: "When is the best time to invest in crypto?",
  description:
    "When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.",
};

export const popularItems = [
  { label: "BEGINNER'S GUIDE", title: "What is cryptocurrency?" },
  { label: "GETTING STARTED", title: "How to earn crypto rewards" },
  {
    label: "GETTING STARTED",
    title: "How to add crypto to your Coinbase Wallet",
  },
  {
    label: "YOUR CRYPTO",
    title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports",
  },
  { label: "GETTING STARTED", title: "Beginner's guide to dapps" },
  {
    label: "MARKET UPDATE",
    title: "Everything you need to know about the first-ever U.S. Bitcoin ETF",
  },
];

export const categories = [
  { title: "Crypto basics", icon: cryptoImage },
  { title: "Tips and tutorials", icon: tipsImage },
  { title: "Advanced trading", icon: advancedImage },
  { title: "Futures", icon: futuresImage },
];

export const topicPrimaryCards = [
  {
    image: cryptoBasics,
    label: "BEGINNER'S GUIDE",
    title: "What is Bitcoin?",
    description:
      "Bitcoin is the world's first widely adopted cryptocurrency - it allows for secure and seamless peer-to-peer transactions on the internet.",
  },
  {
    image: altCoin,
    label: "BEGINNER'S GUIDE",
    title: "Guide to DeFi tokens and altcoins",
    description: "From Aave to Zcash, decide what to trade with our beginner's guide",
  },
];

export const topicSecondaryCards = [
  { image: eth, label: "BEGINNER'S GUIDE", title: "What is Ethereum?" },
  { image: defi, label: "KEY TERM", title: "What is DeFi" },
  { image: stableCoin, label: "BEGINNER'S GUIDE", title: "What is a stablecoion?" },
  {
    image: glossary,
    label: "GLOSSARY",
    title: "Don't let FUD give you FOMO or you'll end up REKT - crypto slang, explained",
  },
];

export const tagCloud = [
  "Bitcoin",
  "Blockchain",
  "Cardano",
  "Crypto wallet",
  "DeFi",
  "Ethereum",
  "Fork",
  "Inflation",
  "Market cap",
  "NFT",
  "Private key",
  "Protocol",
  "Smart contract",
  "Token",
  "Volatility memecoin",
];

export const tipsCards = [
  { image: donate, label: "GETTING STARTED", title: "How to donate crypto" },
  { image: wallet, label: "VIDEO TURORIAL", title: "How to set up a crypto wallet" },
  {
    image: dollarCost,
    label: "VIDEO TUTORIAL",
    title: "When is the best time to invest in crypto?",
  },
  {
    image: invest,
    label: "YOUR CRYPTO",
    title: "How to invest in crypto via your retirement account",
  },
];

export const advancedTradingCards = [
  { image: technicalAnalysis, label: "KEY TERM", title: "What is technical analysis?" },
  {
    image: futuresMarketData,
    label: "ADVANCED GUIDE",
    title: "How can I use crypto futures market data for spot trading?",
  },
  { image: tradingCharts, label: "ADVANCED GUIDE", title: "How to read advanced trading charts" },
  { image: orderBook, label: "KEY TERM", title: "What is an order book?" },
];

export const futuresCards = [
  { image: futuresIntro, label: "", title: "Futures: Introductions and origins" },
  { image: futuresBasics, label: "", title: "Futures fundamentals: Understanding the basics" },
  {
    image: futuresPosition,
    label: "",
    title: "Opening, holding, and closing a position in the futures market",
  },
  {
    image: futuresStrategies,
    label: "",
    title: "Trading strategies: Speculating, hedging, and spreading in the futures market",
  },
];

export const walletArticleCards = [
  {
    image: differenceWallet,
    label: "",
    title: "What's the difference between Coinbase and Coinbase Wallet?",
    description:
      "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered",
  },
  {
    image: setupWallet,
    label: "VIDEO TUTORIAL",
    title: "How to set up a crypto wallet",
    description: "Learn how to setup and get started with a crypto wallet.",
  },
  {
    image: addWallet,
    label: "GETTING STARTED",
    title: "How to add crypto to your Coinbase Wallet",
    description: "A quick guide on how to add crypto to your Coinbase self-custody wallet.",
  },
  {
    image: sendWallet,
    label: "",
    title: "How to send or receive crypto using Coinbase Wallet",
    description:
      "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.",
  },
];

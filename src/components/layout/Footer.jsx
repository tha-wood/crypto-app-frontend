import {
  Globe,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
} from "lucide-react";

import logo from "../../assets/images/logo.png";

const footerColumns = [
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Affiliates",
      "Blog",
      "Press",
      "Security",
      "Investors",
      "Vendors",
      "Legal & privacy",
      "Cookie policy",
      "Cookie preferences",
      "Digital Asset Disclosures",
    ],
  },
  {
    title: "Learn",
    links: [
      "Explore",
      "Market statistics",
      "Coinbase Bytes newsletter",
      "Crypto basics",
      "Tips & tutorials",
      "Crypto glossary",
      "Market updates",
      "What is Bitcoin?",
      "What is crypto?",
      "What is a blockchain?",
      "How to set up a crypto wallet?",
      "How to send crypto?",
      "Taxes",
    ],
  },
  {
    title: "Individuals",
    links: [
      "Buy & sell",
      "Earn free crypto",
      "Base App",
      "Coinbase One",
      "Debit Card",
    ],
  },
  {
    title: "Businesses",
    links: [
      "Asset Listings",
      "Coinbase Business",
      "Payments",
      "Commerce",
      "Token Manager",
    ],
  },
  {
    title: "Institutions",
    links: [
      "Prime",
      "Staking",
      "Exchange",
      "International Exchange",
      "Derivatives Exchange",
      "Verified Pools",
    ],
  },
  {
    title: "Developers",
    links: [
      "Developer Platform",
      "Base",
      "Server Wallets",
      "Embedded Wallets",
      "Base Accounts (Smart Wallets)",
      "Onramp & Offramp",
      "Trade API",
      "Paymaster",
      "OnchainKit",
      "Data API",
      "Node",
      "AgentKit",
      "Exchange API",
      "Prime API",
      "Derivatives API",
    ],
  },
  {
    title: "Support",
    links: [
      "Help center",
      "Contact us",
      "Create account",
      "ID verification",
      "Account information",
      "Payment methods",
      "Account access",
      "Supported crypto",
      "Status",
    ],
  },
  {
    title: "Asset prices",
    links: [
      "Bitcoin price",
      "Ethereum price",
      "Solana price",
      "XRP price",
    ],
  },
  {
    title: "Stock prices",
    links: [
      "NVIDIA price",
      "Apple price",
      "Microsoft price",
      "Amazon price",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f8f9fb] mt-24">
      <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 lg:px-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10">

          {/* Logo Column */}
          <div className="flex lg:items-start">
            <img
              src={logo}
              alt="Coinbase logo"
              className="h-12 w-auto lg:h-16"
            />
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-16">

            {footerColumns.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 text-[18px] font-semibold text-black">
                  {section.title}
                </h3>

                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[16px] text-gray-600 hover:text-black"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex items-center gap-6 text-gray-600">
          <a href="#" className="hover:text-black">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-black">
            <Linkedin size={18} />
          </a>
          <a href="#" className="hover:text-black">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-black">
            <Music2 size={18} />
          </a>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 text-[15px] text-gray-600 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 Coinbase</span>
            <span>•</span>
            <a href="#" className="hover:text-black">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-black">Terms</a>
          </div>

          <div className="flex items-center gap-2">
            <Globe size={16} />
            <a href="#" className="hover:text-black">Global</a>
            <span>•</span>
            <a href="#" className="hover:text-black">English</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
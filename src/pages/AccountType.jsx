import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const accountTypes = [
  {
    title: "Personal",
    description: "Trade crypto as an individual.",
    icon: "👤",
    type: "personal",
  },
  {
    title: "Business",
    description: "Manage teams and portfolios, accept crypto payments, access APIs, and more.",
    icon: "👥",
    type: "business",
  },
  {
    title: "Developer",
    description: "Build onchain using developer tooling.",
    icon: "🔷",
    type: "developer",
  },
];

export default function AccountType() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-6 pt-6">
        <Link to="/">
          <img src={logo} alt="Coinbase logo" className="h-10 w-auto" />
        </Link>
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-xl items-center px-6 py-10">
        <div className="w-full">
          <h1 className="mb-8 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            What kind of account are you creating?
          </h1>

          <div className="space-y-5">
            {accountTypes.map((item) => (
              <Link
                key={item.title}
                to="/signup"
                state={{ accountType: item.type }}
                className="flex items-center gap-5 rounded-2xl border border-gray-800 bg-black px-6 py-6 transition hover:border-gray-700 hover:bg-[#0b0b0b]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#111827] text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-1 max-w-md text-lg leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
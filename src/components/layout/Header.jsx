import { Globe, Menu, Search } from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Coinbase logo" className="h-9 w-auto" />

          <nav className="hidden lg:flex items-center gap-10 text-[18px] font-medium text-black">
            <a href="#" className="hover:text-gray-600">Cryptocurrencies</a>
            <a href="#" className="hover:text-gray-600">Individuals</a>
            <a href="#" className="hover:text-gray-600">Businesses</a>
            <a href="#" className="hover:text-gray-600">Institutions</a>
            <a href="#" className="hover:text-gray-600">Developers</a>
            <a href="#" className="hover:text-gray-600">Company</a>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <Search size={22} strokeWidth={2.2} />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <Globe size={22} strokeWidth={2.2} />
          </button>

          <button className="rounded-full bg-gray-100 px-8 py-3 text-[18px] font-semibold hover:bg-gray-200">
            Sign in
          </button>

          <button className="rounded-full bg-blue-600 px-8 py-3 text-[18px] font-semibold text-white hover:bg-blue-700">
            Sign up
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
            <Search size={20} strokeWidth={2.2} />
          </button>

          <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">
            Sign up
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
            <Menu size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </header>
  );
}
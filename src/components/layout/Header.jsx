import { Link } from "react-router-dom";
import { Globe, Menu, Search } from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-2">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-8">
          <img src={logo} alt="Coinbase logo" className="h-12 w-auto" />

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8 text-[18px] font-semibold">
            <Link to="#">Cryptocurrencies</Link>
            <Link to="#">Individuals</Link>
            <Link to="#">Businesses</Link>
            <Link to="#">Institutions</Link>
            <Link to="#">Developers</Link>
            <Link to="#">Company</Link>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Search */}
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <Search size={22} />
          </button>

          {/* Globe */}
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <Globe size={22} />
          </button>

          {/* Sign in */}
          <Link
            to="/signin"
            className="rounded-full bg-gray-100 px-7 py-3 text-[16px] font-semibold hover:bg-gray-200"
          >
            Sign in
          </Link>

          {/* Sign up */}
          <Link
            to="/account-type"
            className="rounded-full bg-blue-600 px-7 py-3 text-[16px] font-semibold text-white hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex items-center gap-2 lg:hidden">

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
            <Search size={20} />
          </button>

          <Link
            to="/account-type"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Sign up
          </Link>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </header>
  );
}
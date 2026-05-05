import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Menu, Search, X, ChevronRight } from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: "Cryptocurrencies", to: "/explore" },
    { label: "Individuals", to: "/learn" },
    { label: "Businesses", to: "#" },
    { label: "Institutions", to: "#" },
    { label: "Developers", to: "#" },
    { label: "Company", to: "#" },
  ];

  return (
    <header className="fixed top-10 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Coinbase logo" className="h-12 w-auto" />
          </Link>
          {/* NAV LINKS (Desktop) */}
          <nav className="hidden lg:flex items-center gap-2 text-[16px] font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.to} 
                className="hover:bg-slate-50 rounded-3xl px-4 py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Search size={20} />
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Globe size={20} />
          </button>
          <Link
            to="/signin"
            className="rounded-full bg-slate-50 px-6 py-3 text-[16px] font-semibold hover:bg-gray-200 transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/account-type"
            className="rounded-full bg-blue-600 px-6 py-3 text-[16px] font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Sign up
          </Link>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 lg:hidden">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <Search size={18} />
          </button>
          <Link
            to="/account-type"
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white uppercase tracking-wide"
          >
            Get started
          </Link>
          <button 
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[120px] z-[60] bg-white flex flex-col animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-gray-500">Menu</span>
            <button onClick={toggleMenu} className="text-gray-900">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto px-6 py-4 bg-white">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    onClick={toggleMenu}
                    className="flex items-center justify-between py-4 text-[21px] font-bold text-gray-900 border-b border-gray-50 last:border-b-0"
                  >
                    {link.label}
                    <ChevronRight size={20} className="text-gray-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 space-y-4 border-t border-gray-100 bg-white pb-20">
            <Link 
              to="/account-type"
              onClick={toggleMenu}
              className="flex h-14 w-full items-center justify-center rounded-xl bg-blue-600 text-[16px] font-bold text-white shadow-lg"
            >
              Get started
            </Link>
            <Link 
              to="/signin"
              onClick={toggleMenu}
              className="flex h-14 w-full items-center justify-center rounded-xl bg-gray-100 text-[16px] font-bold text-gray-900"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
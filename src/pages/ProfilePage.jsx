import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import {
  Home,
  Briefcase,
  TrendingUp,
  Star,
  CircleDollarSign,
  List,
  User,
  Settings,
  HelpCircle,
  PlusCircle,
  MinusCircle,
  ArrowUpRight,
  ArrowDownLeft,
  Repeat,
  LogOut,
  ChevronLeft,
  Eye,
} from "lucide-react";

/* ── sidebar menu config ─────────────────────────── */
const mainMenu = [
  { key: "dashboard",    label: "Dashboard",     icon: Home },
  { key: "assets",       label: "Assets",        icon: Briefcase },
  { key: "trade",        label: "Trade",         icon: TrendingUp },
  { key: "watchlist",    label: "Watchlist",     icon: Star },
  { key: "earn",         label: "Earn",          icon: CircleDollarSign, badge: "Soon" },
  { key: "transactions", label: "Transactions",  icon: List },
];

const accountMenu = [
  { key: "profile",  label: "Profile",  icon: User },
  { key: "settings", label: "Settings", icon: Settings },
  { key: "help",     label: "Help",     icon: HelpCircle, badge: "Soon" },
];

/* ── quick‑action buttons (dashboard) ────────────── */
const quickActions = [
  { label: "Buy",     icon: PlusCircle },
  { label: "Sell",    icon: MinusCircle },
  { label: "Send",    icon: ArrowUpRight },
  { label: "Receive", icon: ArrowDownLeft },
  { label: "Convert", icon: Repeat },
];

/* ── time‑period pills ───────────────────────────── */
const periods = ["1H", "24H", "7D", "1M", "1Y", "ALL"];

/* ================================================================= */

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activePeriod, setActivePeriod] = useState("24H");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signin");
        return;
      }

      try {
        const { data } = await api.get("/profile");
        setUser(data);
        setLoading(false);
      } catch (err) {
        console.error("Profile fetch failed:", err);
        navigate("/signin");
      }
    };
    fetchProfile();
  }, [navigate]);

  /* ── loading state ──────────────────────────────── */
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f5f7fa]">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
      </div>
    );
  }

  /* ── helpers ─────────────────────────────────────── */
  const initials = user.name
    ? user.name.charAt(0).toUpperCase()
    : "?";

  const SidebarItem = ({ item }) => {
    const Icon = item.icon;
    const active = activeTab === item.key;
    return (
      <button
        onClick={() => setActiveTab(item.key)}
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[14px] font-medium transition-all active:scale-95 ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon size={18} className="shrink-0" />
        <span className="hidden lg:block">{item.label}</span>
        {item.badge && (
          <span className="ml-auto hidden rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-400 lg:block">
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  /* ── content panels ─────────────────────────────── */
  const DashboardContent = () => (
    <>
      {/* balance card */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              Your balance <Eye size={14} />
            </div>
            <h2 className="mt-1 text-3xl sm:text-4xl font-bold">$0.00</h2>
            <p className="mt-1 text-sm font-medium text-green-600">
              ▲ $0.00 (0.00%) <span className="text-gray-400">All time</span>
            </p>
          </div>

          {/* period pills */}
          <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all active:scale-90 ${
                  activePeriod === p
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* fake chart line */}
        <div className="mt-8 flex items-end" style={{ height: 60 }}>
          <div className="h-[2px] w-full rounded bg-blue-600 opacity-20" />
        </div>
      </div>

      {/* quick actions */}
      <div className="mt-8 grid grid-cols-3 sm:flex sm:justify-center gap-4 sm:gap-10">
        {quickActions.map((a) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              className="flex flex-col items-center gap-2 text-gray-700 transition-all active:scale-90 group"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 group-hover:bg-blue-50 transition-all">
                <Icon size={18} />
              </div>
              <span className="text-[11px] sm:text-sm font-medium">{a.label}</span>
            </button>
          );
        })}
      </div>

      {/* assets table */}
      <AssetsTable />
    </>
  );

  const AssetsContent = () => (
    <>
      <h2 className="text-2xl font-bold">Assets</h2>

      {/* stat cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Total Invested
          </p>
          <p className="mt-1 text-2xl font-bold">$0.00</p>
        </div>
        <div className="rounded-xl border-l-4 border-l-green-400 border border-gray-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Total P&L
          </p>
          <p className="mt-1 text-2xl font-bold">$0.00</p>
        </div>
      </div>

      <AssetsTable />
    </>
  );

  const ProfileContent = () => (
    <>
      <h2 className="text-2xl font-bold">Profile</h2>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shrink-0">
            {initials}
          </div>
          <div>
            <p className="text-xl font-semibold">{user.name}</p>
            <p className="text-gray-500 text-sm sm:text-base">{user.email}</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between border-b border-gray-100 pb-3">
            <span className="text-gray-500 text-sm">Full Name</span>
            <span className="font-medium text-sm">{user.name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-3">
            <span className="text-gray-500 text-sm">Email</span>
            <span className="font-medium text-sm text-right break-all ml-4">{user.email}</span>
          </div>
          <div className="flex justify-between pb-3">
            <span className="text-gray-500 text-sm">Account ID</span>
            <span className="font-mono text-[10px] sm:text-sm text-gray-400">{user._id}</span>
          </div>
        </div>
      </div>
    </>
  );

  const AssetsTable = () => (
    <div className="mt-8 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold">My assets</h3>
        <div className="flex gap-2">
          <select className="flex-1 sm:flex-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
            <option>Value</option>
          </select>
          <select className="flex-1 sm:flex-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
            <option>Owned</option>
          </select>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[600px]">
          {/* table header */}
          <div className="grid grid-cols-5 border-b border-gray-100 pb-2 text-sm font-medium text-gray-400">
            <span>Asset</span>
            <span className="text-right">Amount</span>
            <span className="text-right">Price</span>
            <span className="text-right">Value</span>
            <span className="text-right">24h</span>
          </div>

          {/* empty state */}
          <p className="py-10 text-center text-gray-400">No assets found.</p>
        </div>
      </div>
    </div>
  );

  /* ── which panel to render ──────────────────────── */
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":    return <DashboardContent />;
      case "assets":       return <AssetsContent />;
      case "watchlist":    return <WatchlistContent />;
      case "profile":      return <ProfileContent />;
      case "trade":        return <PlaceholderContent title="Trade" />;
      case "earn":         return <PlaceholderContent title="Earn" />;
      case "transactions": return <PlaceholderContent title="Transactions" />;
      case "settings":     return <PlaceholderContent title="Settings" />;
      case "help":         return <PlaceholderContent title="Help" />;
      default:             return <DashboardContent />;
    }
  };

  /* ── RENDER ─────────────────────────────────────── */
  return (
    <div className="flex h-screen bg-[#f5f7fa]">
      {/* ─── SIDEBAR ─────────────────────────────── */}
      <aside className="flex w-16 lg:w-[220px] shrink-0 flex-col border-r border-gray-200 bg-white transition-all duration-300">
        {/* logo row */}
        <div className="flex items-center justify-center lg:justify-between px-2 lg:px-5 py-4">
          <span className="hidden lg:block text-lg font-bold text-blue-600">Crypto App</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 lg:hidden">
            <span className="text-white font-bold">C</span>
          </div>
          <ChevronLeft size={18} className="text-gray-400 hidden lg:block" />
        </div>

        {/* main nav */}
        <nav className="flex-1 overflow-y-auto px-2 lg:px-3">
          <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400 hidden lg:block">
            Main
          </p>
          <div className="space-y-1">
            {mainMenu.map((item) => (
              <SidebarItem key={item.key} item={item} />
            ))}
          </div>

          <p className="mb-1 mt-4 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400 hidden lg:block">
            Account
          </p>
          <div className="space-y-1">
            {accountMenu.map((item) => (
              <SidebarItem key={item.key} item={item} />
            ))}
          </div>
        </nav>

        {/* bottom user card */}
        <div className="mt-auto border-t border-gray-100 px-2 lg:px-4 py-3">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              {initials}
            </div>
            <div className="hidden lg:block min-w-0">
              <p className="truncate text-xs font-semibold">{user.name}</p>
              <p className="truncate text-[10px] text-gray-400">{user.email}</p>
            </div>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
            className="mt-3 flex w-full items-center justify-center lg:justify-start gap-2 text-xs font-medium text-gray-500 transition-colors hover:text-red-600"
          >
            <LogOut size={14} className="shrink-0" />
            <span className="hidden lg:block">Log out</span>
          </button>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ────────────────────────── */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
        <div className="mx-auto max-w-[1000px]">{renderContent()}</div>
      </main>
    </div>
  );
}

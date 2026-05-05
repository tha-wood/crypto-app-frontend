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
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="text-lg font-medium text-gray-500">Loading your dashboard…</p>
        </div>
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
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon size={18} />
        <span>{item.label}</span>
        {item.badge && (
          <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-400">
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
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              Your balance <Eye size={14} />
            </div>
            <h2 className="mt-1 text-4xl font-bold">$0.00</h2>
            <p className="mt-1 text-sm font-medium text-green-600">
              ▲ $0.00 (0.00%) <span className="text-gray-400">All time</span>
            </p>
          </div>

          {/* period pills */}
          <div className="flex gap-1">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
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
        <div className="mt-8 flex items-end" style={{ height: 80 }}>
          <div className="h-[2px] w-full rounded bg-blue-600" />
        </div>
      </div>

      {/* quick actions */}
      <div className="mt-8 flex justify-center gap-10">
        {quickActions.map((a) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              className="flex flex-col items-center gap-2 text-gray-700 transition-colors hover:text-blue-600"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600">
                <Icon size={20} />
              </div>
              <span className="text-sm font-medium">{a.label}</span>
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
      <div className="mt-6 grid grid-cols-2 gap-4">
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

  const WatchlistContent = () => (
    <>
      <h2 className="text-2xl font-bold">Watchlist</h2>

      <div className="mt-12 flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-20">
        <Star size={40} className="text-gray-300" />
        <p className="mt-4 text-lg font-medium text-gray-600">
          No assets on your watchlist
        </p>
        <button
          onClick={() => navigate("/explore")}
          className="mt-2 text-blue-600 hover:underline"
        >
          Visit Markets to add assets
        </button>
      </div>
    </>
  );

  const ProfileContent = () => (
    <>
      <h2 className="text-2xl font-bold">Profile</h2>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
            {initials}
          </div>
          <div>
            <p className="text-xl font-semibold">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between border-b border-gray-100 pb-3">
            <span className="text-gray-500">Full Name</span>
            <span className="font-medium">{user.name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-3">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">{user.email}</span>
          </div>
          <div className="flex justify-between pb-3">
            <span className="text-gray-500">Account ID</span>
            <span className="font-mono text-sm text-gray-400">{user._id}</span>
          </div>
        </div>
      </div>
    </>
  );

  const PlaceholderContent = ({ title }) => (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-12 flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-20 text-gray-400">
        <p className="text-lg">Coming soon</p>
      </div>
    </>
  );

  const AssetsTable = () => (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">My assets</h3>
        <div className="flex gap-2">
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
            <option>Value</option>
          </select>
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
            <option>Owned</option>
          </select>
        </div>
      </div>

      {/* table header */}
      <div className="mt-4 grid grid-cols-5 border-b border-gray-100 pb-2 text-sm font-medium text-gray-400">
        <span>Asset</span>
        <span className="text-right">Amount</span>
        <span className="text-right">Price</span>
        <span className="text-right">Value</span>
        <span className="text-right">24h</span>
      </div>

      {/* empty state */}
      <p className="py-10 text-center text-gray-400">No assets found.</p>
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
      <aside className="flex w-[220px] shrink-0 flex-col border-r border-gray-200 bg-white">
        {/* logo row */}
        <div className="flex items-center justify-between px-5 py-4">
          <span className="text-lg font-bold text-blue-600">Crypto App</span>
          <ChevronLeft size={18} className="text-gray-400" />
        </div>

        {/* main nav */}
        <nav className="flex-1 overflow-y-auto px-3">
          <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Main
          </p>
          <div className="space-y-0">
            {mainMenu.map((item) => (
              <SidebarItem key={item.key} item={item} />
            ))}
          </div>

          <p className="mb-1 mt-4 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Account
          </p>
          <div className="space-y-0">
            {accountMenu.map((item) => (
              <SidebarItem key={item.key} item={item} />
            ))}
          </div>
        </nav>

        {/* bottom user card */}
        <div className="mt-auto border-t border-gray-100 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">{user.name}</p>
              <p className="truncate text-[10px] text-gray-400">{user.email}</p>
            </div>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
            className="mt-2 flex w-full items-center gap-2 text-xs font-medium text-gray-500 transition-colors hover:text-red-600"
          >
            <LogOut size={14} />
            Log out
          </button>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ────────────────────────── */}
      <main className="flex-1 overflow-y-auto px-8 py-8">
        <div className="mx-auto max-w-[900px]">{renderContent()}</div>
      </main>
    </div>
  );
}

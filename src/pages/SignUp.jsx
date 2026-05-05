import { Apple, Eye, EyeOff, Loader2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import api from "../api";

export default function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const accountType = location.state?.accountType || "personal";
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Using GET with query parameters as strictly specified in the README
      const { data } = await api.get("/register", {
        params: { name, email, password }
      });
      console.log("Registration success, received data:", data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } else {
        navigate("/signin");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo */}
      <div className="px-8 pt-8">
        <Link to="/">
          <img
            src={logo}
            alt="Coinbase logo"
            className="h-8 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-lg flex-col px-8 py-16">
        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Create your account
        </h1>
        <p className="mb-8 text-center text-gray-400">
          Access all that Coinbase has to offer with a single account.
        </p>

        <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-[#0052ff]">
          {accountType} ACCOUNT
        </p>

        {error && <p className="mb-4 text-center text-red-500">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-10 w-full rounded-lg border border-[#333] bg-transparent px-4 text-lg focus:border-[#0052ff] outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 w-full rounded-lg border border-[#333] bg-transparent px-4 text-lg focus:border-[#0052ff] outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-10 w-full rounded-lg border border-[#333] bg-transparent px-4 pr-12 text-lg focus:border-[#0052ff] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="mt-2 text-xs text-red-400 font-medium">Demo app – do not use your real password</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-15 w-full rounded-full bg-[#0052ff] text-lg font-semibold text-white active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Create account"}
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          <button className="flex h-13 w-full items-center rounded-full bg-[#22252d] px-6 text-lg font-semibold text-white active:scale-[0.98] transition-all">
            <span className="w-8 text-2xl font-bold">G</span>
            <span className="flex-1 text-center pr-8">Sign up with Google</span>
          </button>

          <button className="flex h-13 w-full items-center rounded-full bg-[#22252d] px-6 text-lg font-semibold text-white active:scale-[0.98] transition-all">
            <span className="w-8">
              <Apple size={22} fill="currentColor" />
            </span>
            <span className="flex-1 text-center pr-8">Sign up with Apple</span>
          </button>
        </div>

        <p className="mt-10 text-center text-lg font-semibold md:text-xl">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>

        <p className="mt-8 text-center text-sm leading-6 text-gray-400">
          By creating an account you certify that you are over the age of 18
          and agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Cookie Policy</a>.
        </p>
      </div>
    </div>
  );
}
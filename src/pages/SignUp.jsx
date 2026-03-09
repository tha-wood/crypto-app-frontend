import { Apple } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function SignUp() {
  const location = useLocation();
  const accountType = location.state?.accountType || "personal";

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

      {/* Content */}
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[500px] items-center px-6 py-10">
        <div className="w-full">
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
            Create your account
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-400 md:text-xl">
            Access all that Coinbase has to offer with a single account.
          </p>

          <p className="mt-4 text-sm uppercase tracking-wide text-blue-500">
            {accountType} account
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email address"
                className="h-14 w-full rounded-lg border border-gray-700 bg-black px-5 text-lg text-white outline-none placeholder:text-gray-500 focus:border-blue-500 md:h-16"
              />
            </div>

            <button
              type="submit"
              className="h-13 w-full rounded-full bg-[#31467b] text-lg font-semibold text-black md:h-16 md:text-xl"
            >
              Continue
            </button>
          </form>

          <div className="my-6 flex items-center gap-4 text-sm text-gray-400">
            <div className="h-px flex-1 bg-gray-800" />
            <span>OR</span>
            <div className="h-px flex-1 bg-gray-800" />
          </div>

          <div className="space-y-4">
            <button className="flex h-13 w-full items-center rounded-full bg-[#22252d] px-6 text-lg font-semibold text-white md:h-16 md:text-xl">
              <span className="w-8 text-2xl font-bold">G</span>
              <span className="flex-1 text-center pr-8">Sign up with Google</span>
            </button>

            <button className="flex h-13 w-full items-center rounded-full bg-[#22252d] px-6 text-lg font-semibold text-white md:h-16 md:text-xl">
              <span className="w-8">
                <Apple size={22} fill="currentColor" />
              </span>
              <span className="flex-1 text-center pr-8">Sign up with Apple</span>
            </button>
          </div>

          <p className="mt-8 text-center text-lg font-semibold md:text-xl">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>

          <p className="mt-8 text-center text-sm leading-6 text-gray-400">
            By creating an account you certify that you are over the age of 18
            and agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Cookie Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
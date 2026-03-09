import { Apple, CircleUserRound } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-6 pt-6">
        <img src={logo} alt="Coinbase logo" className="h-10 w-auto" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center px-6 py-10">
        <div className="w-full">
          <h1 className="mb-10 text-4xl font-semibold tracking-[-0.03em]">
            Sign in to Coinbase
          </h1>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="h-16 w-full rounded-2xl border border-blue-500 bg-black px-5 text-xl text-white outline-none placeholder:text-gray-500 focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="h-16 w-full rounded-full bg-[#2f467d] text-lg font-semibold text-black"
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
            <button className="flex h-16 w-full items-center justify-center rounded-full bg-[#22252d] px-5 text-lg font-semibold text-white">
              <span className="mr-auto">
                <CircleUserRound size={22} />
              </span>
              <span className="mr-auto">Sign in with Passkey</span>
            </button>

            <button className="flex h-16 w-full items-center justify-center rounded-full bg-[#22252d] px-5 text-lg font-semibold text-white">
              <span className="mr-auto text-3xl font-bold">G</span>
              <span className="mr-auto">Sign in with Google</span>
            </button>

            <button className="flex h-16 w-full items-center justify-center rounded-full bg-[#22252d] px-5 text-lg font-semibold text-white">
              <span className="mr-auto">
                <Apple size={22} fill="currentColor" />
              </span>
              <span className="mr-auto">Sign in with Apple</span>
            </button>
          </div>

          <p className="mt-10 text-center text-xl font-semibold">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>

          <p className="mt-10 text-center text-md leading-8 text-gray-400">
            Not your device? Use a private window. See
            <br />
            our <a href="#" className="underline">Privacy Policy</a> for more info.
          </p>
          <p className="mt-10 text-center text-md leading-8 text-blue-500">
            Cancel Signing in
          </p>
        </div>
      </div>
    </div>
  );
}
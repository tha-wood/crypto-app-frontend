import hero from "../assets/images/Hero.png";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-1 lg:order-2">
              <h1 className="max-w-[620px] text-[34px] leading-[1] tracking-[-0.03em] text-black md:text-[52px] lg:text-[88px] lg:leading-[0.95] lg:tracking-[-0.04em]">
                The future of finance is here.
              </h1>

              <p className="mt-4 max-w-[560px] text-[16px] leading-6 text-black md:text-[20px] md:leading-8 lg:mt-6 lg:text-[22px] lg:leading-8">
                Trade crypto and more on a platform you can trust.
              </p>

              <div className="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:items-center">
                <input
                  type="email"
                  placeholder="satoshi@nakamoto.com"
                  className="h-14 w-full rounded-xl border border-gray-300 px-5 text-[16px] outline-none placeholder:text-gray-500 focus:border-gray-400 md:h-16 md:max-w-[430px] md:text-[18px]"
                />

                <button className="h-14 rounded-full bg-blue-600 px-8 text-[18px] font-semibold text-white hover:bg-blue-700 md:h-16 md:px-12 md:text-[20px]">
                  Sign up
                </button>
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-[28px] md:rounded-[36px]">
                <img
                  src={hero}
                  alt="Coinbase hero"
                  className="w-full rounded-[28px] object-cover md:rounded-[36px]"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
import { tipsCards } from "../../../data/learnData";



export default function Tips({ title, subtitle, buttonText }) {
  return (
    <section className="border-b border-gray-200 px-4 py-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="text-[44px] font-semibold leading-none tracking-[-0.03em] text-black md:text-[64px]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[20px] leading-8 text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {tipsCards.map((card, index) => (
            <article key={`${card.title}-${index}`}>
              <div className="overflow-hidden bg-[#c8d3d3]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover"
                />
              </div>

              <p className="mt-5 text-[14px] font-semibold tracking-wide text-gray-500 uppercase">
                {card.label}
              </p>

              <h3 className="mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-black">
                {card.title}
              </h3>

              {card.description && (
                <p className="mt-4 text-[18px] leading-8 text-black">
                  {card.description}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button className="rounded-md bg-[#1652f0] px-10 py-4 text-[18px] font-semibold text-white">
            {buttonText} →
          </button>
        </div>
      </div>
    </section>
  );
}
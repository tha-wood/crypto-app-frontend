import { featuredContent, popularItems } from "../../../data/learnData";

export default function FeaturedSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-[22px] font-semibold text-black">Featured</h2>

          <div className="mt-8 overflow-hidden rounded-none bg-[#c8d3d3]">
            <img
              src={featuredContent.image}
              alt="Featured article"
              className="w-full object-cover"
            />
          </div>

          <p className="mt-5 text-[14px] font-semibold tracking-wide text-gray-500 uppercase">
            {featuredContent.label}
          </p>

          <h3 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-black">
            {featuredContent.title}
          </h3>

          <p className="mt-4 max-w-[900px] text-[18px] leading-8 text-black">
            {featuredContent.description}
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-black">Popular</h2>

          <div className="mt-8 space-y-8">
            {popularItems.map((item) => (
              <article key={item.title}>
                <p className="text-[14px] font-semibold tracking-wide text-gray-500 uppercase">
                  {item.label}
                </p>

                <h3 className="mt-3 text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-black">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
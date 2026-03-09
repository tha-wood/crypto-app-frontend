import CryptoImage from "../../assets/images/crypto-basics.png";
import TipsImage from "../../assets/images/tips.png";
import AdvancedImage from "../../assets/images/advanced-trading-image.png";
import FuturesImage from "../../assets/images/futures.png";

const categories = [
  { title: "Crypto basics", icon:CryptoImage},
  { title: "Tips and tutorials", icon: TipsImage },
  { title: "Advanced trading", icon: AdvancedImage },
  { title: "Futures", icon: FuturesImage },
];

export default function CategoryStrip() {
  return (
    <section className="border-b border-gray-200 px-4 py-12 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((item) => (
          <div key={item.title} className="flex items-center gap-5">
            <img src={item.icon} alt={item.title} className="h-14 w-14 object-contain" />
            <div>
              <h3 className="text-[20px] font-semibold text-black">
                {item.title}
              </h3>
              <button className="mt-2 text-[16px] text-blue-600">
                See more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
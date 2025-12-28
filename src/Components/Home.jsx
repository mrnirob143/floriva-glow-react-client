import React, { useContext, useEffect, useState } from "react";
import { FlorivaContext } from "./Context";


/* ================= SLIDER DATA ================= */
const slides = [
  {
    id: 1,
    title: "Glow Naturally",
    subtitle: "Premium skincare crafted for radiant, healthy skin",
    image: "../../src/assets/download.jpg",
  },
  {
    id: 2,
    title: "Deep Hydration",
    subtitle: "Long-lasting moisture for every skin type",
    image: "../../src/assets/download (5).jpg",
  },
  {
    id: 3,
    title: "Daily Protection",
    subtitle: "Advanced SPF care against harsh UV rays",
    image: "../../src/assets/download (10).jpg",
  },
];

const Home = () => {
  const { MyName } = useContext(FlorivaContext);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden">

      {/* ================= HERO SLIDER ================= */}
      <section className="relative h-[80vh] sm:h-[85vh] md:h-[92vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1200ms]
              ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}
            `}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={slide.title}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-xl text-white">
                  <span className="uppercase tracking-widest text-xs sm:text-sm text-red-400">
                    {MyName || "Floriva Glow"}
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mt-4 mb-4 sm:mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition">
                      Shop Collection
                    </button>
                    <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 w-6 sm:w-10 rounded-full transition ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="bg-white py-10 sm:py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["100%", "Cruelty Free"],
            ["50K+", "Happy Customers"],
            ["24/7", "Support"],
            ["Derm-Tested", "Safe Formula"],
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700">
                {item[0]}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-red-900 mb-4">
            Why Floriva Glow
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Science-backed skincare blended with nature’s finest ingredients.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {[
            ["Clean Beauty", "No parabens, sulfates or harsh chemicals"],
            ["Dermatologist Approved", "Clinically tested & proven"],
            ["Eco Conscious", "Sustainable & ethical sourcing"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">
                {item[0]}
              </h3>
              <p className="text-gray-600 text-sm">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BEST SELLERS ================= */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-red-900">
            Best Sellers
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {[
            ["Vitamin C Serum", "৳899", "../../src/assets/download.jpg"],
            ["Hydrating Cream", "৳1099", "../../src/assets/download (5).jpg"],
            ["Gentle Cleanser", "৳499", "../../src/assets/images (1).jpg"],
            ["SPF 50 Sunscreen", "৳699", "../../src/assets/download (10).jpg"],
          ].map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img src={p[2]} className="h-40 sm:h-48 w-full object-contain mb-4" />
              <h3 className="font-semibold text-red-800">{p[0]}</h3>
              <p className="text-red-600 font-bold">{p[1]}</p>
              <button className="mt-4 w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 rounded-lg transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16 sm:py-20 text-center text-white px-4">
        <h2 className="text-3xl sm:text-4xl font-serif mb-4">
          Start Your Skincare Journey Today
        </h2>
        <button className="bg-white text-red-700 px-10 py-3 rounded-full font-semibold hover:scale-105 transition">
          Shop Now
        </button>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-red-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Get exclusive offers & skincare tips.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border rounded-full px-6 py-3 outline-none"
            />
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

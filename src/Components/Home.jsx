import { useContext } from "react";
import { Link } from "react-router-dom";
import { FlorivaContext } from "./Context";

/* ================= ASSETS ================= */
import heroImage from "../assets/Gemini_Generated_Image_wy35d7wy35d7wy35.png";
import product1 from "../assets/download.jpg";
import product2 from "../assets/download (5).jpg";
import product3 from "../assets/images (1).jpg";
import product4 from "../assets/download (10).jpg";

/* ================= DATA ================= */
const FEATURED_PRODUCTS = [
  { name: "Vitamin C Serum", description: "Boost radiance and even skin tone", image: product1 },
  { name: "Hydrating Cream", description: "Deep moisture for all-day comfort", image: product2 },
  { name: "Gentle Cleanser", description: "Cleanse without stripping moisture", image: product3 },
  { name: "SPF 50 Sunscreen", description: "Daily UV protection you can trust", image: product4 },
];

const TRUST_ITEMS = [
  { label: "Cruelty Free", value: "100%" },
  { label: "Happy Customers", value: "50K+" },
  { label: "Support", value: "24/7" },
  { label: "Safe Formula", value: "Derm Tested" },
];

/* ================= COMPONENTS ================= */
const HeroSection = () => (
  <section
    className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative max-w-2xl px-6 sm:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg text-red-500">Glow Naturally</h1>
      <p className="mt-4 text-sm sm:text-lg md:text-xl drop-shadow-sm text-red-300">
        Premium skincare crafted for radiant, healthy skin
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/products" className="btn btn-primary btn-lg transition-transform hover:scale-105 hover:bg-white hover:text-red-700  text-white bg-red-700 border-red-700">
          Explore Products
        </Link>
        <Link
          to="/about"
          className="btn btn-outline btn-lg bg-white text-red-700 border-white hover:text-white hover:bg-red-700 transition-transform hover:scale-105"
        >
          Our Story
        </Link>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="bg-white py-12 sm:py-16 shadow-sm">
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-4 sm:gap-6 px-4 sm:px-6">
      {TRUST_ITEMS.map(({ label, value }) => (
        <div key={label} className="p-2 sm:p-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700">{value}</h3>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">{label}</p>
        </div>
      ))}
    </div>
  </section>
);

const FeaturedCollection = () => (
  <section className="py-16 sm:py-24">
    <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-900">Our Best Collection</h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
        Thoughtfully formulated skincare essentials curated for all skin types
      </p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 px-4 sm:px-6">
      {FEATURED_PRODUCTS.map((item) => (
        <div
          key={item.name}
          className="bg-white rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-4 sm:p-6 text-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-40 sm:h-44 mx-auto object-contain mb-4 sm:mb-6"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-red-800">{item.name}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">{item.description}</p>
          <Link
            to="/products"
            className="mt-4 sm:mt-6 bg-white text-red-700 btn btn-outline btn-sm block transition hover:bg-red-700 hover:text-white"
          >
            View Details →
          </Link>
        </div>
      ))}
    </div>
  </section>
);

const Home = () => {
  const { MyName } = useContext(FlorivaContext);

  return (
    <div className="bg-gray-50 flex flex-col">
      <HeroSection />
      <TrustSection />
      <FeaturedCollection />
      {/* Footer completely removed */}
    </div>
  );
};

export default Home;

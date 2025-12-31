import React, { useContext } from "react";
import { FlorivaContext } from "./Context";

/* ================= ASSETS ================= */
import img1 from "../assets/download.jpg";
import img2 from "../assets/download (5).jpg";
import img3 from "../assets/images (1).jpg";
import img4 from "../assets/download (10).jpg";

/* ================= PRODUCTS ================= */
const PRODUCTS = [
  { id: 1, name: "Vitamin C Glow Serum", description: "Brightens skin and boosts collagen", price: 899, image: img1 },
  { id: 2, name: "Hydrating Moisture Cream", description: "Deep hydration for 24 hours", price: 1099, image: img2 },
  { id: 3, name: "Gentle Facial Cleanser", description: "Soap-free, pH balanced formula", price: 499, image: img3 },
  { id: 4, name: "SPF 50 Sunscreen", description: "Broad-spectrum UV protection", price: 699, image: img4 },
];

/* ================= COMPONENTS ================= */
const ProductHeader = () => (
  <section className="bg-gradient-to-r from-red-600 to-red-800 py-24 text-white text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl font-serif font-bold drop-shadow-lg">Our Products</h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90 drop-shadow-sm">
      Premium skincare crafted with care
    </p>
  </section>
);

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all flex flex-col transform hover:-translate-y-1">
    <div className="h-56 flex items-center justify-center bg-gray-50 rounded-t-3xl overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-44 object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div className="p-6 flex-1 flex flex-col justify-between">
      <h3 className="font-semibold text-red-800 text-lg hover:text-red-700 transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      <p className="text-red-600 font-bold mt-2 text-lg">৳{product.price}</p>
    </div>

    <div className="p-6 pt-0 flex justify-center">
      <button
        onClick={() => onAddToCart(product)}
        className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition"
      >
        Add to Cart
      </button>
    </div>
  </div>
);

const FeaturedProducts = ({ products, onAddToCart }) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-900">Featured Products</h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
        Thoughtfully formulated skincare essentials curated for all skin types
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  </section>
);

const Product = () => {
  const { addToCart } = useContext(FlorivaContext);

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <ProductHeader />
      <FeaturedProducts products={PRODUCTS} onAddToCart={addToCart} />
    </div>
  );
};

export default Product;

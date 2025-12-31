import React, { useContext } from "react";
import ProductCard from "./ProductCart";
import products from "../data/products.json";
import { FlorivaContext } from "./Context";

const Product = () => {
  const { addToCart } = useContext(FlorivaContext);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-24 text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold">Our Products</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90">Premium skincare crafted with care</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map(item => (
            <ProductCard key={item.id} product={item} onAddToCart={addToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;

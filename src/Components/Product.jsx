import React from "react";
import products from "../data/products.json";


const Product = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-20 text-white text-center">
        <h1 className="text-4xl font-serif font-bold">Our Products</h1>
        <p className="mt-4 opacity-90">
          Premium skincare crafted with care
        </p>
      </section>

      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow hover:shadow-xl transition"
            >
              <div className="h-56 flex items-center justify-center bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-red-800 text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-red-600 font-bold text-lg">
                    ৳{item.price}
                  </span>

                  <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Product;

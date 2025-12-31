import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart = () => {} }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col">
      
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="h-44 sm:h-48 flex items-center justify-center bg-gray-50 rounded-t-2xl overflow-hidden p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-36 sm:h-40 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between text-center">
          <h3 className="font-semibold text-red-800 text-lg sm:text-xl hover:text-red-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2">{product.description}</p>
          <p className="text-red-600 font-bold mt-3 text-lg sm:text-xl">৳{product.price}</p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="p-4 sm:p-6 flex justify-center">
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition text-sm sm:text-base"
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

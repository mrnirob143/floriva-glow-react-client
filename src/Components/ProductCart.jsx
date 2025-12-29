import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart = () => {} }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all flex flex-col">
      
      {/* Image and product info */}
      <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
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
        </div>
      </Link>

      {/* Add to Cart button */}
      <div className="p-6 pt-0 flex justify-between items-center">
        <span className="text-red-600 font-bold text-lg">৳{product.price}</span>
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

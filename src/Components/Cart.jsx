import React, { useContext } from "react";
import { FlorivaContext } from "./Context";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart } = useContext(FlorivaContext);

  // Calculate total dynamically
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Thank you! Your total is ৳${total}. Proceeding to checkout...`);
    // Redirect to payment page if needed
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-red-700 mb-8 text-center">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg text-center mt-10">Your cart is currently empty</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Cart Items */}
          <div className="flex flex-col gap-6">
            {cart.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-between border-b pb-4">
                
                {/* Product Info */}
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-lg border p-1 bg-gray-100"
                  />
                  <div>
                    <p className="font-semibold text-lg text-gray-800">{item.name}</p>
                    <p className="text-gray-600 mt-1">৳{item.price}</p>
                  </div>
                </div>

                {/* Delete Button */}
                <div className="mt-2 sm:mt-0">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-600 hover:text-red-800 transition-colors flex items-center gap-1"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-6">
            <p className="text-2xl font-bold text-gray-800">Total: ৳{total}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 sm:mt-0 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

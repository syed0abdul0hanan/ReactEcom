import React from "react";

const ProductCard = ({ id, name, price, thumbnail }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={thumbnail} alt={name} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => console.log(`Added ${name} to cart`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

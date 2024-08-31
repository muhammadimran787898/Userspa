import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="block border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
        <img
          src={product.image}
          loading="lazy"
          alt={product.title}
          className="w-full h-40 p-4 object-cover"
        />
        <div className="p-4">
          <h2 className="text-sm font-normal  mb-2 text-gray-800 line-clamp-1">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

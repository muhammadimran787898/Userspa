import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error } = useSWR(
    `https://fakestoreapi.com/products/${id}`,
    fetcher
  );

  if (!product) return <div class="loader"></div>;
  if (error) return <p>Error loading product details...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg"
      />
      <p className="text-xl mb-4">Category: {product.category}</p>
      <p className="text-xl mb-4">
        Price: <span className="font-semibold">${product.price}</span>
      </p>
      <p className="text-lg text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductDetails;

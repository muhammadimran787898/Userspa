import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { useProducts } from "../hooks/useProducts";
import { ProductContext } from "../components/context/ProductContext";

const ProductList = () => {
  const { filters, setFilters } = useContext(ProductContext);
  const { products, isLoading, isError } = useProducts();
  const [maxPrice, setMaxPrice] = useState(filters.priceRange);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products?.filter((product) => {
    const productPrice = parseFloat(product.price);
    const maxPriceFloat = parseFloat(maxPrice);

    return (
      (!filters.category || product.category === filters.category) &&
      (!maxPrice || productPrice === maxPriceFloat) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products...</p>;

  return (
    <div className="flex h-screen overflow-hidden">
      <FilterSidebar
        categories={[...new Set(products?.map((product) => product.category))]}
        onCategoryChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
        onPriceChange={(value) => {
          setMaxPrice(value);
          setFilters({ ...filters, priceRange: parseFloat(value) });
        }}
        maxPrice={maxPrice}
      />
      <div className="flex-grow p-4 overflow-y-auto">
        <h1 className="text-4xl text-center font-bold mb-6 text-gray-800">
          Products
        </h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

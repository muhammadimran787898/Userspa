import React from "react";

const FilterSidebar = ({
  categories,
  onCategoryChange,
  onPriceChange,
  maxPrice,
}) => {
  return (
    <div className="w-48 h-screen  p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Products</h1>
      <h3 className="text-base font-normal mb-4">Filter by Category</h3>
      <select
        onChange={onCategoryChange}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <h3 className="text-base font-normal mb-4">Filter by Price</h3>
      <input
        type="number"
        min="0"
        value={maxPrice}
        onChange={(e) => onPriceChange(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
        placeholder="Enter max price"
      />
      <p>Showing products up to: ${maxPrice || "Any"}</p>
    </div>
  );
};

export default FilterSidebar;

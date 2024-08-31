import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, null],
  });

  return (
    <ProductContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

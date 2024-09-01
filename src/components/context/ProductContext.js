import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: null,
  });

  return (
    <ProductContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

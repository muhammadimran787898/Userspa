import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "./ProductCard";

describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    title: "Test Product",
    image: "https://via.placeholder.com/150",
    category: "Test Category",
    price: 99.99,
  };

  test("renders product title, category, and price correctly", () => {
    render(
      <Router>
        <ProductCard product={mockProduct} />
      </Router>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });

  test("renders product image with lazy loading", () => {
    render(
      <Router>
        <ProductCard product={mockProduct} />
      </Router>
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProduct.image);
    expect(image).toHaveAttribute("alt", mockProduct.title);
    expect(image).toHaveAttribute("loading", "lazy");
  });

  test("links to the correct product details page", () => {
    render(
      <Router>
        <ProductCard product={mockProduct} />
      </Router>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/product/${mockProduct.id}`);
  });
});

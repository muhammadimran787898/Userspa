import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterSidebar from "./FilterSidebar";

describe("FilterSidebar Component", () => {
  const categories = ["Electronics", "Clothing", "Books"];
  const mockOnCategoryChange = jest.fn();
  const mockOnPriceChange = jest.fn();

  test("renders the FilterSidebar with correct elements", () => {
    render(
      <FilterSidebar
        categories={categories}
        onCategoryChange={mockOnCategoryChange}
        onPriceChange={mockOnPriceChange}
        maxPrice=""
      />
    );

    // Check if the heading is rendered
    expect(screen.getByText("Products")).toBeInTheDocument();

    // Check if categories are rendered
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    // Check if price input is rendered
    expect(screen.getByPlaceholderText("Enter max price")).toBeInTheDocument();
  });

  test("calls onCategoryChange when a category is selected", () => {
    render(
      <FilterSidebar
        categories={categories}
        onCategoryChange={mockOnCategoryChange}
        onPriceChange={mockOnPriceChange}
        maxPrice=""
      />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Electronics" } });

    expect(mockOnCategoryChange).toHaveBeenCalled();
    expect(mockOnCategoryChange).toHaveBeenCalledWith(expect.anything());
  });

  test("calls onPriceChange when a price is entered", () => {
    render(
      <FilterSidebar
        categories={categories}
        onCategoryChange={mockOnCategoryChange}
        onPriceChange={mockOnPriceChange}
        maxPrice=""
      />
    );

    const input = screen.getByPlaceholderText("Enter max price");
    fireEvent.change(input, { target: { value: "50" } });

    expect(mockOnPriceChange).toHaveBeenCalled();
    expect(mockOnPriceChange).toHaveBeenCalledWith("50");
  });
});

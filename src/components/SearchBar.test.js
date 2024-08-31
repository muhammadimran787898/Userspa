import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  test("renders the search input field", () => {
    render(<SearchBar onSearch={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText("Search products...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("calls onSearch when the input value changes", () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Search products...");

    fireEvent.change(inputElement, { target: { value: "Test Product" } });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(expect.anything());
  });
});

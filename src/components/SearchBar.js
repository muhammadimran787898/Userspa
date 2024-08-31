const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={onSearch}
      className="w-full p-2 rounded-lg shadow-sm"
    />
  );
};

export default SearchBar;

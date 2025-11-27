import { useState } from "react";

function SearchBar({ onSearch, defaultCity }) {
  const [value, setValue] = useState(defaultCity || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

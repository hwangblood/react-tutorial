import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onClick={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>

      <input
        type="text"
        name="search_key"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;

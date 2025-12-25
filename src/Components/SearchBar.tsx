import React from 'react';

type SearchBarProps = {
  searchTerm: string;
  onSearch: (term: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      className="form-control mb-2"
      placeholder="Search plants (UI-only)"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

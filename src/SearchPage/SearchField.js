import { useState } from "react";

const SearchField = (props) => {
  const { onSearchBooks } = props;
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    onSearchBooks(e.target.value);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={handleSearchText}
        value={searchText}
      />
    </div>
  );
};

export default SearchField;

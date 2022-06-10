import { useState } from "react";

const SearchField = (props) => {
  const { onSearchBooks } = props;
  const [searchText, setSearchText] = useState("Android");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    onSearchBooks(searchText);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={handleSearchText}
      />
    </div>
  );
};

export default SearchField;

import OpenShelvesBtn from "./OpenShelvesBtn";
import SearchField from "./SearchField.js";
import Book from "./Book";

const SearchBooks = (props) => {
  const { onSearchBooks, searchedBooks } = props;
  console.log(searchedBooks);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <OpenShelvesBtn />
        <SearchField
          onSearchBooks={onSearchBooks}
          searchedBooks={searchedBooks}
        />
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book) => {
            return (
              <Book
                book={book}
                key={book.id}
                shelf={book.shelf ? book.shelf : "none"}
              />
            );
          })}
          {/* {searchedBooks.map((book) => {
              return <li>{book.authors.join(', ')}</li>;
            })} */}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;

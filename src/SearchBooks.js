import OpenShelvesBtn from "./OpenShelvesBtn";
import SearchField from "./SearchField.js";
import Book from "./Book";

const SearchBooks = (props) => {
  const { onSearchBooks, searchedBooks, mergedBooks, bookShelfChanger } = props;
  // console.log(searchedBooks);

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
          {mergedBooks.map((b) => {
            return (
              <Book
                book={b}
                key={b.id}
                shelf={b.shelf ? b.shelf : "none"}
                bookShelfChanger={bookShelfChanger}
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

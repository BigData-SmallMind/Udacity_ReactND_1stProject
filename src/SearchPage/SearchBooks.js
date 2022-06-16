import OpenShelvesBtn from "./OpenShelvesBtn";
import SearchField from "./SearchField.js";
import Book from "../Book/Book";

const SearchBooks = (props) => {
  const { onSearchBooks, synchedBooks, bookShelfChanger, clearSearch } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <OpenShelvesBtn clearSearch={clearSearch}/>
        <SearchField onSearchBooks={onSearchBooks} />
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {synchedBooks.map((b) => {
            return (
              <Book
                book={b}
                key={b.id}
                shelf={b.shelf}
                bookShelfChanger={bookShelfChanger}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;

import Book from "./Book";

const Shelf = (props) => {
    const { shelf, books, bookShelfChanger } = props;
    const booksOnCurrentShelf = books.filter((book) => {
      return book.shelf === shelf.id;
    });
  
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.value}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnCurrentShelf.map((book) => {
              return (
                <Book
                  book={book}
                  key={book.id}
                  shelf={shelf}
                  bookShelfChanger={bookShelfChanger}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  };

  export default Shelf
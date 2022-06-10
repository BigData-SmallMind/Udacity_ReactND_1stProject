import ShelfPicker from './ShelfPicker.js'

const Book = (props) => {
    const { shelf, book, bookShelfChanger } = props;
  
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`,
              }}
            />
            <ShelfPicker
              book={book}
              shelf={shelf}
              bookShelfChanger={bookShelfChanger}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        </div>
      </li>
    );
  };

  export default Book
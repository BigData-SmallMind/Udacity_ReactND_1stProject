import { useState } from "react";

const ShelfPicker = (props) => {
  const { book, bookShelfChanger } = props;
  const [bookShelf, setBookShelf] = useState(book.shelf || 'none');

  const handleSelection = (e) => {
    bookShelfChanger(book, e.target.value);
    setBookShelf(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={bookShelf} onChange={handleSelection}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfPicker;

import { useState } from "react";

const ShelfPicker = (props) => {
  const { book, bookShelfChanger } = props;

  const [shelfSetter, setShelfSetter] = useState(book.shelf);

  const handleSelection = (e) => {
    setShelfSetter(e.target.value);
    bookShelfChanger(book, e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select  value={shelfSetter || 'none'} onChange={handleSelection}>
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

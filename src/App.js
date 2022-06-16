import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchPage/SearchBooks";
import Shelves from "./MainPage/Shelves";
import NotFound from "./NotFound";

const shelves = [
  { id: "currentlyReading", value: "Currently Reading" },
  { id: "wantToRead", value: "Want to Read" },
  { id: "read", value: "Read" },
];

const App = () => {
  const [shelfBooks, setShelfBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => setShelfBooks(books));
  }, []);

  const searchBooks = (searchText) => {
    BooksAPI.search(searchText).then((books) => {
      console.log(books);
      if (searchText.length > 0) {
        if (books.error) {
          setSearchedBooks([]);
        } else {
          setSearchedBooks(books);
        }
      } else {
        setSearchedBooks([]);
      }
    });
  };

  const clearSearch = () => {
    setSearchedBooks([]);
  };

  const synchedBooks = searchedBooks.map((b) => {
    shelfBooks.map((book) => {
      if (book.id === b.id) {
        b.shelf = book.shelf;
      }
      return book;
    });
    return b;
  });

  const bookShelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf).then(console.log(shelfBooks));

    let updatedBookShelves = shelfBooks.filter((b) => {
      return b.id !== book.id;
    });

    if (shelf !== "none") {
      book.shelf = shelf;
      updatedBookShelves.push(book);
    }

    setShelfBooks(updatedBookShelves);
  };

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/search"
        element={
          <SearchBooks
            books={shelfBooks}
            onSearchBooks={searchBooks}
            synchedBooks={synchedBooks}
            bookShelfChanger={bookShelfChanger}
            clearSearch={clearSearch}
          />
        }
      />
      <Route
        path="/"
        element={
          <Shelves
            shelves={shelves}
            books={shelfBooks}
            bookShelfChanger={bookShelfChanger}
          />
        }
      />
    </Routes>
  );
};

export default App;

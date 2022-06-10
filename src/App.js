import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";

const App = () => {
  const [shelfBooks, setShelfBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => setShelfBooks(books))
      .catch((error) => {
        console.log(`getAll() error: ${error.name}`);
      });
  }, [shelfBooks]);

  const shelves = [
    { id: "currentlyReading", value: "Currently Reading" },
    { id: "wantToRead", value: "Want to Read" },
    { id: "read", value: "Read" },
  ];

  const bookShelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((error) => {
      console.log(`update() error: ${typeof error}`);
    });
  };

  const searchBooks = (searchText) => {
    if (searchText.length > 0) {
      BooksAPI.search(searchText).then((b) => {
        b.error ? setSearchedBooks([]) : setSearchedBooks(b);
      });
    } else {
      setSearchedBooks([]);
    }
  };
  const mergedBooks = [];

  searchedBooks.forEach((b) => {
    shelfBooks.forEach((book) => {
      if (book.id === b.id) {
        b.shelf = book.shelf;
      }
      mergedBooks.push (book);
    });
    mergedBooks.push(b) ;
  });

  return (
    <Routes>
      <Route
        path="/search"
        element={
          <SearchBooks
            books={shelfBooks}
            onSearchBooks={searchBooks}
            searchedBooks={searchedBooks}
            mergedBooks={mergedBooks}
            bookShelfChanger={bookShelfChanger}
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

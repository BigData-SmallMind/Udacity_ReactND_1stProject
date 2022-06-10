import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";

const App = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => setAllBooks(books))
      .catch((error) => {
        console.log(`getAll() error: ${error.name}`);
      });
  }, [allBooks]);

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
        if (b.error) {
          setSearchedBooks([]);
        } else {
          setSearchedBooks(b);
        }
      });
    } else {
      setSearchedBooks([]);
    }
  };

  const mergedBooks = searchedBooks.map((b) => {
    allBooks.map((book) => {
      if (book.id === b.id) {
        b.shelf = book.shelf;
      }
      return book;
    });
    return b;
  });

  return (
    <Routes>
      <Route
        path="/search"
        element={
          <SearchBooks
            books={allBooks}
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
            books={allBooks}
            bookShelfChanger={bookShelfChanger}
          />
        }
      />
    </Routes>
  );
};

export default App;

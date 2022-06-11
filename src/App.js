import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import NotFound from "./NotFound";

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

  // useEffect(() => {
  //   searchText.length < 1 ? setSearchedBooks([]) : null;
  // }, [searchText]);

  const synchedBooks = searchedBooks.map((b) => {
    shelfBooks.map((book) => {
      if (book.title === b.title) {
        b.shelf = book.shelf;
      }
      if (!b.shelf) {
        b.shelf = "none";
      }
      if (!book.shelf) {
        book.shelf = "none";
      }
      return book;
    });
    return b;
  });

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/search"
        element={
          <SearchBooks
            books={shelfBooks}
            onSearchBooks={searchBooks}
            searchedBooks={searchedBooks}
            mergedBooks={synchedBooks}
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

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
    BooksAPI.getAll().then((books) => setAllBooks(books));
  }, []);

  const shelves = [
    { id: "currentlyReading", value: "Currently Reading" },
    { id: "wantToRead", value: "Want to Read" },
    { id: "read", value: "Read" },
  ];

  const bookShelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      console.log(books);
    });
  };


   const searchBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      setSearchedBooks(books);
    });
  };
  console.log(searchedBooks)

  return (
    <Routes>
      <Route
        exact="true"
        path="/search"
        element={
          <SearchBooks
            books={allBooks}
            onSearchBooks={searchBooks}
            searchedBooks={searchedBooks}
       
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

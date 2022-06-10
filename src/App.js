import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => setAllBooks(books));
  }, []);
  console.log(allBooks);
  const shelves = [
    { key: "currentlyReading", value: "Currently Reading" },
    { key: "wantToRead", value: "Want to Read" },
    { key: "read", value: "Read" },
  ];

  return (
    <Routes>
      <Route
        exact="true"
        path="/search"
        element={<SearchBooks books={allBooks} />}
      />
      <Route
        path="/"
        element={<Shelves shelves={shelves} books={allBooks} />}
      />
    </Routes>
  );
};

const Shelves = (props) => {
  const { shelves, books } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => {
            return <Shelf shelf={shelf} books={books} key={shelf.key} />;
          })}
        </div>
      </div>
      <OpenSearch />
    </div>
  );
};

const Shelf = (props) => {
  const { shelf, books } = props;
  const booksOnCurrentShelf = books.filter((book) => {
    return book.shelf === shelf.key;
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.value}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnCurrentShelf.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
        </ol>
      </div>
    </div>
  );
};

const Book = (props) => {
  const { book } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <ShelfPicker />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

const ShelfPicker = (props) => {
  return (
    <div className="book-shelf-changer">
      <select>
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

const OpenSearch = () => {
  return (
    <div className="open-search">
      <Link to="/search">
        <button>Add a book</button>
      </Link>
    </div>
  );
};

const SearchBooks = (props) => {
  const { books } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <OpenShelvesBtn />
        <SearchField />
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {books.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
        </ol>
      </div>
    </div>
  );
};

const OpenShelvesBtn = () => {
  return (
    <Link exact to="/">
      <button className="close-search">close</button>
    </Link>
  );
};

const SearchField = () => {
  return (
    <div className="search-books-input-wrapper">
      {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
      <input type="text" placeholder="Search by title or author" />
    </div>
  );
};
export default App;

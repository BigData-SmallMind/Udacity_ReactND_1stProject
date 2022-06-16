import Shelf from "./Shelf";
import OpenSearch from "./OpenSearch";

const Shelves = (props) => {
    const { shelves, books, bookShelfChanger } = props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => {
              return (
                <Shelf
                  shelf={shelf}
                  books={books}
                  key={shelf.id}
                  bookShelfChanger={bookShelfChanger}
                />
              );
            })}
          </div>
        </div>
        <OpenSearch />
      </div>
    );
  };

  export default Shelves
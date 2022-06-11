import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="list-books-title">404 Page not found</h1>
      <div style={{textAlign: 'center'}}>
          <Link to="/search">
            <button style={{marginRight: '2rem', padding: "1rem", backgroundColor: ''}} >Book search page</button>
          </Link>
          <Link to="/">
            <button style={{marginRight: '2rem', padding: "1rem"}}>Book shelves page</button>
          </Link>
      </div>
    </div>
  );
};

export default NotFound;

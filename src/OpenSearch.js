import { Link } from 'react-router-dom'

const OpenSearch = () => {
    return (
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    );
  };

  export default OpenSearch
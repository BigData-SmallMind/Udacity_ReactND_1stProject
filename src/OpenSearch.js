import { Link } from 'react-router-dom'

const OpenSearch = () => {
    return (
      <div className="open-search">
        <Link to="/search">
          <div>Add a book</div>
        </Link>
      </div>
    );
  };

  export default OpenSearch
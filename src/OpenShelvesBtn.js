import { Link } from 'react-router-dom'

const OpenShelvesBtn = () => {
    return (
      <Link exact to="/">
        <button className="close-search">close</button>
      </Link>
    );
  };

  export default OpenShelvesBtn
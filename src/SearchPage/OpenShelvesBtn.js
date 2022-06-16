import { Link } from "react-router-dom";

const OpenShelvesBtn = (props) => {
  const { clearSearch } = props;
  return (
    <Link to="/">
      <button className="close-search" onClick={clearSearch}>close</button>
    </Link>
  );
};

export default OpenShelvesBtn;

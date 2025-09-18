import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <center>
        <h1>404 Not Found</h1>
      </center>
      <Link to="/">
        <center>
          <button>Go to Home</button>
        </center>
      </Link>
    </div>
  );
};

export default NotFoundPage;

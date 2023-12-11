import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorData = useRouteError();

  return (
    <div>
      <div>
        <p>{errorData}</p>
      </div>
      <div>
        <Link to={"/"}>Menu</Link>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;

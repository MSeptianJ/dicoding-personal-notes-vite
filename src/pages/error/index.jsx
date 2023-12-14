import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorData = useRouteError();

  return (
    <div className=" grid min-h-screen w-full items-center text-center">
      <div className=" m-auto grid w-full gap-5">
        <div>
          <h3 className=" text-lg font-bold text-red-600">
            {errorData.status || "Error"}
          </h3>
          {errorData.status === 404 ? (
            <p>Page Not Found</p>
          ) : (
            <p>{errorData.message}</p>
          )}
        </div>

        <div className=" m-auto w-1/3 bg-gray-500 p-2 text-white">
          <Link to={"/"}>Menu</Link>
        </div>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;

import { Link, useOutletContext } from "react-router-dom";
import { login } from "../../utils/network-data";
import LoginInput from "./loginInput";

const LoginPage = () => {
  const { onloginSuccess } = useOutletContext();

  const loginHandler = async (email, password) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      onloginSuccess(data);
    }
  };

  return (
    <section className="m-auto w-full max-w-screen-sm rounded-[4px] bg-primary p-6 text-back shadow-lg">
      <h2 className=" mb-5 text-xl">Login to use app, please.</h2>

      <LoginInput loginHandler={loginHandler} />

      <p className="mt-5 text-sm">
        Don{"'"}t have an acount?{" "}
        <Link to="/register" className=" underline">
          Register Here.
        </Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {};

export default LoginPage;

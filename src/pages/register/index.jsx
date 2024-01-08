import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/network-data";
import RegisterInput from "./RegisterInput";

const RegisterPage = () => {
  const navigate = useNavigate();

  const registerHandler = async (name, email, password) => {
    const { error } = await register({ name, email, password });

    if (!error) {
      navigate("/");
    }
  };

  return (
    <section className="m-auto w-full max-w-screen-sm rounded-[4px] bg-primary p-6 text-back shadow-lg">
      <h2 className=" mb-5 text-xl">Fill the form to register an account</h2>

      <RegisterInput registerHandler={registerHandler} />

      <p className="mt-5 text-sm">
        Already have an acount?{" "}
        <Link to="/login" className=" underline">
          Login Here.
        </Link>
      </p>
    </section>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;

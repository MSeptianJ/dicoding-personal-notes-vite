import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const LoginInput = ({ locale, loginHandler }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();

    loginHandler(email, password);
  };

  return (
    <form className="m-auto grid w-full text-left" onSubmit={handleSubmit}>
      <label htmlFor="loginEmail" className="mb-1">
        Email
      </label>
      <input
        type="email"
        name="loginEmail"
        id="loginEmail"
        className=" mb-3 rounded-[4px] border-2 border-back bg-transparent p-2"
        value={email}
        onChange={onEmailChange}
      />
      <label htmlFor="loginPassword" className="mb-1">
        Password
      </label>
      <input
        type="password"
        name="loginPassword"
        id="loginPassword"
        className=" mb-2 rounded-[4px] border-2 border-back bg-transparent p-2"
        value={password}
        onChange={onPasswordChange}
      />
      <input
        type="submit"
        value={locale === "en" ? "Log In" : "Masuk"}
        className="m-auto w-full cursor-pointer rounded-[4px] bg-accent px-6 py-2 font-bold transition-all hover:bg-opacity-80"
      />
    </form>
  );
};

LoginInput.propTypes = {
  locale: PropTypes.string.isRequired,
  loginHandler: PropTypes.func.isRequired,
};

export default LoginInput;

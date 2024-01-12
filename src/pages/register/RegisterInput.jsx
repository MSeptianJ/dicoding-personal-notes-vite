import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const RegisterInput = ({ locale, registerHandler }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirm, onConfirmChange] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!(password === confirm)) {
      alert("Password and password confirm must be the same");
    } else {
      registerHandler(name, email, password);
    }
  };

  return (
    <form className="m-auto grid w-full text-left" onSubmit={handleSubmit}>
      <label htmlFor="registName" className="mb-1">
        {locale === "en" ? "Name" : "Nama"}
      </label>
      <input
        type="text"
        name="registName"
        id="registName"
        className=" mb-3 rounded-[4px] border-2 border-back bg-transparent p-2"
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="registEmail" className="mb-1">
        Email
      </label>
      <input
        type="email"
        name="registEmail"
        id="registEmail"
        className=" mb-3 rounded-[4px] border-2 border-back bg-transparent p-2"
        value={email}
        onChange={onEmailChange}
      />
      <label htmlFor="registPassword" className="mb-1">
        Password
      </label>
      <input
        type="password"
        name="registPassword"
        id="registPassword"
        className=" mb-2 rounded-[4px] border-2 border-back bg-transparent p-2"
        value={password}
        onChange={onPasswordChange}
      />
      <label htmlFor="registConfirm" className="mb-1">
        {locale === "en" ? "Confirm Password" : "Konfirmasi Password"}
      </label>
      <input
        type="password"
        name="registConfirm"
        id="registConfirm"
        className=" mb-2 rounded-[4px] border-2 border-back bg-transparent p-2"
        value={confirm}
        onChange={onConfirmChange}
      />
      <input
        type="submit"
        value={locale === "en" ? "Register" : "Daftar"}
        className="m-auto w-full cursor-pointer rounded-[4px] bg-accent px-6 py-2 font-bold transition-all hover:bg-opacity-80"
      />
    </form>
  );
};

RegisterInput.propTypes = {
  locale: PropTypes.string.isRequired,
  registerHandler: PropTypes.func.isRequired,
};

export default RegisterInput;

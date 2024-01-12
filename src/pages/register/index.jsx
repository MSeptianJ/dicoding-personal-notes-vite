import { Link, useNavigate } from "react-router-dom";
import { GetLocaleContexts } from "../../contexts/LocaleContext";
import { register } from "../../utils/network-data";
import RegisterInput from "./RegisterInput";

const RegisterPage = () => {
  const { locale } = GetLocaleContexts();
  const navigate = useNavigate();

  const registerHandler = async (name, email, password) => {
    const { error } = await register({ name, email, password });

    if (!error) {
      navigate("/");
    }
  };

  return (
    <section className="m-auto w-full max-w-screen-sm rounded-[4px] bg-primary p-6 text-back shadow-lg">
      <h2 className=" mb-5 text-xl">
        {locale === "en"
          ? "Fill the form to register an account"
          : "Isi form untuk mendaftarkan akun"}
      </h2>

      <RegisterInput locale={locale} registerHandler={registerHandler} />

      <div className="mt-5 flex gap-1 text-sm">
        <p>
          {locale === "en" ? "Already have an acount?" : "Sudah punya akun?"}
        </p>
        <Link to="/login" className=" underline">
          {locale === "en" ? "Login Here." : "Masuk di sini"}
        </Link>
      </div>
    </section>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;

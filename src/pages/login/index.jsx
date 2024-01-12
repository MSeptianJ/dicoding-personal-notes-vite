import { Link, useOutletContext } from "react-router-dom";
import { GetLocaleContexts } from "../../contexts/LocaleContext";
import { login } from "../../utils/network-data";
import LoginInput from "./loginInput";

const LoginPage = () => {
  const { locale } = GetLocaleContexts();
  const { onloginSuccess } = useOutletContext();

  const loginHandler = async (email, password) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      onloginSuccess(data);
    }
  };

  return (
    <section className="m-auto w-full max-w-screen-sm rounded-[4px] bg-primary p-6 text-back shadow-lg">
      <h2 className=" mb-5 text-xl">
        {locale === "en"
          ? "Login to use app, please."
          : "Masuk ke Akun untuk menggunakan aplikasi"}
      </h2>

      <LoginInput locale={locale} loginHandler={loginHandler} />

      <div className="mt-5 flex gap-1 text-sm">
        <p>
          {locale === "en" ? "Don't have an Account?" : "Belum punya akun?"}
        </p>
        <Link to="/register" className=" underline">
          {locale === "en" ? "Register Here." : "Daftar di sini"}
        </Link>
      </div>
    </section>
  );
};

LoginPage.propTypes = {};

export default LoginPage;

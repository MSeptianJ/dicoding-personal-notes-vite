import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GetAuthContexts } from "../../contexts/AuthContext";
import { GetLocaleContexts } from "../../contexts/LocaleContext";
import { GetThemeContexts } from "../../contexts/ThemeContext";
import {
  IconDarkTheme,
  IconLightTheme,
  IconLogOut,
  IconTranslate,
} from "../../icon";
import NoteNavigation from "./NoteNavigation";

const NoteHeader = ({ navList, logOutFunc }) => {
  const { theme, changeTheme } = GetThemeContexts();
  const { authedUser } = GetAuthContexts();
  const { locale, changeLocale } = GetLocaleContexts();

  return (
    <header className=" flex w-full items-center justify-between border-b-2 border-primary p-1 text-center font-bold uppercase dark:text-back">
      <p className=" text-left">
        <Link
          to={"/"}
          className=" p-3 transition-all duration-200 hover:text-accent"
        >
          {locale === "en" ? "Personal Notes" : "Catatan Pribadi"}
        </Link>
      </p>

      <div className=" flex items-center">
        <NoteNavigation
          navList={authedUser ? navList.slice(0, 2) : navList.slice(2, 4)}
          locale={locale}
        />

        <div className=" cursor-pointer transition-all duration-200 hover:bg-primary hover:text-back">
          <button
            onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
            className="flex w-full items-center gap-2 p-2 uppercase"
          >
            {theme === "light" ? <IconDarkTheme /> : <IconLightTheme />}
          </button>
        </div>

        <div className=" cursor-pointer transition-all duration-200 hover:bg-primary hover:text-back">
          <button
            onClick={() => changeLocale()}
            className="flex w-full items-center gap-2 p-2 uppercase"
          >
            <IconTranslate />
            {locale}
          </button>
        </div>

        {authedUser && (
          <div className=" cursor-pointer transition-all duration-200 hover:bg-primary hover:text-back">
            <button
              onClick={logOutFunc}
              className=" flex w-full items-center gap-2 p-2 uppercase"
            >
              <IconLogOut />
              {authedUser.name}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

NoteHeader.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.object).isRequired,
  logOutFunc: PropTypes.func.isRequired,
};

export default NoteHeader;

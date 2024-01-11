import { FaSearch } from "react-icons/fa";
import { IoMdHome, IoMdPersonAdd, IoMdSunny, IoMdMoon } from "react-icons/io";
import {
  MdAddBox,
  MdArchive,
  MdDelete,
  MdLogin,
  MdLogout,
  MdUnarchive,
} from "react-icons/md";

export const IconLogIn = () => {
  return <MdLogin />;
};

export const IconLogOut = () => {
  return <MdLogout />;
};

export const IconRegister = () => {
  return <IoMdPersonAdd />;
};

export const IconHome = () => {
  return <IoMdHome />;
};

export const IconArchive = () => {
  return <MdArchive />;
};

export const IconUnarchive = () => {
  return <MdUnarchive />;
};

export const IconDelete = () => {
  return <MdDelete />;
};

export const IconSearch = () => {
  return <FaSearch />;
};

export const IconAddNote = () => {
  return <MdAddBox />;
};

export const IconLightTheme = () => {
  return <IoMdSunny />;
};

export const IconDarkTheme = () => {
  return <IoMdMoon />;
};

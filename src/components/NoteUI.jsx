import PropTypes from "prop-types";
import NoteSearch from "./NoteSearch";
import NoteSubmitBtn from "./button/NoteSubmitBtn";

const NoteUI = ({ locale, handlerSearchNote }) => {
  return (
    <div className=" grid w-full grid-cols-6 items-center rounded-sm bg-primary shadow-lg">
      <div className=" col-span-4 w-full lg:col-span-5">
        <NoteSearch locale={locale} searchFunc={handlerSearchNote} />
      </div>
      <div className=" col-span-2 h-full w-full lg:col-span-1">
        <NoteSubmitBtn locale={locale} />
      </div>
    </div>
  );
};

NoteUI.propTypes = {
  locale: PropTypes.string.isRequired,
  handlerSearchNote: PropTypes.func.isRequired,
};

export default NoteUI;

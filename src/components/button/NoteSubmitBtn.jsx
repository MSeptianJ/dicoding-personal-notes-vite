import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IconAddNote } from "../../icon";

const NoteSubmitBtn = ({ locale }) => {
  return (
    <div className=" m-auto h-full w-full cursor-pointer transition-all duration-200 hover:bg-accent">
      <Link
        to={"/submit"}
        className=" m-auto flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-lg text-back lg:flex-row"
      >
        <h4 className="font-semibold uppercase text-back">
          {locale === "en" ? "Add New" : "Tambah Baru"}
        </h4>
        <IconAddNote />
      </Link>
    </div>
  );
};

NoteSubmitBtn.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default NoteSubmitBtn;

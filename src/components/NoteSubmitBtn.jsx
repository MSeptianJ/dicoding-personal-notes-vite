import { Link } from "react-router-dom";
import { MdAddBox } from "react-icons/md";

const NoteSubmitBtn = () => {
  return (
    <div className=" m-auto h-full w-full cursor-pointer hover:bg-accent">
      <Link
        to={"/submit"}
        className=" m-auto flex h-full w-full flex-col items-center justify-center gap-3 p-3 text-lg text-back lg:flex-row"
      >
        <h4 className="font-semibold uppercase text-back">Add New</h4>
        <MdAddBox />
      </Link>
    </div>
  );
};

NoteSubmitBtn.propTypes = {};

export default NoteSubmitBtn;

import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/utils";

const NoteItem = ({ noteData }) => {
  return (
    <>
      <div className=" flex w-full flex-col justify-between gap-3 rounded-sm bg-main p-2  text-accent">
        <div className=" w-full px-2">
          <div className=" w-full border-b-2 border-sub pb-3">
            <h3 className=" mb-1 text-lg font-bold">
              {noteData.title.length >= 15
                ? noteData.title.substring(0, 15) + "..."
                : noteData.title}
            </h3>
            <p className="text-sm">{showFormattedDate(noteData.createdAt)}</p>
          </div>

          <div className=" m-auto w-full">
            <p className=" py-3 text-sm">
              {noteData.body.length >= 200
                ? noteData.body.substring(0, 180) + "..."
                : noteData.body}
            </p>
          </div>
        </div>

        <div className=" grid w-full grid-cols-2 gap-2">
          <button className=" rounded-sm bg-sub font-semibold text-main hover:bg-darkMain hover:text-sub">
            Archive
          </button>
          <button className=" rounded-sm bg-sub font-semibold text-main hover:bg-darkMain hover:text-sub">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

NoteItem.propTypes = {
  noteData: PropTypes.object,
};

export default NoteItem;

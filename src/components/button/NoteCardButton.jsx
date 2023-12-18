import PropTypes from "prop-types";

const NoteCardButton = ({ btnTitle, btnFunc, btnId, isFocus, btnIcon }) => {
  const handleFunction = () => {
    btnFunc(btnId);
  };

  return (
    <button
      onClick={handleFunction}
      className={`${
        isFocus
          ? "text-main bg-accent hover:bg-opacity-70"
          : " hover:text-accent"
      } flex items-center justify-center gap-2 rounded-sm p-1 text-sm shadow-xl transition-all duration-200`}
    >
      <p>{btnTitle}</p>
      <div className=" text-lg">{btnIcon}</div>
    </button>
  );
};

NoteCardButton.propTypes = {
  btnFunc: PropTypes.func,
  btnTitle: PropTypes.string,
  btnId: PropTypes.string,
  isFocus: PropTypes.bool,
  btnIcon: PropTypes.object,
};

export default NoteCardButton;

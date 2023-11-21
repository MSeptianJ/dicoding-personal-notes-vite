import PropTypes from "prop-types";

const NoteCardButton = ({ btnTitle, btnFunc, btnId, darkTheme }) => {
  const handleFunction = () => {
    btnFunc(btnId);
  };

  return (
    <button
      onClick={handleFunction}
      className={
        darkTheme
          ? " rounded-sm bg-darkMain font-semibold text-sub hover:bg-sub hover:text-main"
          : " rounded-sm bg-sub font-semibold text-main hover:bg-darkMain hover:text-sub"
      }
    >
      {btnTitle}
    </button>
  );
};

NoteCardButton.propTypes = {
  btnFunc: PropTypes.func,
  btnTitle: PropTypes.string,
  btnId: PropTypes.number,
  darkTheme: PropTypes.bool,
};

export default NoteCardButton;

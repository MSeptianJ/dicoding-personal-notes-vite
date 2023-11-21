import PropTypes from "prop-types";

const NoteCardButton = ({ btnTitle, btnFunc, btnId }) => {
  const handleFunction = () => {
    btnFunc(btnId);
  };

  return (
    <button
      onClick={handleFunction}
      className=" rounded-sm bg-sub font-semibold text-main hover:bg-darkMain hover:text-sub"
    >
      {btnTitle}
    </button>
  );
};

NoteCardButton.propTypes = {
  btnFunc: PropTypes.func,
  btnTitle: PropTypes.string,
  btnId: PropTypes.number,
};

export default NoteCardButton;

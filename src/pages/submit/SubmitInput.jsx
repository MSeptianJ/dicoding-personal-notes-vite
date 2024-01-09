import { useState } from "react";
import PropTypes from "prop-types";

const SubmitInput = ({ submitFunc }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const MAXCHARACTER = 50;

  const titleHandler = (e) => {
    setTitle(e.target.value.slice(0, MAXCHARACTER));
  };

  const descHandler = (e) => {
    setBody(e.target.innerHTML);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    submitFunc({ title, body });
  };
  return (
    <form className="m-auto grid w-full items-center" onSubmit={submitHandler}>
      <div className=" mb-1 mt-3 flex items-center justify-between">
        <label htmlFor="submitTitle">Title Note</label>
        <p className="text-sm">
          Title Characters Left : {MAXCHARACTER - title.length}
        </p>
      </div>
      <input
        type="text"
        className=" mb-3 block w-full rounded-[4px] border-2 border-back bg-transparent p-2 text-sm"
        id="submitTitle"
        value={title}
        onChange={titleHandler}
        required
      />

      <label htmlFor="submitDesc" className="mb-1">
        Description
      </label>
      <div
        id="submitDesc"
        className=" mb-2 block h-40 w-full rounded-[4px] border-2 border-back bg-transparent p-2 text-sm"
        onInput={descHandler}
        contentEditable
      ></div>

      <input
        type="submit"
        value="Submit"
        className=" m-auto block w-full cursor-pointer rounded-[4px] bg-accent px-4 py-2 font-bold uppercase transition-all duration-200 hover:bg-opacity-80"
      />
    </form>
  );
};

SubmitInput.propTypes = {
  submitFunc: PropTypes.func.isRequired,
};

export default SubmitInput;

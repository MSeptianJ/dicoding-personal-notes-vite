import PropTypes from "prop-types";
import { useState } from "react";

const NoteSubmit = ({ submitFunc }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const MAXCHARACTER = 50;

  const titleHandler = (e) => {
    setTitle(e.target.value.slice(0, MAXCHARACTER));
  };

  const descHandler = (e) => {
    setBody(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTitle("");
    setBody("");

    const newNote = {
      title,
      body,
    };

    submitFunc(newNote);
  };

  return (
    <div className=" w-full rounded-sm bg-sub p-3">
      <h2 className=" font-semibold uppercase">Submit Note</h2>
      <form
        action=""
        className=" m-auto grid w-full grid-rows-6 items-center gap-1"
        onSubmit={submitHandler}
      >
        <p className=" text-sm">
          Title Characters Left : {MAXCHARACTER - title.length}
        </p>
        <input
          type="text"
          className=" block w-full rounded-sm border-2 border-accent bg-transparent p-2 text-sm"
          placeholder="Title Note"
          value={title}
          onChange={titleHandler}
          required
        />

        <textarea
          name=""
          className=" row-span-3 block h-full w-full rounded-sm border-2 border-accent bg-transparent p-2 text-sm"
          placeholder="Body note"
          value={body}
          onChange={descHandler}
          required
        ></textarea>

        <input
          type="submit"
          value="Add note"
          className=" m-auto block w-1/2 cursor-pointer rounded-sm bg-main p-1 text-accent hover:border hover:border-main hover:bg-sub"
        />
      </form>
    </div>
  );
};

NoteSubmit.propTypes = {
  submitFunc: PropTypes.func,
};

export default NoteSubmit;

import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const SubmitPage = () => {
  const { handlerAddNote } = useOutletContext();
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

    handlerAddNote(newNote);
  };

  return (
    <div className=" bg-sub m-auto w-full rounded-sm bg-primary px-6 py-4 text-back shadow-lg lg:w-1/2">
      <h2 className=" text-xl font-semibold uppercase">Submit Note</h2>
      <form
        action=""
        className=" m-auto grid w-full grid-rows-6 items-center gap-2"
        onSubmit={submitHandler}
      >
        <p className=" text-sm">
          Title Characters Left : {MAXCHARACTER - title.length}
        </p>
        <input
          type="text"
          className=" block w-full rounded-sm border border-back bg-transparent p-2 text-sm"
          placeholder="Title Note"
          value={title}
          onChange={titleHandler}
          required
        />

        <textarea
          name=""
          className=" row-span-3 block h-full w-full rounded-sm border border-back bg-transparent p-2 text-sm"
          placeholder="Body note"
          value={body}
          onChange={descHandler}
          required
        ></textarea>

        <input
          type="submit"
          value="Submit"
          className=" m-auto block cursor-pointer rounded-sm bg-accent px-4 py-2 font-bold uppercase transition-all duration-200 hover:bg-opacity-80"
        />
      </form>
    </div>
  );
};

SubmitPage.propTypes = {};

export default SubmitPage;

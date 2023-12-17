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
    <div className=" bg-sub w-full rounded-sm bg-primary p-6 text-back">
      <h2 className=" text-xl font-semibold uppercase">Submit Note</h2>
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
          value="Add note"
          className=" hover:border-main hover:bg-sub m-auto block w-1/2 cursor-pointer rounded-sm bg-accent p-1 hover:border"
        />
      </form>
    </div>
  );
};

SubmitPage.propTypes = {};

export default SubmitPage;

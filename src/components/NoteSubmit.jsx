import PropTypes from "prop-types";

const NoteSubmit = () => {
  return (
    <div className=" w-full rounded-sm bg-sub p-3">
      <h2 className=" font-semibold uppercase">Submit Note</h2>
      <form
        action=""
        className=" m-auto grid w-full grid-rows-6 items-center gap-1"
      >
        <p className=" text-sm">Title Character : 20</p>
        <input
          type="text"
          className=" block w-full rounded-sm border-2 border-accent bg-transparent p-2 text-sm"
          placeholder="Title Note"
        />

        <textarea
          name=""
          className=" row-span-3 block h-full w-full rounded-sm border-2 border-accent bg-transparent p-2 text-sm"
          placeholder="Body note"
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
  func: PropTypes.func,
};

export default NoteSubmit;

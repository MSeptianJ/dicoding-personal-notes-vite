import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteSearch from "./components/NoteSearch";
import NoteSubmit from "./components/NoteSubmit";

function AppNote() {
  return (
    <div className="bg-main h-screen w-full">
      <NoteHeader />
      <div className=" bg-subA m-auto grid w-full grid-cols-3 gap-4 p-4">
        <div className=" col-span-2 grid w-full gap-5">
          <NoteList ListTitle="Notes" />

          <NoteList ListTitle="Archive" />
        </div>

        <div className=" grid w-full gap-5">
          <NoteSearch />

          <NoteSubmit />
        </div>
      </div>
    </div>
  );
}

export default AppNote;

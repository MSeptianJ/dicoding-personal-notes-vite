import { useState } from "react";
import NoteHeader from "./components/NoteHeader";
import NoteSearch from "./components/NoteSearch";
import NoteSubmit from "./components/NoteSubmit";
import NoteList from "./components/NotesComponent/NoteList";
import { getInitialData } from "./utils/utils";

function AppNote() {
  const [first] = useState(getInitialData);

  return (
    <div className=" min-h-screen w-full bg-main">
      <NoteHeader />
      <div className=" bg-subA w-ful m-auto grid grid-cols-4 justify-items-center gap-4 p-4">
        <div className=" col-span-3 grid w-full gap-5">
          <NoteList ListTitle="Notes" ListNotes={first} />

          <NoteList ListTitle="Archive" />
        </div>

        <div className="grid w-full grid-rows-6 gap-5">
          <NoteSearch />

          <NoteSubmit />
        </div>
      </div>
    </div>
  );
}

export default AppNote;

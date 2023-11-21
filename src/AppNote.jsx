import { useState } from "react";
import NoteHeader from "./components/NoteHeader";
import NoteSearch from "./components/NoteSearch";
import NoteSubmit from "./components/NoteSubmit";
import NoteList from "./components/NotesComponent/NoteList";
import { getInitialData } from "./utils/utils";

function AppNote() {
  const [first] = useState(getInitialData);
  const data = [];
  return (
    <div className=" min-h-screen w-full bg-main">
      <NoteHeader />
      <div className=" bg-subA w-ful m-auto grid gap-4 p-4 lg:grid-cols-4">
        <div className="flex w-full flex-col items-center gap-5">
          <NoteSearch />

          <NoteSubmit />
        </div>

        <div className=" grid w-full gap-5 lg:col-span-3">
          <NoteList ListTitle="Notes" ListNotes={first} />

          <NoteList ListTitle="Archive" ListNotes={data} />
        </div>
      </div>
    </div>
  );
}

export default AppNote;

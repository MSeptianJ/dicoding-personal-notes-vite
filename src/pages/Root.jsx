import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import NoteHeader from "../components/NoteHeader";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
  getNote,
  unarchiveNote,
} from "../utils/local-data";

const Root = () => {
  const [notes, setNotes] = useState(getAllNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const activeNotes = getActiveNotes().filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  const archiveNotes = getArchivedNotes().filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  const handlerGetNote = (id) => {
    return getNote(id);
  };

  const handlerSearchNote = (inputText) => {
    setSearchParams({ query: inputText.toLowerCase().trim() });
  };

  const handlerArchiveNote = (id) => {
    archiveNote(id);
    setNotes(getAllNotes());
  };

  const handlerUnarchiveNote = (id) => {
    unarchiveNote(id);
    setNotes(getAllNotes());
  };

  const handlerDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  };

  return (
    <div className=" min-h-screen w-full overflow-y-auto bg-back">
      <NoteHeader />

      <div className=" bg-subA w-ful m-auto grid max-w-screen-lg gap-4 p-4">
        <Outlet
          context={{
            notes,
            activeNotes,
            archiveNotes,
            handlerSearchNote,
            handlerUnarchiveNote,
            handlerArchiveNote,
            handlerDeleteNote,
            handlerGetNote,
          }}
        />
      </div>
    </div>
  );
};

Root.propTypes = {};

export default Root;

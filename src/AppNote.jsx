import { useState } from "react";
import NoteHeader from "./components/NoteHeader";
import NoteSearch from "./components/NoteSearch";
import NoteSubmit from "./components/NoteSubmit";
import NoteList from "./components/NotesComponent/NoteList";
import { getInitialData } from "./utils/utils";

function AppNote() {
  const [notes, setNotes] = useState(getInitialData);
  const [query, setQuery] = useState("");

  const activeNotes = notes.filter(
    (note) =>
      note.archived === false && note.title.toLowerCase().includes(query),
  );

  const archivedNotes = notes.filter(
    (note) =>
      note.archived === true && note.title.toLowerCase().includes(query),
  );

  const handlerSubmitNote = (newData) => {
    const noteData = {
      id: +new Date(),
      title: newData.title,
      body: newData.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes((prev) => [...prev, noteData]);
  };

  const handlerDeleteNote = (id) => {
    const selectedNote = notes.filter((note) => note.id != id);

    setNotes(selectedNote);
  };

  const handlerSearchNote = (query) => {
    setQuery(query.toLowerCase().trim());
  };

  const handlerArchiveNote = (id) => {
    const selectedNote = notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note,
    );

    setNotes(selectedNote);
  };

  const handlerActivateNote = (id) => {
    const selectedNote = notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note,
    );

    setNotes(selectedNote);
  };

  return (
    <div className=" min-h-screen w-full bg-main">
      <NoteHeader />

      <div className=" bg-subA w-ful m-auto grid gap-4 p-4 lg:grid-cols-4">
        <div className="flex w-full flex-col items-center gap-5">
          <NoteSearch searchFunc={handlerSearchNote} />

          <NoteSubmit submitFunc={handlerSubmitNote} />
        </div>

        <div className=" grid w-full gap-5 lg:col-span-3">
          <NoteList
            ListTitle="Notes"
            ListNotes={activeNotes}
            deleteFunc={handlerDeleteNote}
            archiveFunc={handlerArchiveNote}
            activateFunc={handlerActivateNote}
          />

          <NoteList
            ListTitle="Archived"
            ListNotes={archivedNotes}
            deleteFunc={handlerDeleteNote}
            archiveFunc={handlerArchiveNote}
            activateFunc={handlerActivateNote}
          />
        </div>
      </div>
    </div>
  );
}

export default AppNote;

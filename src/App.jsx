import { useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import NoteHeader from "./components/header/NoteHeader";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
  getNote,
  unarchiveNote,
} from "./utils/local-data";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State
  const [notes, setNotes] = useState(getAllNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  // Variables
  const navList = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Archive",
      url: "/archive",
    },
  ];

  const activeNotes = getActiveNotes().filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  const archiveNotes = getArchivedNotes().filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  // Functions
  const handlerGetNote = (id) => {
    const note = getNote(id);

    if (!note) {
      throw new Error("Page Not Found");
    }

    return note;
  };

  const handlerAddNote = (data) => {
    addNote(data);
    navigate("/");
  };

  const handlerSearchNote = (inputText) => {
    setSearchParams({ query: inputText.toLowerCase().trim() });
  };

  const handlerArchiveNote = (id) => {
    archiveNote(id);
    setNotes(getAllNotes());

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/archive");
    }
  };

  const handlerUnarchiveNote = (id) => {
    unarchiveNote(id);
    setNotes(getAllNotes());

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/");
    }
  };

  const handlerDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/");
    }
  };

  return (
    <div className=" min-h-screen w-full overflow-y-auto bg-back">
      <NoteHeader navList={navList} />

      <div className=" bg-subA w-ful m-auto grid max-w-screen-lg gap-4 p-4">
        <Outlet
          context={{
            notes,
            activeNotes,
            archiveNotes,
            handlerAddNote,
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

export default App;

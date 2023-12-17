import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import NoteHeader from "../components/NoteHeader";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";

const Root = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const activeNotes = getActiveNotes().filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  const archiveNotes = getArchivedNotes().filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  const handlerSearchNote = (inputText) => {
    setSearchParams({ query: inputText.toLowerCase().trim() });
  };

  const handlerArchiveNote = (id) => {
    archiveNote(id);
    navigate("/");
  };

  const handlerUnarchiveNote = (id) => {
    unarchiveNote(id);
    navigate("/");
  };

  const handlerDeleteNote = (id) => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <div className=" bg-back min-h-screen w-full overflow-y-auto">
      <NoteHeader />

      <div className=" bg-subA w-ful m-auto grid max-w-screen-lg gap-4 p-4">
        <Outlet
          context={{
            activeNotes,
            archiveNotes,
            handlerSearchNote,
            handlerUnarchiveNote,
            handlerArchiveNote,
            handlerDeleteNote,
          }}
        />
      </div>
    </div>
  );
};

Root.propTypes = {};

export default Root;

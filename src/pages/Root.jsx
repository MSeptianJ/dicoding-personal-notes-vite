import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
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
  const location = useLocation();
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
    navigate(location.pathname);
  };

  const handlerUnarchiveNote = (id) => {
    unarchiveNote(id);
    navigate(location.pathname);
  };

  const handlerDeleteNote = (id) => {
    deleteNote(id);
    navigate(location.pathname);
  };

  return (
    <div className=" min-h-screen w-full overflow-y-auto bg-back">
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

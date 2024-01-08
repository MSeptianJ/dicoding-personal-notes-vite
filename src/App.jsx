import { useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import NoteHeader from "./components/header/NoteHeader";
import { GetAuthContexts } from "./contexts/AuthContext";
import { IconArchive, IconHome, IconLogIn, IconRegister } from "./icon";
import { addNote, getNote } from "./utils/local-data";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  getUserLogged,
  putAccessToken,
  unarchiveNote,
} from "./utils/network-data";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginClientSide } = GetAuthContexts();

  // State
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [activeNotes, setActiveNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);

  // Variables
  const navList = [
    {
      text: "Home",
      url: "/",
      icon: <IconHome />,
    },
    {
      text: "Archive",
      url: "/archive",
      icon: <IconArchive />,
    },
    {
      text: "Log In",
      url: "/",
      icon: <IconLogIn />,
    },
    {
      text: "Register",
      url: "/register",
      icon: <IconRegister />,
    },
  ];

  const filteredActiveNotes = activeNotes.filter((note) =>
    note.title.toLowerCase().includes(query),
  );

  const filteredArchiveNotes = archiveNotes.filter((note) =>
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

  const handlerArchiveNote = async (id) => {
    archiveNote(id);

    const { data } = await getActiveNotes();
    setActiveNotes(data);

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/archive");
    }
  };

  const handlerUnarchiveNote = async (id) => {
    unarchiveNote(id);

    const { data } = await getArchivedNotes(id);
    setArchiveNotes(data);

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/");
    }
  };

  const handlerDeleteNote = async (id) => {
    deleteNote(id);

    const { data: activeData } = await getActiveNotes();
    setActiveNotes(activeData);

    const { data: archiveData } = await getActiveNotes();
    setActiveNotes(archiveData);

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/");
    }
  };

  const onloginSuccess = async ({ accessToken }) => {
    navigate("/");
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    loginClientSide(data);
  };

  const onLogOut = () => {
    navigate("/login");
    putAccessToken("");
    loginClientSide();
  };

  return (
    <div className=" min-h-screen w-full overflow-y-auto bg-back">
      <NoteHeader navList={navList} logOutFunc={onLogOut} />

      <div className=" bg-subA w-ful m-auto grid max-w-screen-lg gap-4 p-4">
        <Outlet
          context={{
            activeNotes,
            archiveNotes,
            handlerAddNote,
            handlerSearchNote,
            handlerUnarchiveNote,
            handlerArchiveNote,
            handlerDeleteNote,
            handlerGetNote,
            onloginSuccess,
            filteredActiveNotes,
            setActiveNotes,
            filteredArchiveNotes,
            setArchiveNotes,
          }}
        />
      </div>
    </div>
  );
};

export default App;

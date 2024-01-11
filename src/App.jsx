import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import NoteHeader from "./components/header/NoteHeader";
import { GetAuthContexts } from "./contexts/AuthContext";
import { IconArchive, IconHome, IconLogIn, IconRegister } from "./icon";
import {
  addNote,
  archiveNote,
  deleteNote,
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

  // Functions
  const filteredNotes = (notes) => {
    const filtered = notes?.filter((note) =>
      note.title.toLowerCase().includes(query),
    );

    return filtered;
  };

  const handlerAddNote = async (data) => {
    await addNote(data);
    navigate("/");
  };

  const handlerSearchNote = (inputText) => {
    setSearchParams({ query: inputText.toLowerCase().trim() });
  };

  const handlerArchiveNote = async (id) => {
    await archiveNote(id);

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/archive");
    }
  };

  const handlerUnarchiveNote = async (id) => {
    await unarchiveNote(id);

    const notePath = location.pathname.includes("/note");

    if (notePath) {
      navigate("/");
    }
  };

  const handlerDeleteNote = async (id) => {
    await deleteNote(id);

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
    <div className=" min-h-screen w-full overflow-y-auto bg-back transition-colors dark:bg-gray-700">
      <NoteHeader navList={navList} logOutFunc={onLogOut} />

      <div className=" bg-subA w-ful m-auto grid max-w-screen-lg gap-4 p-4">
        <Outlet
          context={{
            query,
            handlerAddNote,
            handlerSearchNote,
            handlerUnarchiveNote,
            handlerArchiveNote,
            handlerDeleteNote,
            onloginSuccess,
            filteredNotes,
            setSearchParams,
          }}
        />
      </div>
    </div>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import NoteHeader from "../components/NoteHeader";

const Root = () => {
  return (
    <div className=" min-h-screen w-full bg-main">
      <NoteHeader />

      <div className=" bg-subA w-ful m-auto grid max-w-screen-lg gap-4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

Root.propTypes = {};

export default Root;

import { Outlet } from "react-router-dom";
import NoteHeader from "../components/NoteHeader";

const Root = () => {
  return (
    <div className=" bg-back min-h-screen w-full">
      <NoteHeader />

      <div className=" bg-subA w-ful m-auto grid max-w-screen-lg gap-4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

Root.propTypes = {};

export default Root;

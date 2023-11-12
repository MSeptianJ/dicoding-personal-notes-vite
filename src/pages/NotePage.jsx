import NoteHeader from "./components/NoteHeader";

function NotePage() {
  return (
    <div className=" m-auto grid h-screen w-full grid-rows-6 justify-items-center bg-zinc-600">
      <NoteHeader />
      <div></div>
    </div>
  );
}

export default NotePage;

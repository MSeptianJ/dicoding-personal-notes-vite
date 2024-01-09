import { useOutletContext } from "react-router-dom";
import SubmitInput from "./SubmitInput";

const SubmitPage = () => {
  const { handlerAddNote } = useOutletContext();

  const submitHandler = (data) => {
    handlerAddNote(data);
  };

  return (
    <div className=" bg-sub m-auto w-full rounded-sm bg-primary px-6 py-4 text-back shadow-lg lg:w-1/2">
      <h2 className=" text-xl font-semibold uppercase">Submit Note</h2>

      <SubmitInput submitFunc={submitHandler} />
    </div>
  );
};

export default SubmitPage;

import { useOutletContext } from "react-router-dom";
import SubmitInput from "./SubmitInput";
import { GetLocaleContexts } from "../../contexts/LocaleContext";

const SubmitPage = () => {
  const { locale } = GetLocaleContexts();
  const { handlerAddNote } = useOutletContext();

  const submitHandler = (data) => {
    handlerAddNote(data);
  };

  return (
    <div className=" bg-sub m-auto w-full rounded-sm bg-primary px-6 py-4 text-back shadow-lg lg:w-1/2">
      <h2 className=" text-xl font-semibold uppercase">
        {locale === "en" ? "Submit Note" : "Tambah Catatan"}
      </h2>

      <SubmitInput locale={locale} submitFunc={submitHandler} />
    </div>
  );
};

export default SubmitPage;

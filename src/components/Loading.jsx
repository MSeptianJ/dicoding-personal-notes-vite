import LOADICON from "../assets/img/loading.svg";

const Loading = () => {
  return (
    <div className="m-auto w-full">
      <img src={LOADICON} alt="Loading..." className="h-full w-full" />;
    </div>
  );
};

Loading.propTypes = {};

export default Loading;

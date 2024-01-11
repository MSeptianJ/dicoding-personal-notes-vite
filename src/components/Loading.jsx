import LOADICON from "../assets/img/loading.svg";

const Loading = () => {
  return (
    <div className="m-auto w-full text-center">
      <img src={LOADICON} alt="Loading..." className="h-full w-full" />
      <h4 className="w-full">Loading ...</h4>
    </div>
  );
};

Loading.propTypes = {};

export default Loading;

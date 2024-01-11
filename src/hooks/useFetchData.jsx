import { useCallback, useEffect, useState } from "react";

const useFetchData = (fetchFunc, id) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const checkFunction = async () => {
    if (!id) {
      const noIdRespond = await fetchFunc();
      return noIdRespond;
    }

    const idRespond = await fetchFunc(id);
    return idRespond;
  };

  const startFetching = useCallback(async () => {
    setIsLoading(true);
    const { error, data } = await checkFunction();

    if (!error) {
      setIsLoading(false);
      setData(data);
      setIsSuccess(true);
    } else {
      setIsError(true);
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    startFetching();
  }, [startFetching]); // eslint-disable-line

  return { data, isLoading, isSuccess, isError };
};

export default useFetchData;

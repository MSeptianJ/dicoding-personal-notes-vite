import { useEffect, useState } from "react";

const useFetchData = (fetchFunc) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchFunc
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
        setIsSuccess(true);
        if (response.error) {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  }, []); // eslint-disable-line

  return { data, isLoading, isSuccess, isError };
};

export default useFetchData;

import { useState } from "react";
import nProgress from "nprogress";

export default function useApi(apiFunc, { isThrowErr = false } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function request(...params) {
    setIsLoading(true);
    nProgress.start();

    try {
      const res = await apiFunc(...params);
      setIsLoading(false);
      setData(res);
      setError();
      nProgress.done();
      console.log(res);
      return res;
    } catch (err) {
      console.log("Server side error", err.response);
      setIsLoading(false);
      setError(err.response);
      setData();
      nProgress.done();

      if (isThrowErr) {
        throw err;
      }
    }
  }

  return { isLoading, res: data, error, request };
}

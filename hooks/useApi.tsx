import { useState } from "react";

const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  //Calling api
  const request = async (...args: any[]) => {
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setData(response.data);
  };

  return { data, error, loading, request };
};

export default useApi;

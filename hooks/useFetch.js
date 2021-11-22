import { useEffect, useState } from 'react';
import { getData } from '../services';
const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const json = await fetch('https://asufyanaziz.vercel.app/api');
      const responseJson = await json.json();
      const payload = await responseJson;

      if (payload) {
        setData(payload.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading };
};

export default useFetch;

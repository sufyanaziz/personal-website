import { useEffect, useState } from 'react';
import { getData } from '../services';
const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
          mode: 'no-cors',
        },
      });
      const responseJson = await res.json();
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

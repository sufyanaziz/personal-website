import { useEffect, useState } from 'react';
import { getData } from '../services';
const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const payload = await getData('http://localhost:3000/api');
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

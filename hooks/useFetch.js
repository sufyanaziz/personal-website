import { useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api', {
        method: 'GET',
      });
      const responseJSON = await response.json();
      const payload = await responseJSON;
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

import { useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api', {
      method: 'GET',
    });
    const payload = await await response.json();
    if (payload) {
      setData(payload.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading };
};

export default useFetch;

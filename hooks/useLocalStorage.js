import { useState, useEffect } from 'react';

const getSavedValue = (key, initialValue) => {
  const storageValue = JSON.parse(localStorage.getItem(key));
  if (storageValue) return storageValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

import { useState } from 'react';

type Value<T> = T | undefined;

function useLocalStorage<T>(
  key: string,
  initialValue?: Value<T>
): [Value<T>, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<Value<T>>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

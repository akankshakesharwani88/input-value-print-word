import { useEffect, useState } from "react";

export const useDeBounce = (inputValue, delay = 300) => {
  const [debouncingValue, setDebouncingValue] = useState(inputValue);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncingValue(inputValue), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);
  return debouncingValue;
};

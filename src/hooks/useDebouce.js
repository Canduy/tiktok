import { useEffect, useState } from "react";

export default function useDebouce(value, delay) {
  const [deboucedValue, setDeboucedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDeboucedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return deboucedValue;
}

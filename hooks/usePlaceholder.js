import { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com";

export default (defaultCount = 0) => {
  const [count, setCount] = useState(defaultCount);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const parsedCount = parseInt(count);
    if (isNaN(parsedCount)) {
      setError("Hey! This needs to be a number; try again.");
      return;
    }

    if (0 > parsedCount) {
      setError("A negative number makes no sense here, friend.");
      return;
    }

    try {
      setError("");
      fetch(`${baseUrl}/photos?_start=0&_limit=${count}`)
        .then((response) => response.json())
        .then(setData);
    } catch (e) {
      setError(e.error);
    }
  }, [count]);

  return { data, setCount, error };
};

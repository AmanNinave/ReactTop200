import { useState } from "react";

// Custom Hook for managing a counter
const useCustomHook = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};
export default useCustomHook;


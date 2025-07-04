// export const Counter = () => {
//   let count = 1;
//   return <button onClick={() => ++count}>count is {count}</button>;
// };

import { Button } from "./components/Button/Button";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const setCounterHandler = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return <Button onClick={setCounterHandler}>count is {count}</Button>;
};

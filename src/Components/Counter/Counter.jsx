import { useMemo, useState } from "react";

const Counter = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(2);

  const incrementCountOneHandler = () => {
    setCountOne((prevCountOne) => prevCountOne + 1);
  };

  const incrementCountTwoHandler = () => {
    setCountTwo((prevCountTwo) => prevCountTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCountOneHandler}>
          count one is equal to {countOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCountTwoHandler}>
          count two is equal to {countTwo}
        </button>
      </div>
    </div>
  );
};

export default Counter;

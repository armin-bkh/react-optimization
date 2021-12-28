import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponents = () => {
  const [age, setAge] = useState(0);
  const [score, setScore] = useState(0);

  const ageClickHandler = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const scoreClickHandler = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={ageClickHandler}>age</Button>
      <Count text="score" count={score} />
      <Button handleClick={scoreClickHandler}>count</Button>
    </div>
  );
};

export default ParentComponents;

import { memo } from "react";

const Title = () => {
  console.log("rendering title");
  return <h1>title component</h1>;
};

export default memo(Title);

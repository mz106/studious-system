import { useState } from "react";

const HomePanel = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Add 1</button>
    </div>
  );
};

export default HomePanel;

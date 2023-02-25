import { useState } from 'react';

export default function LikeButton() {
  const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((currState) => currState + 1);
  };
  return (
    <button
      onClick={clickHandler}
      style={{ backgroundColor: colorArray[count % colorArray.length] }}
    >
      {count} {count === 1 ? 'Like' : 'Likes'}
    </button>
  );
}

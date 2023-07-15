import { useState } from "react";
const Counter = () => {
  let [count, setcount] = useState(0);

  return (
    <div className="parent">
      <div className="area">
        <p>{count}</p>
        <div className="buttons">
          <button
            type="button"
            className="add"
            onClick={() => {
              setcount(count + 1);
            }}
          >
            Add
          </button>
          <button
            type="button"
            className="reset"
            onClick={() => {
              setcount(0);
            }}
          >
            Reset
          </button>
          <button
            type="button"
            className="sub"
            onClick={() => {
              if (count > 0) setcount(count - 1);
              else setcount(0);
            }}
          >
            Sub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

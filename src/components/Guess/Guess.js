import React from "react";
import { range } from "../../utils";

const Cell = ({ letter, status }) => {
  // constants
  const className = status ? `cell ${status}` : "cell";
  // JSX
  return <span className={className}>{letter}</span>;
};

function Guess({ value }) {
  // JSX
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num].letter : undefined}
          status={value ? value[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;

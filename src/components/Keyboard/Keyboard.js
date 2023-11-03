import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const getStatusByLetter = (validatedGuesses) => {
  // initialize status-map
  const statusObj = {};
  // generate status-map based on validated guesses
  // e.g. { 'A': 'misplaced', 'T': 'correct', 'G': 'incorrect' }
  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });
  // return status-map
  return statusObj;
};

function Keyboard({ validatedGuesses }) {
  // constants
  let statusByLetter = getStatusByLetter(validatedGuesses);
  // JSX
  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div key={index} className="row">
          {row.map((letter) => {
            const status = statusByLetter[letter];
            const className = status ? `key ${status}` : "key";
            return (
              <div key={letter} className={className}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

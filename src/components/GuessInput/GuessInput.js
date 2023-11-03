import React from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
  // states
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  // handlers
  const handleSubmit = (event) => {
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
    event.preventDefault();
  };
  // JSX
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disabled}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextTentativeGuess = event.target.value.toLocaleUpperCase();
          setTentativeGuess(nextTentativeGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;

import React, { useState } from "react";

const Dice = ({ onRoll }) => {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDice(value);
    onRoll(value);
  };

  return (
    <div>
      <h3>Dice: {dice}</h3>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Dice;

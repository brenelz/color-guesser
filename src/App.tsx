import React, { useState } from 'react';
import { generateColors, getCorrectColor } from './colors';
import Game from './Game';

const NUM_COLORS = 3;

function App() {
  const [game, setGame] = useState(0);

  const colors = generateColors(NUM_COLORS);
  const correctColor = getCorrectColor(colors);

  const nextGame = () => {
    setGame(game + 1);
  }

  return (
    <Game
      key={game}
      nextGame={nextGame}
      colors={colors}
      correctColor={correctColor}
    />
  )
}

export default App

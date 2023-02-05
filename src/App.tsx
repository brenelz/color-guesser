import React, { useState } from 'react';
import { generateColors, getCorrectColor } from './colors';

const NUM_COLORS = 3;

function App() {
  const [colors, setColors] = useState(generateColors(NUM_COLORS));
  const [correctColor, setCorrectColor] = useState(getCorrectColor(colors));
  const [guess, setGuess] = useState<string | undefined>(undefined);
  const wonGame = guess === correctColor;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 'auto',
      }}
    >
      <h1>Color Codes</h1>
      <h2>{correctColor}</h2>
      <h2>What color is this?</h2>

      <div data-testid="color-container" style={{ display: 'flex', gap: 10 }}>
        {colors.map(color => (
          <button
            key={color}
            onClick={() => {
              setGuess(color);
            }}
            style={{
              height: 100,
              width: 100,
              cursor: 'pointer',
              background: color
            }}
            data-testid={color === correctColor ? "correct-color" : "incorrect-color"}>
          </button>
        ))}
      </div>

      {guess ?
        wonGame ? <div style={{ textAlign: 'center' }}>
          <p>Correct!</p>
          <p><button onClick={() => {
            setGuess(undefined);
            const nextColors = generateColors(NUM_COLORS);
            setColors(nextColors);
            setCorrectColor(getCorrectColor(nextColors))
          }}>Play Again</button></p>
        </div>
          : <p>Incorrect!</p>
        : null
      }
    </div>
  )
}

export default App

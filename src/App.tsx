import React from 'react';

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Color Codes</h1>
      {/* Randomly generate the HEX below. */}
      <h2>#FFFFFF</h2>
      <h2>What color is this?</h2>
      {/*
        <div data-testid="color-container">
          <div data-testid="incorrect-color"></div>
          <div data-testid="correct-color"></div>
        </div>
      */}
    </div>
  )
}

export default App

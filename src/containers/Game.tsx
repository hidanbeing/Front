import React from 'react';
import DrawingContainer from './DrawingContainer.tsx';

const Game: React.FC = () => {
  return (
    <div>
      <h1>Game Page</h1>
      <p>Welcome to the game page!</p>
      <DrawingContainer />
    </div>
  );
};

export default Game;

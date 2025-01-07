import React from "react";

interface PlayerInfoProps {
  playerName: string;
  score: number;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ playerName, score }) => {
  return (
    <div style={styles.container}>
      <h3>{playerName}</h3>
      <p>Score: {score}</p>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    padding: "10px",
    width: "200px",
    textAlign: "center" as const,
  },
};

export default PlayerInfo;

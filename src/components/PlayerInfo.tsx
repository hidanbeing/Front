import React from 'react';

interface PlayerInfoProps {
  playerName: string;
  score: number;
  image: string;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({
  playerName,
  score,
  image,
}) => {
  return (
    <div>
      <img src={image} alt={`${playerName}`} style={styles.image} />
      <h3 style={styles.name}>{playerName}</h3>
      <p style={styles.score}>Score: {score}</p>
    </div>
  );
};

const styles = {
  image: {
    width: '50px',
    // height: '50px',
    marginBottom: '10px',
    borderRadius: '50%', // 이미지를 둥글게 표시
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    margin: 0,
  },
  score: {
    fontSize: '14px',
    color: '#555',
    margin: 0,
  },
};

export default PlayerInfo;

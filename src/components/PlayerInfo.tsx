import React from 'react';
import '../styles/Game/playerinfo.scss';

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
    <div className="player-info">
      <img src={image} alt={`${playerName}`} className="player-info-image" />
      <h3 className="player-info-name">{playerName}</h3>
      <p className="player-info-score">Score: {score}</p>
    </div>
  );
};

export default PlayerInfo;

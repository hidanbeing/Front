import React from 'react';
import '../styles/ranking.scss';
import banner from '../assets/ranking/banner.png';

const Ranking: React.FC = () => {
  return (
    <div className="ranking-container">
      {/* 배너 */}
      <div className="ranking-banner">
        <img src={banner} alt="Ranking Banner" />
      </div>
      {/* 파란 박스 */}
      <div className="ranking-box">
        <div className="ranking-content">
          <h3>
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
            <li>Player 4</li>
            <li>Player 5</li>
            <li>Player 6</li>
            <li>Player 7</li>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Ranking;

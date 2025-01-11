import React from 'react';
import R_yellow from '../assets/alpabet_yellow/R.png';
import A_yellow from '../assets/alpabet_yellow/A.png';
import N_yellow from '../assets/alpabet_yellow/N.png';
import K_yellow from '../assets/alpabet_yellow/K.png';
import I_yellow from '../assets/alpabet_yellow/I.png';
import G_yellow from '../assets/alpabet_yellow/G.png';
import Exclamation_yellow from '../assets/alpabet_yellow/Exclamation.png';
import Heart_yellow from '../assets/alpabet_yellow/Heart.png';
import W_yellow from '../assets/alpabet_yellow/W.png';
import './ranking.scss';

const Ranking: React.FC = () => {
  return (
    <div className="ranking-container">
      {/* RANKING 텍스트 */}
      <div className="text-container">
        <img src={Heart_yellow} alt="Heart" className="alpabet" />
        <img src={R_yellow} alt="R" className="alpabet" />
        <img src={A_yellow} alt="A" className="alpabet" />
        <img src={N_yellow} alt="N" className="alpabet" />
        <img src={K_yellow} alt="K" className="alpabet" />
        <img src={I_yellow} alt="I" className="alpabet" />
        <img src={N_yellow} alt="N" className="alpabet" />
        <img src={G_yellow} alt="G" className="alpabet" />
        <img src={Heart_yellow} alt="Heart" className="alpabet" />
      </div>

      {/* 랭킹 박스 */}
      <div className="ranking-box-container">
        <div className="rank-box second">
          <span>2</span>
        </div>
        <div className="rank-box first">
          <span>1</span>
        </div>
        <div className="rank-box third">
          <span>3</span>
        </div>
      </div>

      {/* WIN 텍스트 */}
      <div className="text-container">
        <img src={W_yellow} alt="W" className="alpabet" />
        <img src={I_yellow} alt="I" className="alpabet" />
        <img src={N_yellow} alt="N" className="alpabet" />
        <img src={Exclamation_yellow} alt="Exclamation" className="alpabet" />
      </div>
    </div>
  );
};

export default Ranking;

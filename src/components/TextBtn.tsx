import React from 'react';
import P_blue from '../assets/alpabet_blue/P.png';
import L_blue from '../assets/alpabet_blue/L.png';
import A_blue from '../assets/alpabet_blue/A.png';
import Y_blue from '../assets/alpabet_blue/Y.png';
import Play_blue from '../assets/alpabet_blue/Play.png';
import Heart_blue from '../assets/alpabet_blue/Heart.png';
import C_blue from '../assets/alpabet_blue/C.png';
import R_blue from '../assets/alpabet_blue/R.png';
import E_blue from '../assets/alpabet_blue/E.png';
import T_blue from '../assets/alpabet_blue/T.png';
import Exclamation_blue from '../assets/alpabet_blue/Exclamation.png';
import I_blue from '../assets/alpabet_blue/I.png';
import N_blue from '../assets/alpabet_blue/N.png';
import V_blue from '../assets/alpabet_blue/V.png';

import R_redpink from '../assets/alpabet_redpink/R.png';
import O_redpink from '../assets/alpabet_redpink/O.png';
import M_redpink from '../assets/alpabet_redpink/M.png';
import S_redpink from '../assets/alpabet_redpink/S.png';

import '../styles/text.scss';

//play btn

export const PlayBtn: React.FC = () => {
  return (
    <div className="play-btn">
      <img src={Play_blue} className="alpabet" />
      <img src={P_blue} className="alpabet" />
      <img src={L_blue} className="alpabet" />
      <img src={A_blue} className="alpabet" />
      <img src={Y_blue} className="alpabet" />
    </div>
  );
};

export const CreateBtn: React.FC = () => {
  return (
    <div className="create-btn">
      <img src={Heart_blue} className="alpabet" />
      <img src={C_blue} className="alpabet" />
      <img src={R_blue} className="alpabet" />
      <img src={E_blue} className="alpabet" />
      <img src={A_blue} className="alpabet" />
      <img src={T_blue} className="alpabet" />
      <img src={E_blue} className="alpabet" />
    </div>
  );
};

export const InviteBtn: React.FC = () => {
  return (
    <div className="invite-btn">
      <img src={Exclamation_blue} className="alpabet" />
      <img src={I_blue} className="alpabet" />
      <img src={N_blue} className="alpabet" />
      <img src={V_blue} className="alpabet" />
      <img src={I_blue} className="alpabet" />
      <img src={T_blue} className="alpabet" />
      <img src={E_blue} className="alpabet" />
    </div>
  );
};

export const RoomsBtn: React.FC = () => {
  return (
    <div className="rooms-btn">
      <img src={R_redpink} className="alpabet" />
      <img src={O_redpink} className="alpabet" />
      <img src={O_redpink} className="alpabet" />
      <img src={M_redpink} className="alpabet" />
      <img src={S_redpink} className="alpabet" />
    </div>
  );
};

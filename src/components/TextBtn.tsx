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
import E_redpink from '../assets/alpabet_redpink/E.png';
import T_redpink from '../assets/alpabet_redpink/T.png';
import I_redpink from '../assets/alpabet_redpink/I.png';
import N_redpink from '../assets/alpabet_redpink/N.png';
import G_redpink from '../assets/alpabet_redpink/G.png';

import S_darkblue from '../assets/alpabet_darkblue/S.png';
import E_darkblue from '../assets/alpabet_darkblue/E.png';
import T_darkblue from '../assets/alpabet_darkblue/T.png';
import I_darkblue from '../assets/alpabet_darkblue/I.png';
import N_darkblue from '../assets/alpabet_darkblue/N.png';
import G_darkblue from '../assets/alpabet_darkblue/G.png';
import Q_darkblue from '../assets/alpabet_darkblue/Q.png';
import U_darkblue from '../assets/alpabet_darkblue/U.png';

import '../styles/text.scss';

//play btn

export const PlayBtn: React.FC = () => {
  return (
    <div className="text-btn">
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
    <div className="text-btn">
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
    <div className="text-btn">
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
    <div className="text-btn">
      <img src={R_redpink} className="alpabet" />
      <img src={O_redpink} className="alpabet" />
      <img src={O_redpink} className="alpabet" />
      <img src={M_redpink} className="alpabet" />
      <img src={S_redpink} className="alpabet" />
    </div>
  );
};

export const RoomSettingBtn: React.FC = () => {
  return (
    <div className="text-btn">
      <img src={R_redpink} className="alpabet" />
      <img src={O_redpink} className="alpabet" />
      <img src={O_redpink} className="alpabet" />
      <img src={M_redpink} className="alpabet" />{' '}
      <img src={S_redpink} className="alpabet" />
      <img src={E_redpink} className="alpabet" />
      <img src={T_redpink} className="alpabet" />
      <img src={T_redpink} className="alpabet" />
      <img src={I_redpink} className="alpabet" />
      <img src={N_redpink} className="alpabet" />
      <img src={G_redpink} className="alpabet" />
    </div>
  );
};

export const SettingBtn: React.FC = () => {
  return (
    <div className="dark_text-btn">
      <img src={S_darkblue} className="alpabet" />
      <img src={E_darkblue} className="alpabet" />
      <img src={T_darkblue} className="alpabet" />
      <img src={T_darkblue} className="alpabet" />
      <img src={I_darkblue} className="alpabet" />
      <img src={N_darkblue} className="alpabet" />
      <img src={G_darkblue} className="alpabet" />
    </div>
  );
};

export const QuitBtn: React.FC = () => {
  return (
    <div className="dark_text-btn">
      <img src={Q_darkblue} className="alpabet" />
      <img src={U_darkblue} className="alpabet" />
      <img src={I_darkblue} className="alpabet" />
      <img src={T_darkblue} className="alpabet" />
    </div>
  );
};

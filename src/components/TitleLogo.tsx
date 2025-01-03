import React from 'react';
import D_pink  from "../assets/alpabet_pink/D.png"
import O_pink  from "../assets/alpabet_pink/O.png"
import K_pink  from "../assets/alpabet_pink/K.png"
import L_pink  from "../assets/alpabet_pink/L.png"
import I_pink  from "../assets/alpabet_pink/I.png"
import E_pink  from "../assets/alpabet_pink/E.png"
import N_pink  from "../assets/alpabet_pink/N.png"
import G_pink  from "../assets/alpabet_pink/G.png"

import "../styles/titleLogo.scss"

function TitleLogo() {
  return (
    <div className="Logo">
        <div className='title-up'>
      <img src={D_pink} className='alpabet'/>
      <img src={O_pink} className='alpabet'/>
      <img src={O_pink} className='alpabet'/>
      <img src={D_pink} className='alpabet'/>
      <img src={L_pink} className='alpabet'/>
      <img src={E_pink} className='alpabet'/>
      </div>
      <div className='title-down'>
      <img src={K_pink} className='alpabet'/>
      <img src={I_pink} className='alpabet'/>
      <img src={N_pink} className='alpabet'/>
      <img src={G_pink} className='alpabet'/>
      
      </div>
    </div>
  );
}

export default TitleLogo;

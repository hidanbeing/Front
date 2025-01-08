import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import "../../styles/box.scss"

function CharacterBox() {
  return (
      <div className='character-box'>
        <div className='text'>SELECT CHARACTER</div>
        <div className='select-div'>
            <IoIosArrowBack size={30}/>
            <img src={require('../../assets/character/character2.png')}/>
            <IoIosArrowForward size={30}/>
        </div>
        
      </div>
  );
}

export default CharacterBox;

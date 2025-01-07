import React from 'react';

import "../../styles/box.scss"

function CharacterBox() {
  return (
      <div className='box'>
        <img src={require('../../assets/character/character1.png')}/>
      </div>
  );
}

export default CharacterBox;

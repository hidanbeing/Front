import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import '../../styles/box.scss';

function CharacterBox() {
  const [character, setCharacter] = useState(0);

  const changeCharacterPlus = () => {
    setCharacter((character + 1) % 6);
  };

  const changeCharacterMinus = () => {
    setCharacter(character === 0 ? 5 : character - 1);
  };

  return (
    <div className="character-box">
      <div className="text">SELECT CHARACTER</div>
      <div className="select-div">
        <button onClick={changeCharacterMinus} className="btn">
          <IoIosArrowBack size={30} />
        </button>

        {character === 0 ? (
          <img src={require('../../assets/character/character1.png')} />
        ) : null}
        {character === 1 ? (
          <img src={require('../../assets/character/character2.png')} />
        ) : null}
        {character === 2 ? (
          <img src={require('../../assets/character/character3.png')} />
        ) : null}
        {character === 3 ? (
          <img src={require('../../assets/character/character4.png')} />
        ) : null}
        {character === 4 ? (
          <img src={require('../../assets/character/character5.png')} />
        ) : null}
        {character === 5 ? (
          <img src={require('../../assets/character/character6.png')} />
        ) : null}

        <button onClick={changeCharacterPlus} className="btn">
          <IoIosArrowForward size={30} />
        </button>
      </div>
      <div className="input-div">
        <input className="input" placeholder="USERNAME" />
      </div>
    </div>
  );
}

export default CharacterBox;

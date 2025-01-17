import React, { useContext, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import '../../styles/box.scss';
import { UserContext } from '../../contexts/UserContext.ts';

function CharacterBox() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('CharacterBox must be used within a UserProvider');
  }

  const { user, setUser } = context; // 이제 context가 undefined가 아님을 보장

  const [character, setCharacter] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setUser({ ...user, name: newName });
  };

  const changeCharacterPlus = () => {
    let num = (character + 1) % 6;
    setCharacter(num);
    setUser({ ...user, characterNum: num });
  };

  const changeCharacterMinus = () => {
    let num = character === 0 ? 5 : character - 1;
    setCharacter(num);
    setUser({ ...user, characterNum: num });
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
        <input
          className="input"
          placeholder="USERNAME"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default CharacterBox;

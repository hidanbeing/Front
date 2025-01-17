import React, { useContext } from 'react';
import TitleLogo from '../../components/TitleLogo.tsx';
import { PlayBtn } from '../../components/TextBtn.tsx';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';
import CharacterBox from './CharacterBox.tsx';
import { UserContext } from '../../contexts/UserContext.ts';

function Home() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Home must be used within a UserProvider');
  }

  const { user } = context;

  const onClick = () => {
    console.log(user);
    //서버에 user 넘기기
  };

  return (
    <div className="home">
      <div className="logo">
        <TitleLogo />
        <div className="box">
          <CharacterBox />
        </div>
        <Link to="/lobby" onClick={onClick}>
          <PlayBtn />
        </Link>
      </div>
    </div>
  );
}

export default Home;

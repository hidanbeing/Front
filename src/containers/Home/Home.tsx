import React from 'react';
import TitleLogo from '../../components/TitleLogo.tsx';
import { PlayBtn } from '../../components/TextBtn.tsx';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';
import CharacterBox from './CharacterBox.tsx';

function Home() {
  return (
    <div className="home">
      <div className="logo">
        <TitleLogo />
        <div className="box">
          <CharacterBox />
        </div>
        <Link to="/lobby">
          <PlayBtn />
        </Link>
      </div>
    </div>
  );
}

export default Home;

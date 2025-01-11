import React from 'react';
import TitleLogo from '../../components/TitleLogo.tsx';
import { PlayBtn } from '../../components/TextBtn.tsx';
import Box from '../../components/Box.tsx';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';
import CharacterBox from './CharacterBox.tsx';
import Ranking from '../Ranking.tsx'; //랭킹 화면 보이게 일단 여따가 놓을게

function Home() {
  return (
    <div className="home">
      {
        <div className="logo">
          <TitleLogo />
          <div className="box">
            <CharacterBox />
          </div>
          <Link to="/lobby">
            <PlayBtn />
          </Link>
        </div>

        /* 테스트용으로 Ranking 컴포넌트 바로 렌더링 */
      }
      <Ranking />
    </div>
  );
}

export default Home;

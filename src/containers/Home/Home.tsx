import React, { useContext, useEffect } from 'react';
import TitleLogo from '../../components/TitleLogo.tsx';
import { PlayBtn } from '../../components/TextBtn.tsx';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';
import CharacterBox from './CharacterBox.tsx';
import { UserContext } from '../../contexts/UserContext.ts';
import axios from 'axios';

function Home() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Home must be used within a UserProvider');
  }

  const { user, setUser } = context;

  const onClick = () => {
    console.log(user);
    //서버에 user 넘기기
    axios
      .post('http://35.216.51.107:8080/api/v1/user', {
        characterId: user.characterNum,
        userName: user.name,
      })
      .then(function (response) {
        console.log(response);

        //UserContext에 userId 추가, data 속 data ...
        const { userId } = response.data.data;

        setUser({
          ...user,
          userId,
        });

        console.log('서버가 보낸 유저 아이디 UserID:', userId);
      });
  };

  useEffect(() => {
    console.log('업데이트된 UserContext:', user);
  }, [user]); //user 상태 변경될 때마다 반복

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

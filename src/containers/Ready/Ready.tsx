import React from 'react';
import { PlayBtn, QuitBtn, SettingBtn } from '../../components/TextBtn.tsx';
import { Link } from 'react-router-dom';
import UserList from './UserList.tsx';
import '../../styles/ready.scss';
import ChatBox from './ChatBox.tsx';

function Ready() {
  return (
    <div className="ready-container">
      <div className="ready-header">
        <Link to="/roomsetting" className="header-button">
          <SettingBtn />
        </Link>
        <Link to="/lobby" className="header-button">
          <QuitBtn />
        </Link>
      </div>
      <div className="ready-main">
        <UserList />
      </div>
      <div className="ready-bottom">
        <ChatBox />
        <div className="settings-play-container">
          <div className="room-settings">
            <h5>
              방이름: 방
              <br />
              비밀번호 여부: o<br />
              최대 플레이어: 4<br />
              게임 시간: 80s
              <br />
              라운드 수: 5<br />
              힌트: o<br />
              주제: animal
            </h5>
          </div>
          <div className="play-btnn">
            <Link to="/game">
              <PlayBtn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;

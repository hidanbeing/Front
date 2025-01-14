import React from 'react';
import { PlayBtn } from '../../components/TextBtn.tsx';
import { Link } from 'react-router-dom';
import { UserList } from './UserList.tsx';
import '../../styles/ready.scss';
import settingImage from '../../assets/ready/setting.png';
import quitImage from '../../assets/ready/quit.png';

function Ready() {
  return (
    <>
      <Link to="/roomsetting" className="header-button">
        <img src={settingImage} alt="Setting" className="setting-icon" />
      </Link>
      <Link to="/lobby" className="header-button">
        <img src={quitImage} alt="Quit" className="quit-icon" />
      </Link>
      <div className="ready">
        <UserList />
        <div className="bottom-section">
          <div className="chat-box">
            <div className="chat-messages">
              <p>User 1: Hello!</p>
              <p>User 2: Hi there!</p>
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                placeholder="Type your message..."
                className="chat-input"
              />
              <button className="send-btn">Send</button>
            </div>
          </div>
          <div className="settings-play-container">
            <div className="room-settings">
              <h5>
                방이름: hihi
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
            <div className="play-btn">
              <Link to="/game">
                <PlayBtn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ready;

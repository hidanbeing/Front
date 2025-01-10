import React, { useState } from 'react';
import { CreateBtn, RoomSettingBtn } from '../components/TextBtn.tsx';
import '../styles/home.scss';
import '../styles/room-setting.scss';
import { Link } from 'react-router-dom';

function RoomSetting() {
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);

  const handleToggle = () => {
    setIsPasswordEnabled(prev => !prev); // 토글 상태 변경
  };
  return (
    <div className="room-setting">
      <RoomSettingBtn />
      <div className="room-setting-contents">
        {/* 방 이름 */}
        <div className="setting-item">
          <label>방 이름</label>
          <input type="text" placeholder="Room Name" />
        </div>

        {/* 비밀번호 여부 */}
        <div className="setting-item">
          <label>
            비밀번호 여부
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="password-toggle"
                checked={isPasswordEnabled}
                onChange={handleToggle}
              />
              <label htmlFor="password-toggle"></label>
            </div>
          </label>

          <input
            type="text"
            placeholder="Password"
            disabled={!isPasswordEnabled}
          />
        </div>

        {/* 최대 플레이어 */}
        <div className="setting-item">
          <label>최대 플레이어</label>
          <select>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* 게임 시간 */}
        <div className="setting-item">
          <label>게임 시간</label>
          <input type="number" placeholder="Minutes" min="1" max="60" />
        </div>

        {/* 라운드 수 */}
        <div className="setting-item">
          <label>라운드 수</label>
          <input type="number" placeholder="Rounds" min="1" max="10" />
        </div>

        {/* 힌트 */}
        <div className="setting-item">
          <label>힌트</label>
          <select>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        {/* 주제 */}
        <div className="setting-item">
          <label>주제</label>
          <select>
            <option value="animals">Animals</option>
            <option value="sports">Sports</option>
            <option value="movies">Movies</option>
            <option value="random">Random</option>
          </select>
        </div>
      </div>

      <Link to="/ready">
        <CreateBtn />
      </Link>
    </div>
  );
}

export default RoomSetting;

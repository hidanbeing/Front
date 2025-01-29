import React, { useState } from 'react';
import { CreateBtn, RoomSettingBtn } from '../components/TextBtn.tsx';
import '../styles/home.scss';
import '../styles/room-setting.scss';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext.ts';
import { useWebSocket } from '../contexts/WebSocketContext.tsx';
import { useContext } from 'react';

function RoomSetting() {
  const { stompClient } = useWebSocket(); //WebSocketContext에서 stompClient 가져오기
  const context = useContext(UserContext);
  const { user } = context;
  const userId = user.userId;

  // 방 설정 상태
  const [roomName, setRoomName] = useState('');
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [maxPlayer, setMaxPlayer] = useState(4);
  const [time, setTime] = useState(60);
  const [round, setRound] = useState(3);
  const [hint, setHint] = useState(true);
  const [subject, setSubject] = useState('CLOTHES');

  const handleToggle = () => {
    setIsPasswordEnabled(prev => !prev); //토글 상태 변경
  };

  //방 생성 요청 함수
  const handleCreateRoom = () => {
    console.log('stompClient 상태:', stompClient);

    if (!stompClient) {
      console.error('WebSocket is not connected');
      return;
    }

    const roomData: Record<string, any> = {
      name: roomName,
      subject: subject.toUpperCase(),
      roomState: 'WAIT',
      maxPlayer,
      curPlayer: 1,
      password: isPasswordEnabled ? password : null, //비밀번호 적용
      time,
      round,
      hint: hint,
    };

    //서버로 방 생성 요청 보내기
    stompClient.publish({
      destination: '/app/createRoom',
      headers: { userId: userId.toString() }, //number → string 변환
      //headers는 무조건 string 객체로 보내야 함!!
      body: JSON.stringify(roomData),
    });

    console.log('Room created:', roomData);
  };

  return (
    <div className="room-setting">
      <RoomSettingBtn />
      <div className="room-setting-contents">
        {/* 방 이름 */}
        <div className="setting-item">
          <label>방 이름</label>
          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            //value가 없으면 폼 요소가 "비제어 상태(Uncontrolled Component)"가 되어 React가 관리하기 어려워짐
            //onChange가 없으면 사용자가 입력해도 상태(subject)에 반영되지 않음
            //사용자가 입력한 값을 useState에 저장하려면 onChange가 필요!!!
          />
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={!isPasswordEnabled}
          />
        </div>

        {/* 최대 플레이어 */}
        <div className="setting-item">
          <label>최대 플레이어</label>
          <select
            value={maxPlayer}
            onChange={e => setMaxPlayer(Number(e.target.value))}
          >
            {Array.from({ length: 8 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* 게임 시간 */}
        <div className="setting-item">
          <label>게임 시간</label>
          <input
            type="number"
            placeholder="Minutes"
            min="1"
            max="60"
            value={time}
            onChange={e => setTime(Number(e.target.value))}
          />
        </div>

        {/* 라운드 수 */}
        <div className="setting-item">
          <label>라운드 수</label>
          <input
            type="number"
            placeholder="Rounds"
            min="1"
            max="10"
            value={round}
            onChange={e => setRound(Number(e.target.value))}
          />
        </div>

        {/* 힌트 */}
        <div className="setting-item">
          <label>힌트</label>
          <select
            value={hint.toString()}
            onChange={e => setHint(e.target.value === 'true')}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        {/* 주제 */}
        <div className="setting-item">
          <label>주제</label>
          <select value={subject} onChange={e => setSubject(e.target.value)}>
            <option value="animals">Animals</option>
            <option value="sports">Sports</option>
            <option value="movies">Movies</option>
            <option value="random">Random</option>
          </select>
        </div>
      </div>

      <Link to="/ready" onClick={handleCreateRoom}>
        <CreateBtn />
      </Link>
    </div>
  );
}

export default RoomSetting;

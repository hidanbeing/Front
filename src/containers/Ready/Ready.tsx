import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { PlayBtn, QuitBtn, SettingBtn } from '../../components/TextBtn.tsx';
import { Link } from 'react-router-dom';
import UserList from './UserList.tsx';
import '../../styles/ready.scss';
import ChatBox from './ChatBox.tsx';
import { useWebSocket } from '../../contexts/WebSocketContext.tsx';
import axios from 'axios';

//UserContext는 1명의 유저를 관리하고,
//roomUsers는 방에 있는 모든 유저를 관리하기 때문에 UserType을 유지해야 한다
type UserType = {
  userid: number;
  name: string;
  state: string;
  characterNum: number;
};

type RoomType = {
  id: number;
  name: string;
  maxPlayer: number;
  curPlayer: number;
  privateRoom: boolean;
  subject: string;
  gameTime: number;
  rounds: number;
  hints: boolean;
};

function Ready() {
  const { roomId } = useParams(); //URL에서 roomId 가져오기
  const location = useLocation();
  const { stompClient } = useWebSocket(); //WebSocketContext에서 stompClient 가져오기

  //RoomList.tsx에서 전달한 방 정보 가져오기 (없으면 기본값 설정)
  const [room, setRoom] = useState<RoomType | null>(
    location.state?.room || null,
  );

  //여기서 roomUsers는 방 안의 조회된 유저들의 배열
  //타입으로 선언한 각 유저에 대한 UserType 파라미터를 setRoomUsers를 통해 UserType[] 배열에 넣어주기
  //RoomList.tsx와 유사함
  const [roomUsers, setRoomUsers] = useState<UserType[]>([]); //방에 있는 유저 목록

  //방의 유저 목록을 받아오기 위함
  useEffect(() => {
    if (!roomId) return; // roomId가 없으면 실행 안 함

    axios
      //여기 get 앤드포인트는 달라질 수 있음 아직 스웨거에 업뎃 안된 상태..
      .get(`http://35.216.51.107:8080/api/v1/room/${roomId}/users`)
      .then(response => {
        setRoomUsers(
          response.data.users.map(user => ({
            ...user,
            characterNum: user.characterNum ?? 0, //기본값 0 설정 (characterNum이 없을 경우)
          })),
        ); //특정 방의 유저 목록 저장
        console.log('방 유저 목록:', response.data.users);
      })
      .catch(error => {
        console.error('방 유저 목록 가져오기 실패:', error);
      });
  }, [roomId]); //roomId가 변경될 때마다 실행

  useEffect(() => {
    if (!stompClient || !roomId) return;

    console.log(`방(${roomId}) 구독 설정 중`);

    //방 구독: enterroom & quitroom 이벤트 수신
    const roomSubscription = stompClient.subscribe(
      `/topic/room/${roomId}`,
      message => {
        const data = JSON.parse(message.body);
        console.log('방 구독 제대로 됐는지!:', data);

        //유저가 방에 입장
        if (data.type === 'enterroom') {
          console.log(`${data.user.name} 님이 입장했습니다.`);
          setRoomUsers(prevUsers => {
            if (prevUsers.find(user => user.userid === data.user.userid))
              return prevUsers;
            return [...prevUsers, data.user];
          }); //새로운 유저 추가
        }

        //유저가 방 나가기
        if (data.type === 'quitroom') {
          console.log(`${data.user.name} 님이 퇴장했습니다.`);
          setRoomUsers(prevUsers =>
            prevUsers.filter(user => user.userid !== data.user.userid),
          ); //나간 유저 제거
        }

        //방 정보 업데이트
        if (data.type === 'updateroom') {
          console.log('방 정보 변경 감지:', data);
          setRoom(prevRoom => ({
            ...prevRoom,
            ...data.room, //새로운 방 정보 업데이트
          }));
        }
      },
    );

    return () => {
      console.log(`방(${roomId}) 구독 해제`);
      roomSubscription.unsubscribe(); //방 나갈 때 구독 해제
    };
  }, [stompClient, roomId]);

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
        <UserList users={roomUsers} />
      </div>
      <div className="ready-bottom">
        <ChatBox />
        <div className="settings-play-container">
          <div className="room-settings">
            <h5>
              방 이름: {room?.name || '방 이름 없음'}
              <br />
              비밀번호 여부: {room?.privateRoom ? '비공개 방' : '공개 방'}
              <br />
              최대 플레이어: {room?.maxPlayer}명<br />
              게임 시간: {room?.gameTime}s
              <br />
              라운드 수: {room?.rounds}
              <br />
              힌트: {room?.hints ? 'O' : 'X'}
              <br />
              주제: {room?.subject || '미정'}
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

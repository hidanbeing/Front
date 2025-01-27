import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { UserContext } from '../../contexts/UserContext.ts';
import { Client } from '@stomp/stompjs';

type Room = {
  id: number;
  name: string;
  roomState: string;
  maxPlayer: number;
  curPlayer: number;
  privateRoom: boolean;
  subject: string;
};

export const RoomList: React.FC = () => {
  const context = useContext(UserContext);
  const { user } = context;
  const userId = user.userId;

  //여기서 rooms는 조회된 방들 배열
  //타입으로 선언한 각 방에 대한 Room 파라미터를 setRooms를 통해 rooms[] 배열에 넣어주기기
  const [rooms, setRooms] = useState<Room[] | undefined>(undefined);

  //웹소켓 연결
  useEffect(() => {
    const socket = new SockJS('http://35.216.51.107:8080/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000, //재연결 시도 간격
    });

    stompClient.onConnect = frame => {
      console.log('WebSocket connected:', frame);

      //구독: 개인 큐 (/queue/user/{userId})
      stompClient.subscribe(`/queue/user/${userId}`, message => {
        console.log('Message from /queue/user:', message.body);
      });

      //구독: 로비 (/topic/lobby)
      //게임 대기방의 경우 해당 방에 들어가자마자 로비에 해당하는 것을 빼고 방에 대한 구독을 주면 됨
      //따라서 (topic/room/{roomId})는 게임 대기방 들어가서 구독 설정하기
      stompClient.subscribe('/topic/lobby', message => {
        console.log('Message from /topic/lobby:', message.body);
      });
    };

    //에러났을 경우
    stompClient.onStompError = frame => {
      console.error('STOMP error:', frame);
    };

    //웹소켓켓 연결 활성화
    stompClient.activate();

    //컴포넌트 언마운트 시 웹소켓 연결 해제
    return () => {
      if (stompClient) {
        stompClient.deactivate();
        console.log('WebSocket Disconnected');
      }
    };
  }, [userId]);

  //방의 정보 가져오기
  useEffect(() => {
    axios.get('http://35.216.51.107:8080/api/room').then(response => {
      setRooms(response.data);
      console.log(response.data);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  //rooms?.length || 0 -> undefined된 경우 기본값으로 0 사용
  const totalPages = Math.ceil(rooms?.length || 0 / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  //우리는 이제 rooms 배열이기 때문에 해당 배열에 대한 currentRooms 정의
  const currentRooms = rooms
    ? rooms.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : [];

  return (
    <div>
      <div className="room-list">
        {currentRooms.map(room => (
          <Link to="/ready">
            <div key={room.id} className="room">
              <div className="room-name">{room.name}</div>
              <div className="room-content">
                <div className="room-player">
                  {room.curPlayer}/{room.maxPlayer}
                </div>
                <div className="room-status">{room.roomState}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          {'<'}
        </button>
        <span>
          {currentPage + 1} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

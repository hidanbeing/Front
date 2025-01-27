import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Room = {
  id: number;
  name: string;
  roomState: string;
  maxPlayer: number;
  curPlayer: number;
  privateRoom: boolean;
  subject: string;
};

/*
[
  {
    "id": 0,
    "name": "string",
    "roomState": "WAIT",
    "maxPlayer": 0,
    "curPlayer": 0,
    "privateRoom": true,
    "subject": "FRUIT"
  }
]
*/

export const RoomList: React.FC = () => {
  //여기서 rooms는 조회된 방들 배열
  //타입으로 선언한 각 방에 대한 Room 파라미터를 setRooms를 통해 rooms[] 배열에 넣어주기기
  const [rooms, setRooms] = useState<Room[] | undefined>(undefined);

  /* const roomList = [
    { id: 1, name: 'Room 1', player: 2, maxPlayer: 4, status: 'waiting' },
    { id: 2, name: 'Room 2', player: 1, maxPlayer: 4, status: 'waiting' },
    { id: 3, name: 'Room 3', player: 3, maxPlayer: 4, status: 'waiting' },
    { id: 4, name: 'Room 4', player: 2, maxPlayer: 4, status: 'waiting' },
    { id: 5, name: 'Room 5', player: 4, maxPlayer: 4, status: 'waiting' },
    { id: 6, name: 'Room 6', player: 3, maxPlayer: 4, status: 'waiting' },
    { id: 7, name: 'Room 7', player: 1, maxPlayer: 4, status: 'waiting' },
    { id: 8, name: 'Room 8', player: 2, maxPlayer: 4, status: 'waiting' },
    { id: 1, name: 'Room 1', player: 2, maxPlayer: 4, status: 'waiting' },
    { id: 2, name: 'Room 2', player: 1, maxPlayer: 4, status: 'waiting' },
    { id: 3, name: 'Room 3', player: 3, maxPlayer: 4, status: 'waiting' },
    { id: 4, name: 'Room 4', player: 2, maxPlayer: 4, status: 'waiting' },
    { id: 5, name: 'Room 5', player: 4, maxPlayer: 4, status: 'waiting' },
    { id: 6, name: 'Room 6', player: 3, maxPlayer: 4, status: 'waiting' },
    { id: 7, name: 'Room 7', player: 1, maxPlayer: 4, status: 'waiting' },
    { id: 8, name: 'Room 8', player: 2, maxPlayer: 4, status: 'waiting' },
  ]; */ //이거는 걍 형태 보기위한 틀..

  useEffect(() => {
    axios.get('http://35.216.51.107:8080/api/room').then(response => {
      setRooms(response.data);
      console.log(response.data);
    });
  }, []);
  //여기서

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  //rooms?.length || 0 -> undefined된 경우 기본값으로 0 사용용
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

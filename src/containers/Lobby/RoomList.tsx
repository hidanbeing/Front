import React from 'react';
const roomList = [
  {
    id: 1,
    name: 'Room 1',
    player: 2,
    maxPlayer: 4,
    status: 'waiting',
  },
  {
    id: 2,
    name: 'Room 2',
    player: 1,
    maxPlayer: 4,
    status: 'waiting',
  },
  {
    id: 3,
    name: 'Room 3',
    player: 3,
    maxPlayer: 4,
    status: 'waiting',
  },
  {
    id: 1,
    name: 'Room 1',
    player: 2,
    maxPlayer: 4,
    status: 'waiting',
  },
  {
    id: 2,
    name: 'Room 2',
    player: 1,
    maxPlayer: 4,
    status: 'waiting',
  },
  {
    id: 3,
    name: 'Room 3',
    player: 3,
    maxPlayer: 4,
    status: 'waiting',
  },
];

export const RoomList: React.FC = () => {
  return (
    <div className="room-list">
      {roomList.map(room => (
        <div key={room.id} className="room">
          <div className="room-name">{room.name}안녕</div>
          <div className="room-content">
            <div className="room-player">
              {room.player}/{room.maxPlayer}
            </div>
            <div className="room-status">{room.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

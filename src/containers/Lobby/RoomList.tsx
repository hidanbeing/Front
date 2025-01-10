import React, { useState } from 'react';

const roomList = [
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
];

export const RoomList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(roomList.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const currentRooms = roomList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <div>
      <div className="room-list">
        {currentRooms.map(room => (
          <div key={room.id} className="room">
            <div className="room-name">{room.name}</div>
            <div className="room-content">
              <div className="room-player">
                {room.player}/{room.maxPlayer}
              </div>
              <div className="room-status">{room.status}</div>
            </div>
          </div>
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

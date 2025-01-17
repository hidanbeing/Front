import React from 'react';
import { CreateBtn, PlayBtn, RoomsBtn } from '../../components/TextBtn.tsx';
import '../../styles/home.scss';
import { RoomList } from './RoomList.tsx';
import { Link } from 'react-router-dom';

function Lobby() {
  return (
    <div className="lobby">
      <RoomsBtn />
      <RoomList />
      <div className="btn-group">
        <Link to="/game" className="btn">
          <PlayBtn />
        </Link>
        <Link to="/roomsetting" className="btn">
          <CreateBtn />
        </Link>
      </div>
    </div>
  );
}

export default Lobby;

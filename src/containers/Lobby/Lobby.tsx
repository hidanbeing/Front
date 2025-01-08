import React from 'react';
import { CreateBtn, InviteBtn, PlayBtn } from '../../components/TextBtn.tsx';
import '../../styles/home.scss';
import Box from '../../components/Box.tsx';
import { RoomList } from './RoomList.tsx';

function Lobby() {
  return (
    <div className="lobby">
      <RoomList />
      <div className="btn-group">
        <PlayBtn />
        <CreateBtn />
      </div>
    </div>
  );
}

export default Lobby;

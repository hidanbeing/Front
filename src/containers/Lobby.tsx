import React from 'react';
import { CreateBtn, PlayBtn } from '../components/TextBtn.tsx';
import '../styles/home.scss';
import Box from '../components/Box.tsx';

function Lobby() {
  return (
    <div className="lobby">
      <Box />
      <PlayBtn />
      <CreateBtn />
    </div>
  );
}

export default Lobby;

import React from 'react';
import { CreateBtn, InviteBtn } from '../components/TextBtn.tsx';
import '../styles/home.scss';

function RoomSetting() {
  return (
    <div className="room-setting">
      <CreateBtn />
      <InviteBtn />
    </div>
  );
}

export default RoomSetting;

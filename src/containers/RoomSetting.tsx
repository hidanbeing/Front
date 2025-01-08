import React from 'react';
import { CreateBtn, InviteBtn } from '../components/TextBtn.tsx';
import '../styles/home.scss';
import { Link } from 'react-router-dom';

function RoomSetting() {
  return (
    <div className="room-setting">
      <Link to="/ready">
        <CreateBtn />
      </Link>

      {/* <InviteBtn /> */}
      {/* invite 버튼 용도를 모르겠네*/}
    </div>
  );
}

export default RoomSetting;

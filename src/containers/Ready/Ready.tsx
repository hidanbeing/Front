import React from 'react';
import { CreateBtn, InviteBtn, PlayBtn } from '../../components/TextBtn.tsx';
import '../../styles/home.scss';
import { UserList } from './UserList.tsx';

function Ready() {
  return (
    <div className="ready">
      <UserList />
      <div className="btn-group">
        <PlayBtn />
      </div>
    </div>
  );
}

export default Ready;

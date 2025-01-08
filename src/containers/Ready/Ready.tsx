import React from 'react';
import { CreateBtn, InviteBtn, PlayBtn } from '../../components/TextBtn.tsx';
import '../../styles/home.scss';
import { UserList } from './UserList.tsx';
import { Link } from 'react-router-dom';

function Ready() {
  return (
    <div className="ready">
      <UserList />
      <div className="btn-group">
        <Link to="/game">
          <PlayBtn />
        </Link>
      </div>
    </div>
  );
}

export default Ready;

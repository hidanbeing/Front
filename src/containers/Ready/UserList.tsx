import React from 'react';
import character1 from '../../assets/character/character1.png';
import character2 from '../../assets/character/character2.png';
import character3 from '../../assets/character/character3.png';
import character4 from '../../assets/character/character4.png';

const characterImages = [character1, character2, character3, character4];

// 유저 리스트 정의
const userList = [
  { id: 1, name: 'User 1', character: 0, status: 'ready' },
  { id: 2, name: 'User 2', character: 1, status: 'not ready' },
  { id: 3, name: 'User 3', character: 2, status: 'ready' },
  { id: 4, name: 'User 4', character: 3, status: 'not ready' },
];

const MAX_USERS = 8; // 최대 8개 박스 생성
const filledUserList = [
  ...userList,
  ...Array.from({ length: MAX_USERS - userList.length }, (_, i) => ({
    id: userList.length + i + 1,
    name: '',
    character: null,
    status: '',
  })),
];

export const UserList: React.FC = () => {
  return (
    <div className="user-list">
      {filledUserList.map(user => (
        <div
          key={user.id}
          className={`user ${user.character === null ? 'empty-box' : ''}`}
        >
          {user.character !== null ? (
            <>
              <div className="user-name">{user.name}</div>
              <img
                src={characterImages[user.character]}
                className="character-img"
                alt="Character"
              />
              <div className="user-status">{user.status}</div>
            </>
          ) : (
            <div className="empty-box"></div>
          )}
        </div>
      ))}
    </div>
  );
};

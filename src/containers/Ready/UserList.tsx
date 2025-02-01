import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext.ts';
import character1 from '../../assets/character/character1.png';
import character2 from '../../assets/character/character2.png';
import character3 from '../../assets/character/character3.png';
import character4 from '../../assets/character/character4.png';
import character5 from '../../assets/character/character5.png';
import character6 from '../../assets/character/character6.png';

const characterImages = [
  character1,
  character2,
  character3,
  character4,
  character5,
  character6,
];

type UserType = {
  userid: number;
  name: string;
  state: string;
  characterNum: number;
};

type UserListProps = {
  users: UserType[]; //users의 타입을 명확하게 지정
};

// 유저 리스트
// const userList = [
//   { id: 1, name: 'User 1', character: 0, status: 'ready' },
//   { id: 2, name: 'User 2', character: 1, status: 'not ready' },
//   { id: 3, name: 'User 3', character: 2, status: 'ready' },
//   { id: 4, name: 'User 4', character: 3, status: 'not ready' },
// ];

const MAX_USERS = 8; //최대 8명

const UserList: React.FC<UserListProps> = ({ users }) => {
  //유저 수가 8명 미만이면 빈 슬롯을 추가하여 8개로 맞춤
  const filledUserList = [
    ...users,
    ...Array.from({ length: MAX_USERS - users.length }, (_, i) => ({
      userid: users.length + i + 1,
      name: '',
      state: '',
      characterNum: null,
    })),
  ];

  return (
    <div className="ready-user-list">
      {filledUserList.map(user => (
        <div key={user.userid} className="ready-user">
          {user.name ? (
            <>
              <div className="user-name">{user.name}</div>
              {user.characterNum !== null && ( //빈 슬롯이 아닐 때만 이미지 렌더링
                <img
                  src={characterImages[user.characterNum] || characterImages[0]}
                  className="character-img"
                  alt="Character"
                />
              )}
              <div className="user-status">{user.state}</div>
            </>
          ) : (
            <div className="empty-box"></div> //빈 슬롯일 경우
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;

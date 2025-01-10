import React from 'react';

const userList = [
  {
    id: 1,
    name: 'User 1',
    character: 0,
  },
  { id: 2, name: 'User 2', character: 1 },
];

export const UserList: React.FC = () => {
  return (
    <div className="user-list">
      {userList.map(user => (
        <div key={user.id} className="user">
          <div className="user-name">{user.name}</div>
          {user.character === 0 ? (
            <img
              src={require('../../assets/character/character1.png')}
              className="character-img"
            />
          ) : null}
          {user.character === 1 ? (
            <img
              src={require('../../assets/character/character2.png')}
              className="character-img"
            />
          ) : null}
          {user.character === 2 ? (
            <img
              src={require('../../assets/character/character3.png')}
              className="character-img"
            />
          ) : null}
          {user.character === 3 ? (
            <img
              src={require('../../assets/character/character4.png')}
              className="character-img"
            />
          ) : null}
          {user.character === 4 ? (
            <img
              src={require('../../assets/character/character5.png')}
              className="character-img"
            />
          ) : null}
          {user.character === 5 ? (
            <img
              src={require('../../assets/character/character6.png')}
              className="character-img"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

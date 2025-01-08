import React from 'react';
const userList = [
  {
    id: 1,
    name: 'User 1',
  },
  { id: 2, name: 'User 2' },
];

export const UserList: React.FC = () => {
  return (
    <div className="user-list">
      {userList.map(user => (
        <div key={user.id} className="user">
          <div className="user-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

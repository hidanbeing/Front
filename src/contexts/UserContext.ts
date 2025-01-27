import { createContext } from 'react';

type User = {
  name: string;
  characterNum: number;
  userId: number;
};

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

//초기화를 해야 빨간줄 사라짐 -> Null 때문에에
export const UserContext = createContext<UserContextType>({
  user: { name: '', characterNum: 0, userId: 0 },
  setUser: () => {},
});

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

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

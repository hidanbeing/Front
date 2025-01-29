import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes.tsx';
import { UserContext } from './contexts/UserContext.ts';
import { WebSocketProvider } from './contexts/WebSocketContext.tsx';

type User = {
  name: string;
  characterNum: number;
  userId: number;
};

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: '',
    characterNum: 0,
    userId: 0,
  });

  return (
    <WebSocketProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </WebSocketProvider>
  );
};

export default App;

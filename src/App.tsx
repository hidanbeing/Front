import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes.tsx';
import { UserContext } from './contexts/UserContext.ts';

type User = {
  name: string;
  characterNum: number;
};

const App: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', characterNum: 0 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes />
    </UserContext.Provider>
  );
};

export default App;

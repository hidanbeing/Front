import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import Lobby from '../containers/Lobby/Lobby.tsx';
import Home from '../containers/Home/Home.tsx';
import RoomSetting from '../containers/RoomSetting.tsx';
import Ready from '../containers/Ready/Ready.tsx';
import Game from '../containers/Game.tsx';

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<Layout />}>
          <Route path="lobby" element={<Lobby />} />
          <Route path="roomsetting" element={<RoomSetting />} />
          <Route path="ready" element={<Ready />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;

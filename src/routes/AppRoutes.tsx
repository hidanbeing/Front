import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import Lobby from '../containers/Lobby/Lobby.tsx';
import Test from '../containers/Test.tsx';
import Home from '../containers/Home/Home.tsx';
import RoomSetting from '../containers/RoomSetting.tsx';
import Ready from '../containers/Ready/Ready.tsx';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Layout />}>
          <Route path="lobby" element={<Lobby />} />
          <Route path="roomsetting" element={<RoomSetting />} />
          <Route path="ready" element={<Ready />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;

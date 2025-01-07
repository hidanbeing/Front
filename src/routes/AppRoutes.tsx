import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import Lobby from '../containers/Lobby.tsx';
import Test from '../containers/Test.tsx';
import Home from '../containers/Home/Home.tsx';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Layout />}>
          <Route path="lobby" element={<Lobby />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;

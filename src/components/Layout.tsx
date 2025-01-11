import React from 'react';
import '../styles/layout.scss';
import Header from './Header.tsx';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header className="layout-header">
        <Header />
      </header>
      <main className="layout-content">
        <Outlet />
      </main>
      <footer className="layout-footer"></footer>
    </div>
  );
};

export default Layout;

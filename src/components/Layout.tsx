import React from 'react';
import "../styles/layout.scss";
import Header from './Header.tsx';
import ContentView from '../assets/ContentView.png'

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header className="layout-header">
        <Header/>
      </header>
      <main className="layout-content">
        <img src={ContentView}/>
      </main>
      
    </div>
  );
};

export default Layout;

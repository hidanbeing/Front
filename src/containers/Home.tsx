import React from 'react';
import TitleLogo from '../components/TitleLogo.tsx';
import { PlayBtn } from '../components/TextBtn.tsx';
import Box from '../components/Box.tsx';
import "../styles/home.scss"
import { Link } from 'react-router-dom';


function Home() {

  

  return (
    <div className="home">
      <div className='logo'>

        <TitleLogo/>
        <div className='box'>
        <Box/>
      </div>
      <Link to="/lobby">
      <button className='btn'>
        <PlayBtn/>
      </button></Link>
      
      </div>
      
      
      
     
    </div>
  );
}

export default Home;

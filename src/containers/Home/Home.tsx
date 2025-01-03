import React from 'react';
import TitleLogo from '../../components/TitleLogo.tsx';
import Header from '../../components/Header.tsx';
import { CreateBtn, InviteBtn, PlayBtn } from '../../components/TextBtn.tsx';

function Home() {
  return (
    <div className="Home">
      <TitleLogo/>
      <Header/>
      <PlayBtn/>
      <CreateBtn/>
      <InviteBtn/>
    </div>
  );
}

export default Home;

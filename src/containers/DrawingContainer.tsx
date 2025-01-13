import React, { useState, useEffect } from 'react';
import Canvas from '../components/Canvas.tsx';
import Toolbar from '../components/Toolbar.tsx';
import ChatBox from '../components/ChatBox.tsx';
import PlayerInfo from '../components/PlayerInfo.tsx';

import '../styles/Game/drawing.scss';

const characterImages = [
  require('../assets/character/character1.png'),
  require('../assets/character/character2.png'),
  require('../assets/character/character3.png'),
  require('../assets/character/character4.png'),
];

const DrawingContainer: React.FC = () => {
  const [color, setColor] = useState('#000000');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    [],
  );
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // WebSocket 연결
    const ws = new WebSocket('ws://localhost:3000');
    setSocket(ws);

    ws.onmessage = event => {
      const message = JSON.parse(event.data);
      if (message.type === 'chat') {
        setMessages(prev => [...prev, message.data]);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = (message: string) => {
    socket?.send(
      JSON.stringify({
        type: 'chat',
        data: { sender: 'Player1', text: message },
      }),
    );
  };

  if (!socket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="drawing-container">
      {/* 좌측 플레이어 리스트 */}
      <div className="sidebar">
        {/* 내 정보 */}
        <div className="player-box my-info">
          <PlayerInfo
            playerName="Me"
            score={100}
            image={require('../assets/character/character1.png')}
          />
        </div>

        {/* 다른 플레이어 정보 */}
        <div className="ranking-list">
          {characterImages.map((image, index) => (
            <div key={index} className="player-box player-info-horizontal">
              <PlayerInfo
                playerName={`Player ${index + 2}`}
                score={240 - index * 10}
                image={image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 중앙 캔버스와 툴바 */}
      <div className="main">
        <Canvas color={color} socket={socket} />
        <Toolbar
          onColorChange={newColor => setColor(newColor)}
          onUndo={() => socket.send(JSON.stringify({ type: 'undo' }))}
          onRedo={() => socket.send(JSON.stringify({ type: 'redo' }))}
          onClear={() => socket.send(JSON.stringify({ type: 'clear' }))}
        />
      </div>

      {/* 우측 채팅 박스 */}
      <div className="chat-box">
        <div className="chat-messages">
          <ChatBox onSendMessage={handleSendMessage} messages={messages} />
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleSendMessage((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DrawingContainer;

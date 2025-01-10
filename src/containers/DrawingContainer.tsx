import React, { useState, useEffect } from 'react';
import Canvas from '../components/Canvas.tsx';
import Toolbar from '../components/Toolbar.tsx';
import ChatBox from '../components/ChatBox.tsx';
import PlayerInfo from '../components/PlayerInfo.tsx';

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
    <div style={styles.container}>
      {/* 좌측 플레이어 리스트 */}
      <div style={styles.sidebar}>
        {characterImages.map((image, index) => (
          <div key={index} style={styles.playerBox}>
            <PlayerInfo
              playerName={`Player ${index + 1}`}
              score={100}
              image={image} // 이미지 경로 전달
            />
          </div>
        ))}
      </div>

      {/* 중앙 캔버스와 툴바 */}
      <div style={styles.main}>
        <Canvas color={color} socket={socket} />
        <Toolbar
          onColorChange={newColor => setColor(newColor)}
          onUndo={() => socket.send(JSON.stringify({ type: 'undo' }))}
          onRedo={() => socket.send(JSON.stringify({ type: 'redo' }))}
          onClear={() => socket.send(JSON.stringify({ type: 'clear' }))}
        />
      </div>

      {/* 우측 채팅 박스 */}
      <div style={styles.chatBox}>
        <div style={styles.chatMessages}>
          <ChatBox onSendMessage={handleSendMessage} messages={messages} />
        </div>
        <div style={styles.chatInput}>
          <input
            type="text"
            placeholder="Type your message..."
            style={styles.input}
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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '10px',
    gap: '10px',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderRadius: '8px',
  },
  playerBox: {
    backgroundColor: '#F2F3FD',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  chatBox: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    flex: 4,
    backgroundColor: '#F2F3FD',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  },
  chatMessages: {
    flex: 3,
    overflowY: 'auto' as const,
    marginBottom: '10px',
  },
  chatInput: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px',
  },
  input: {
    flex: 3,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    outline: 'none',
  },
};

export default DrawingContainer;

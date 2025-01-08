import React, { useState, useEffect } from 'react';
import Canvas from '../components/Canvas.tsx';
import Toolbar from '../components/Toolbar.tsx';
import ChatBox from '../components/ChatBox.tsx';
import PlayerInfo from '../components/PlayerInfo.tsx';

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
      {/* 사이드바: PlayerInfo와 ChatBox */}
      <div style={styles.sidebar}>
        <PlayerInfo playerName="Player1" score={100} />
        <ChatBox onSendMessage={handleSendMessage} messages={messages} />
      </div>

      {/* 메인 영역: Canvas와 Toolbar */}
      <div style={styles.main}>
        <Canvas color={color} socket={socket} />
        <Toolbar
          onColorChange={newColor => setColor(newColor)}
          onUndo={() => socket.send(JSON.stringify({ type: 'undo' }))}
          onRedo={() => socket.send(JSON.stringify({ type: 'redo' }))}
          onClear={() => socket.send(JSON.stringify({ type: 'clear' }))}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    height: '100%',
    width: '100%',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    width: '200px',
  },
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    flex: 1,
    alignItems: 'center',
  },
};

export default DrawingContainer;

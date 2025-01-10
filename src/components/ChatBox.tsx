import React, { useState } from 'react';
import './chatbox.scss';

interface ChatBoxProps {
  onSendMessage: (message: string) => void;
  messages: { sender: string; text: string }[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSendMessage, messages }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="chatbox-container">
      {/* 메시지 출력 영역 */}
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chatbox-message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* 입력 영역 */}
      <div className="chatbox-input-container">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chatbox-input"
        />
        <button onClick={handleSend} className="chatbox-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;

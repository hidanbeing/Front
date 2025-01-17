import React from 'react';

export default function ChatBox() {
  return (
    <div className="chat-box">
      <div className="chat-messages">
        <p>User 1: Hello!</p>
        <p>User 2: Hi there!</p>
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          className="chat-input"
        />
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
}

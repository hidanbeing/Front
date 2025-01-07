import React, { useState } from "react";

interface ChatBoxProps {
  onSendMessage: (message: string) => void;
  messages: { sender: string; text: string }[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSendMessage, messages }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      {/* 메시지 출력 영역 */}
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      
      {/* 입력 영역 */}
      <div style={styles.inputContainer}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    border: "1px solid #ccc",
    padding: "10px",
    width: "200px",
  },
  messages: {
    flex: 1,
    overflowY: "auto" as const,
    marginBottom: "10px",
  },
  message: { // 메시지 스타일 정의
    marginBottom: "8px",
  },
  inputContainer: {
    display: "flex",
  },
  input: {
    flex: 1,
    marginRight: "10px",
    padding: "5px",
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ChatBox;

import React from "react";

interface ToolbarProps {
  onColorChange: (color: string) => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onColorChange, onUndo, onRedo, onClear }) => {
  const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#33FF57", "#3385FF", "#000000"];

  return (
    <div style={styles.toolbar}>
      {/* 색상 선택 */}
      {colors.map((color) => (
        <button
          key={color}
          style={{ ...styles.colorButton, backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}

      {/* 도구 버튼 */}
      <button style={styles.toolButton} onClick={onUndo}>
        Undo
      </button>
      <button style={styles.toolButton} onClick={onRedo}>
        Redo
      </button>
      <button style={styles.toolButton} onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

const styles = {
  toolbar: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  colorButton: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  },
  toolButton: {
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#f4f4f4",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Toolbar;

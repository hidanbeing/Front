import React from 'react';
import '../styles/Game/toolbar.scss';

interface ToolbarProps {
  onColorChange: (color: string) => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onColorChange,
  onUndo,
  onRedo,
  onClear,
}) => {
  const colors = [
    '#FF5733',
    '#FFC300',
    '#DAF7A6',
    '#33FF57',
    '#3385FF',
    '#000000',
  ];

  return (
    <div className="toolbar">
      {/* 색상 선택 */}
      {colors.map(color => (
        <button
          key={color}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}

      {/* 도구 버튼 */}
      <button className="tool-button" onClick={onUndo}>
        Undo
      </button>
      <button className="tool-button" onClick={onRedo}>
        Redo
      </button>
      <button className="tool-button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default Toolbar;

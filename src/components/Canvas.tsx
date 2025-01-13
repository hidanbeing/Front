import React, { useRef, useEffect } from 'react';
import '../styles/Game/canvas.scss';

interface CanvasProps {
  color: string;
  socket: WebSocket;
}

const Canvas: React.FC<CanvasProps> = ({ color, socket }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext('2d')!;
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;
    ctxRef.current = ctx;

    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      if (message.type === 'draw') {
        const { x, y, color, isStart } = message.data;

        if (isStart) {
          ctx.beginPath();
          ctx.moveTo(x, y);
        } else {
          ctx.strokeStyle = color;
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y);
        }
      }
    };
  }, [socket]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = e.nativeEvent;

    ctxRef.current?.beginPath();
    ctxRef.current?.moveTo(offsetX, offsetY);

    socket.send(
      JSON.stringify({
        type: 'draw',
        data: { x: offsetX, y: offsetY, color, isStart: true },
      }),
    );
  };

  const finishDrawing = () => {
    isDrawing.current = false;
    ctxRef.current?.closePath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;

    const { offsetX, offsetY } = e.nativeEvent;

    ctxRef.current!.strokeStyle = color;
    ctxRef.current!.lineTo(offsetX, offsetY);
    ctxRef.current!.stroke();
    ctxRef.current!.beginPath();
    ctxRef.current!.moveTo(offsetX, offsetY);

    socket.send(
      JSON.stringify({
        type: 'draw',
        data: { x: offsetX, y: offsetY, color, isStart: false },
      }),
    );
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseLeave={finishDrawing}
      onMouseMove={draw}
      className="canvas"
    />
  );
};

export default Canvas;

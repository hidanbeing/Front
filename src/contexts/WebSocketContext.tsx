import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

interface WebSocketContextType {
  stompClient: Client | null;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined,
);

//WebSocketProvider의 props 타입 지정
interface WebSocketProviderProps {
  children: ReactNode; //ReactNode로 타입 지정
}

//WebSocketProvider 컴포넌트
export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const [stompClient, setStompClient] = useState<Client | null>(null);

  console.log('WebSocketProvider 렌더링됨!');

  const [forceUpdate, setForceUpdate] = useState(0); //useState로 useEffect 강제 리렌더링

  //웹소켓 연결
  useEffect(() => {
    /*
    <forceUpdate를 작성한 이유> 
    콘솔로그에 useEffect가 실행이 안되는 것으로 떠서
    강제적으로 라도 useEffect를 실행하기 위함
    사실 얘가 실행이 안돼도 웹소켓 연결은 정상 작동해서 큰 의미는 없는데
    디버깅 위해서...
    */

    console.log('useEffect 실행됨! 웹소켓 연결 시도 중', forceUpdate);
    setForceUpdate(prev => prev + 1);

    const socket = new SockJS('http://35.216.51.107:8080/ws');
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000, //재연결 시도 간격
    });

    //frame은 서버에서 보내는 연결 성공 응답 데이터(STOMP 프로토콜의 메시지)
    client.onConnect = frame => {
      console.log('WebSocket connected:', frame);
      setStompClient(client);
    };

    client.onStompError = frame => {
      console.error('STOMP error:', frame);
    };

    //아래 코드를 사용하면 웹소켓 호출, 브라우저가 서버와 SockJS 연결 시도
    //연결 성공하면 STOMP 프로토콜 사용해서 서버와 통신 시작
    //onConnect 콜백 함수가 실행되면서 연결 완료
    //client.activate(); 실행 후, 웹소켓이 연결되면 자동으로 onConnect가
    console.log('client.activate() 실행됨!!');
    client.activate();

    // return () => {
    //   client.deactivate();
    //   console.log('WebSocket Disconnected');
    // };
  }, []);

  return (
    <WebSocketContext.Provider value={{ stompClient }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

import React from "react";
import DrawingContainer from "./containers/DrawingContainer.tsx";
import AppRoutes from './routes/AppRoutes.tsx';

const App: React.FC = () => {
  return (
    // <div style={styles.container}>
    //   {/* 그림판만 렌더링 */}
    //   <DrawingContainer />
    // </div>
    <AppRoutes/>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
};

export default App;

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
            <TaskProvider>
              <AppRoutes />
            </TaskProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

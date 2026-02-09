import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ThemeProvider>
            <TaskProvider>
              <AppRoutes />
            </TaskProvider>
          </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

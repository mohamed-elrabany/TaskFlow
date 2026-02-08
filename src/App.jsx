import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import { TaskProvider } from './context/TaskContext.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </BrowserRouter>
    </>
  )
}

export default App

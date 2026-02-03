import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Tasks from "../pages/Tasks";
import AddTask from "../pages/AddTask";
import RootLayout from "../layout/RootLayout";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={ <Welcome/> } />
            
            <Route element={<RootLayout />}>
                <Route path="/dashboard" element={ <Dashboard/> } />
                <Route path="/tasks" element={ <Tasks/> } />
                <Route path="/add-task" element={ <AddTask/> } />
                <Route path="/settings" element={ <Settings/> } />
            </Route>
            
        </Routes>
    )
}
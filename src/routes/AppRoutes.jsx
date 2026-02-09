import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Tasks from "../pages/TasksPage";
import AddTask from "../pages/AddTask";
import RootLayout from "../layout/RootLayout";
import EditTask from "../pages/EditTask";
import EntryPage from "../pages/EntryPage";

import PrivateRoute from "./routeGuards/PrivateRoute";
import PublicRoute from "./routeGuards/PublicRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/welcome" element={<PublicRoute><Welcome /></PublicRoute>} />

      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
        <Route path="/add-task" element={<PrivateRoute><AddTask /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/edit-task/:taskId" element={<PrivateRoute><EditTask /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

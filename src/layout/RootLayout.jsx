import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"


export default function RootLayout(){
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="w-full min-h-screen">
                <Outlet />
            </main>
            
        </div>
    )
}
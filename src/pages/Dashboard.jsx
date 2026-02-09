import TopBar from "../components/TopBar"
import TaskStatus from "../components/TaskStatus"
import Tasks from "../components/Tasks"

export default function Dashboard(){


    return<>
        <div>
            <TopBar title='Dashboard' />
            <main className="flex flex-col gap-8 p-8 bg-gray-200">
                <TaskStatus />  
                <Tasks />
            </main>
             
        </div>
    </>
}

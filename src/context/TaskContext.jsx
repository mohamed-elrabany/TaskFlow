import { createContext, useState, useEffect } from "react";
import * as taskStorage from "../util/storage/tasks"; 

export const TaskContext= createContext();

export function TaskProvider({ children }){
    const [tasks, setTasks]= useState([]);

    function loadTasks(){
        setTasks(taskStorage.getTasks());
    }

    function addTask(task){
        taskStorage.addTask(task);
        loadTasks();
    }

    function editTask(id, data){
        taskStorage.editTask(id, data);
        loadTasks();
    }
    
    function deleteTask(id){
        taskStorage.deleteTask(id);
        loadTasks();
    }
    
    function clearTasks(){
        setTasks([]);
        localStorage.removeItem("tasks");
    }

    function filterTasks(status){
        if (status === "All Tasks") return tasks;
        return tasks.filter(task => task.status === status);
    }

    useEffect(()=>{
        loadTasks();
    },[]);

    return(
        <TaskContext.Provider 
            value={{tasks, setTasks, addTask, editTask, deleteTask, clearTasks, filterTasks}}>
            {children}
        </TaskContext.Provider>
    );
}
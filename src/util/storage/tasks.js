const TASKS_KEY = "tasks";

export function addTask(task){
    const tasks= getTasks();
    tasks.push(task);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function getTasks(){
    const data= localStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : []; 
}

export function deleteTask(id){
    const tasks= getTasks();
    const updatedTasks= tasks.filter( task=> task.id!==id );
    localStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
}

export function getTotalTasks(){
    return getTasks().length;
}

export function getCompletedTasks(){
    return getTasks().filter(task => task.status === "done").length;
}

export function getPendingTasks(){
    return getTasks.length - getCompletedTasks();
}
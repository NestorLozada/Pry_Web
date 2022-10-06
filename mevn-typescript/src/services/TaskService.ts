//permite la comunicación con el backend
import axios from './axios'
import { Task } from '@/interfaces/Task'

//funcion para obetener las tareas 
export const getTasks = async (task:Task) => 
    await axios.get("/tasks");


//funcion para crear una tarea dentro del backend
export const createTask = async (task: Task) => 
    await axios.post("/tasksPost", task)

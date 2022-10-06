//permite la comunicación con el backend
import axios from './axios'
import {AxiosResponse} from 'axios'
import { Task } from '@/interfaces/Task'

//funcion para obetener las tareas 
export const getTasks = async (): Promise<AxiosResponse<Task[]>> => 
    await axios.get("/tasks");


//funcion para crear una tarea dentro del backend
export const createTask = async (task: Task) => 
    await axios.post("/tasksPost", task)

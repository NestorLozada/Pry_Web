import { Task } from "@/interfaces/Task";
import { DataInfo } from "@/interfaces/Data";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
  await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get(`/tasks/${id}`);

export const createTask = async (task: Task): Promise<AxiosResponse> =>
  await axios.post("/tasksPost", task);

export const updateTask = async (
  id: string,
  newTask: Task
): Promise<AxiosResponse<Task>> => await axios.put(`/tasks/${id}`, newTask);

export const deleteTask = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/tasks/${id}`);
//++++++++++++++++++++++++++INFORMACION+++++++++++++++++++++++++++++++++++++++++

export const getInfo  = async (month:number, year:number, esCompare:number): Promise<AxiosResponse<DataInfo[]>> =>
 await axios.post('/info', {
  month: month, year: year, esCompare: esCompare
});

export const getTareasPen  = async (fechaInicio:Date, fechaFin:Date, esfuerzo:number): Promise<AxiosResponse<Task[]>> =>
 await axios.post('/filteredTasks', {
  fechaInicio: fechaInicio, fechaFin: fechaFin, esfuerzo: esfuerzo
});
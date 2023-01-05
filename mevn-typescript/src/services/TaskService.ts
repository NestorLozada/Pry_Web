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
export const getDatas =async (): Promise<AxiosResponse<DataInfo[]>> => 
  await axios.get("/datas");

export const getData = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get(`/data/${id}`);

 export const createData = async (data: DataInfo): Promise<AxiosResponse> =>
  await axios.post("/dataPost", data);

export const updateData = async (
  id: string,
  newData: DataInfo
): Promise<AxiosResponse<DataInfo>> => await axios.put(`/datas/${id}`, newData);
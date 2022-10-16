import { RegisterIN } from "@/interfaces/RegisterIN";
import { Login, LogRes } from "@/interfaces/Loggin";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const createUser = async (registerIN: RegisterIN): Promise<AxiosResponse> =>
  await axios.post("/registerUser", registerIN);
  
  export const login = async (Login: Login): Promise<LogRes> =>{
    const resp = await axios.post<LogRes>("/login", Login);
    return resp.data
  }

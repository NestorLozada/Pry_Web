import { RegisterIN } from "@/interfaces/RegisterIN";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const createUser = async (registerIN: RegisterIN): Promise<AxiosResponse> =>
  await axios.post("/registerUser", registerIN);
  

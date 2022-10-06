import axios , {AxiosInstance}from "axios";
//la preticion se hará a este lugar 
const axionInstance: AxiosInstance = axios.create({
    baseURL:'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axionInstance;
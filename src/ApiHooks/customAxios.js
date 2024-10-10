import axios from "axios";
import {getToken} from "../hooks/myToken";


export const baseURL = axios.create({baseURL: 'https://e-learning-platform-dppei-project-backend.vercel.app/api/'})


export default async function useCustomAxios(url, method, data) {
    const token = getToken();

    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await baseURL({
        url,
        method,
        data,
        headers,
    });

    return res.data
}
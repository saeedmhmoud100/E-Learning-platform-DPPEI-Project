import axios from "axios";


export const baseURL = axios.create({baseURL: 'https://e-learning-platform-dppei-project-backend.vercel.app/api/'})


export default async function useCustomAxios(url, method, data) {
    const res = await baseURL({
        url,
        method,
        data
    })
    return res.data
}
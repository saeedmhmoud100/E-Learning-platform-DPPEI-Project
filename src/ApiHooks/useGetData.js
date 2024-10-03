import useCustomAxios from "./customAxios";


export default async function useGetData(url, data) {
    return await useCustomAxios(url, 'GET', data)
}
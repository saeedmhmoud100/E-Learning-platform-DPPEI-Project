import useCustomAxios from "./customAxios";


export default async function useDeleteData(url, data) {
    return await useCustomAxios(url, 'DELETE', data)
}
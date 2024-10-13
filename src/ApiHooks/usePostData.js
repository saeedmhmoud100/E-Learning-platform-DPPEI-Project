import useCustomAxios from "./customAxios";


export default async function usePostData(url, data) {
    return await useCustomAxios(url, 'POST', data)
}
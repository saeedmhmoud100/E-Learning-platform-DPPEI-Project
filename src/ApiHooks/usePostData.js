import useCustomAxios from "./customAxios";


export default async function usePostData(url, data) {
    await useCustomAxios(url, 'POST', data)
}
import { useSelector } from "react-redux";

export function setToken(token){
    localStorage.setItem('token',JSON.stringify(token));
}

export function getToken(){
    const token = localStorage.getItem('token');
    return JSON.parse(token);
}

export function removeToken(){
    localStorage.removeItem('token');
}
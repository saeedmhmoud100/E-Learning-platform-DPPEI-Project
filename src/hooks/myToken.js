import { useSelector } from "react-redux";

export function setToken(token){
    localStorage.setItem('token',token);
}

export function getToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function removeToken(){
    localStorage.removeItem('token');
}
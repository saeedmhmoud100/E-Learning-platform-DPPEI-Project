import {toast} from "react-toastify";


const errorNotification = (message) => {
    return toast.error(message,{
        closeButton:true,
        closeOnClick:true,
    });
}

const successNotification = (message) => {
    return toast.success(message,{
        closeButton:true,
        closeOnClick:true,
    });
}

const warningNotification = (message) => {
    return toast.warning(message,{
        closeButton:true,
        closeOnClick:true,
    });
}
const infoNotification = (message) => {
    return toast.info(message,{
        closeButton:true,
        closeOnClick:true,
    });
}


export {errorNotification, successNotification, warningNotification, infoNotification};
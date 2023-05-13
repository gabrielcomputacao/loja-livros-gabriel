import { AxiosError } from "axios";


export const errorInterceptor  = (error: AxiosError) => {

    if(error.message === 'Network Error'){
        return Promise.reject( new Error('Error de conexão'));
    }

    return Promise.reject(error);

};


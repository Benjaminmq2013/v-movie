import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export interface props{
    email: string,
    password: string,
    onSuccess: (data: string) => void 
    onError: () => void
    redirect: () => void
}

const postCredentials = (props:props) => {     

    const URL:string = 'https://reqres.in/api/login';    

    const config:AxiosRequestConfig<any> = {
        data: qs.stringify({ "email": props.email, "password": props.password }),
        method: "post",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }    

    axios(URL, config)
    .then(data => {
        props.onSuccess(data.data.token)
        props.redirect()
    })
    .catch(error => {
        props.onError()
        console.error(error)
    })
}

export default postCredentials
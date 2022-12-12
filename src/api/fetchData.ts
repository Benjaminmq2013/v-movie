import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export interface params{
    entryPoint: string
    method?: "post" | "get",
    params?: object,  
    data?: object,  
    then?: () => void
    base_url?: string,
    onError?: () => void
    
    onLoading: (loading: boolean) => void
}

const fetchData = <Types,>( params: params, callback?: { setData: (data: Types) => void }  ) => {   

    const URL:string = params.base_url || `https://api.themoviedb.org/3/${params.entryPoint}`
    const API_KEY:string = "69efed0ceaf7244cbb6ee4e9f15365d9"
    
    const config:AxiosRequestConfig = {
        url: URL,
        params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            ...params.params
        },
        method: params.method ? params.method : "get",
        data: params.data || null,
        
    }
  
    
    params.onLoading(true)
    axios( config )
    
    .then((response:AxiosResponse<Types>) => {  
        console.log(response)        
        params.onLoading(false)
        callback && callback.setData(response.data)
    })
    .catch((error) => {
        console.log(error)
        params.onError && params.onError()
    })
    .then(() => params.then && params.then())
    
   
}

export default fetchData
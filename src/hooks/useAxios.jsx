import { useEffect, useState } from 'react'
import axios from 'axios'
export default function  useAxios(url,action,userData=null) {
    const [data , setData] = useState(null)
    const [isloading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    const getData =  ()=>{
        try {
            setIsLoading(true)
            setError((prev)=>null)
            setData((prev)=> null)
            axios.get(url)
            .then(response=>{
                console.log('axios-data',response.data);
                setData((prev)=> response.data)
                setIsLoading(false)
                
            })
            .catch((error)=>{
                console.log(error);  
                if(error.code == 'ERR_BAD_REQUEST') 
                    setError((prev)=>'URL is not Valid!')
                if(error.code == 'ERR_NETWORK') 
                    setError((prev)=>'Check Your Connection')
                
            })
                            
        } catch (error) {
            console.log(error);   
            setError((prev)=>error.message)
            
        }
    }
    
    useEffect(()=>{
          switch (action) {
            case "get":
                getData()   
                break;
           }
     },[url])    
     
  return {data,isloading,error};
}

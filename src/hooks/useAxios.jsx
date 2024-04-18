import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function  useAxios(url,action,userData) {
    const [data , setData] = useState(null)
    const [isloading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData =  ()=>{
            try {
                axios.get(url)
                .then(response=>{
                    setData(response.data)
                    setIsLoading(false)
                    
                })
                .catch((error)=>{
                    console.log(error);   
                    setError("Error in Fetch Data.Please check your connection!")
                })
                                
            } catch (error) {
                console.log(error);   
                setError("Error in Fetch Data.Please check your connection!")
                
            }
        }
        switch (action) {
            case "get":
                fetchData()        
                break;
        
            default:
                break;
        }
        
    },[])

  return {data,isloading,error};
}

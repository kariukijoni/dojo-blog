import React from 'react'
import { useState,useEffect } from 'react';

export default function useFetch(url) {
    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null);
    // const url='http://localhost:8003/blogs'
       
    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
             .then(res => {
                 if(!res.ok)
                 {
                    //  console.log(res)
                     throw Error("Couldn't fetch data for that resource");
                 }
                return res.json();
            })
            .then(data => {
            setData(data);
            setIsPending(false)
            setError(null)
            })
                .catch(err=>{
                    setIsPending(false)
                    setError(err.message)
         })
        },1000)
    }, [url]);
  return {data,isPending,error}
  
}

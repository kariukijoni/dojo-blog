import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BlogList from './BlogList'
import 'font-awesome/css/font-awesome.min.css';

export default function Home() {
    const [blogs,setBlogs]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null);
       
    useEffect(() => {
        setTimeout(()=>{
            fetch('http://localhost:8002/blogs')
             .then(res => {
                 if(!res.ok)
                 {
                    //  console.log(res)
                     throw Error("Couldn't fetch data for that resource");
                 }
                return res.json();
            })
            .then(data => {
            setBlogs(data);
            setIsPending(false)
            setError(null)
            })
                .catch(err=>{
                    setIsPending(false)
                    setError(err.message)
         })
        },1000)
    }, []);
        
        

        
  return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <i className="fa fa-spinner fa-spin"> </i>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='jakes')} handleDelete={handleDelete} title="Mario's Blog"/> */}
        
        
    
    </div>
  )
}

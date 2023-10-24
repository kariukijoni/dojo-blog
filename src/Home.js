import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BlogList from './BlogList'
import 'font-awesome/css/font-awesome.min.css';

export default function Home() {
    const [blogs,setBlogs]=useState(null)
    const [isPending,setIsPending]=useState(true)
       
    useEffect(() => {
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
             .then(res => {
                return res.json();
            })
            .then(data => {
            setBlogs(data);
            setIsPending(false)
         })
        },1000)
    }, []);
        
        

        
  return (
        <div className='home'>
            {isPending && <i className="fa fa-spinner fa-spin"> </i>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='jakes')} handleDelete={handleDelete} title="Mario's Blog"/> */}
        
        
    
    </div>
  )
}

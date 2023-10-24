import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BlogList from './BlogList'

export default function Home() {
    const [blogs,setBlogs]=useState(null)
       
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);
        
        

        
  return (
    <div className='home'>
        
        {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='jakes')} handleDelete={handleDelete} title="Mario's Blog"/> */}
        
        
    
    </div>
  )
}

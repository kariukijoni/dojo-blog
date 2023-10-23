import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'

export default function Home() {
    const [blogs,setBlogs]=useState([
        {title:'my first blog',body:'Lorem ipsum',author:'jakes',id:1},
        {title:'my second blog',body:'Lorem ipsum',author:'Jared',id:2},
        {title:'my third blog',body:'Lorem ipsum',author:'jakes',id:3}
    ])
    
    const handleDelete=(id)=>{
        const newblogs=blogs.filter(blog=>blog.id !==id)
        setBlogs(newblogs)
    }
    
        
  return (
    <div className='home'>
        
        <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
        
        <BlogList blogs={blogs.filter((blog)=>blog.author==='jakes')} handleDelete={handleDelete} title="Mario's Blog"/>
    
    </div>
  )
}

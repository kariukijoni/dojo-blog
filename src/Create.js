import React from 'react'
import { useState } from 'react'

export default function Create() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('')
    const[isPending,setIsPending]=useState(false)
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        const blog={title,body,author}
        
        setIsPending(true)
        
        // console.log(blog)
        
        fetch('http://localhost:8003/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added!')
            setIsPending(false)
        })
    }
    
  return (
    <div className='create'>
        <h3>
            Add new blog
        </h3>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            <label>Blog body:</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} required>
            </textarea>
            <label>Blog author:</label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value='jakes'>jakes</option>
                <option value='jared'>jared</option>
                <option value='paps'>paps</option>
            </select>
            
            { !isPending && <button>Add Blog</button> }
            { isPending && <button disabled>Adding Blog...</button> }
            
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
        </form>
    </div>
  )
}

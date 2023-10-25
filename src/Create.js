import React from 'react'
import { useState } from 'react'

export default function Create() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('')
    
  return (
    <div className='create'>
        <h3>
            Add new blog
        </h3>
        <form>
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
            <button>Add Blog</button>
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
        </form>
    </div>
  )
}

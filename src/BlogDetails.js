import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch';

export default function BlogDetails() {
    
    const {id}=useParams();
    const{data:blog,isPending,error}=useFetch('http://localhost:8003/blogs/'+id)
    
  return (
    <div className='blog-details'>
        {/* <h2>Blog details- {id}</h2> */}
        
        {isPending &&<i className="fa fa-spinner fa-spin"> </i>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <small>Written by {blog.author}</small>
                <div>{blog.body}</div>
            </article>
            
        )}
        
    </div>
  )
}

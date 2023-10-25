import React from 'react'
import {useParams} from 'react-router-dom'

export default function BlogDetails() {
    
    const {id}=useParams();
    
  return (
    <div className='blog-details'>
        <h2>Blog details- {id}</h2>
    </div>
  )
}

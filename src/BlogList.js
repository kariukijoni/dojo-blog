import React, { useState } from 'react'
import {Link} from 'react-router-dom';

export default function BlogList({blogs,title}) {
    
    // const blogs=props.blogs
    // const title=props.title
    
    // pagination
    const [currentPage,setCurrentPage]=useState(1)
    const recordsPerPage=5;
    const lastIndex=currentPage*recordsPerPage;
    const firstIndex=lastIndex-recordsPerPage;
    const records=blogs.slice(firstIndex,lastIndex);
    const npage=Math.ceil(blogs.length/recordsPerPage);
    const numbers=[...Array(npage+1).keys()].slice(1)
    
    
  
    function changeCPage(id){
      setCurrentPage(id)
    }
    
    function prePage(){
      if(currentPage !== 1){
        setCurrentPage(currentPage-1)
      }
    }
    
    function nextPage(){
      if(currentPage !== npage)
      {
        setCurrentPage(currentPage+1)
      }
    }
    
    
  return (
    <div className='blog-list container'>
    <h4>{title}</h4>
    
    <div className='row'>
        <div className='col-md-4'>
              {records.map((blog)=>(
                  <div className="card border-dark mb-3" key={blog.id}>
                  
                      <Link className='card-header bg-transparent' to={`blogs/${blog.id}`}>
                          <h6>{blog.title}</h6>
                          <small>Written by <b>{blog.author}</b></small>
                      </Link>
                      
                  </div>
            ))}
        </div>
        <div className='col-md-4'>
                    kkkk
        </div>  
    </div>
    
    {/* pagination */}
    
    <nav>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a href="#" className='page-link'
                        onClick={prePage}
                    >Prev</a>
                  </li>
                  {
                    numbers.map((n,i)=>(
                      <li className={`page-item ${currentPage === n ? 'active': ''}`} key={i}>
                        <a href="#" className='page-link' onClick={()=>changeCPage(n)}>{n}</a>
                      </li>
                    ))
                  }
                <li className='page-item'>
                    <a href="#" className='page-link'
                        onClick={nextPage}
                    >Next</a>
                  </li>
                </ul>
    </nav>
    
    </div>
  )
  
}

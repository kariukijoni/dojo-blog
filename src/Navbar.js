import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>The Dojo Blog</h1>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/create">Create New Blog</Link>
        </div>
    </nav>
  )
}

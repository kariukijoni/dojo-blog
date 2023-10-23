import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>The Dojo Blog</h1>
        <div className='links'>
            <a href="/">Home</a>
            <a href="/create">Create New Blog</a>
        </div>
    </nav>
  )
}
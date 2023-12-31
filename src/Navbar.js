import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
        // <nav classNameName='navbar navbar-expand-lg bg-body-tertiary'>
        //     <h3> Dojo Blog</h3>
        //     <div classNameName='links'>
        //         <Link to="/">Home</Link>
        //         <Link to="/create">Create New Blog</Link>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <Link className="navbar-brand" to="/">Dojo Blog</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ms-1" to="/create">Create New Blog</Link>
                  </li>
                </ul>
              </div>
        </nav>
  )
}

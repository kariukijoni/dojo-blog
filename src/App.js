import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
          <ul>
          <li>
              {/* <Link to='/'>Home</Link> */}
          </li>
          </ul>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
          </Routes>
            
          </div>
        </div>
    </Router>
  );
}

export default App;
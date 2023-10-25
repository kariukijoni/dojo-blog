import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
          </Routes>
          <Routes>
              <Route exact path='/create' element={<Create/>}></Route>
          </Routes>
            
          </div>
        </div>
    </Router>
  );
}

export default App;
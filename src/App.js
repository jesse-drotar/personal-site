import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages'
import Resume from './pages/resume'
import Projects from './pages/projects';
import Contact from './pages/contact'

function App() {
  return (
    <div style={{
      background: 'black'
    }}>
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

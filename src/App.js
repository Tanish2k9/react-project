import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Topbar from './component/topbar/Topbar'
import Movielist from './component/movielist/Movielist'
import Movie from './pages/singlepage/Movie'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/movie/:id" element={<Movie/>}  />
        <Route path="/movies/:type" element={<Movielist/>}  />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;

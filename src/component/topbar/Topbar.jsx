import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"
const Topbar = () => {
  return (
    <div className='topbar'>
        <Link to="/" className='topbarLink'> <span className="topbarlogo">MovieApp</span></Link>
        <Link to="/movies/popular" className='topbarLink'>popular</Link>
        <Link to="/movies/top_rated" className='topbarLink'>toprated</Link>
        <Link to="/movies/upcoming" className='topbarLink'>upcoming</Link>
        
    </div>
  )
}

export default Topbar
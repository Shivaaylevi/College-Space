import React from 'react'
import { Link } from 'react-router-dom';
import "./css/FirstYear.css";
function FirstYear() {
  return (
    <div className='fy'>
     <div className='container'>
    <h1>First Year</h1>
    <div className='subjs'>
    <Link className='subj1 subj' to='/appliedPhysics'>Applied Physics</Link>  
    <Link className='subj2 subj' to='/cpi'>Computer Peripherals and Interfaces</Link>  
    <Link className='subj3 subj' to='/dsa'>Data Structure & Algorithms</Link>  
    <Link className='subj4 subj' to='/maths'>Mathematics-I</Link>  
    <Link className='subj5 subj' to='/oops'>Object Oriented Programming Data Structure & Algorithms</Link>  
    <Link className='subj6 subj' to='/c++'>Programming Skills with 'C++' </Link>  
    <Link className='subj7 subj' to='/webDevlopment'>Web Development Lab-I(XML &HTML)</Link>  
    </div>
    </div>
    </div>
  )
}

export default FirstYear
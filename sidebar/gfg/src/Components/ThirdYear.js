import React from 'react'
import {Link} from 'react-router-dom';
import "./css/ThirdYear.css";
function ThirdYear() {
  return (
    <div className='fy'>
    <div className='container'>
   <h1>Third Year</h1>
   <div className='subjs'>
   <Link className='subj1 subj' to="/cgmm">Computer Graphics and Multimedia </Link>
   <Link className='subj2 subj' to="/ai">Artificial Intelligence</Link>
   <Link className='subj3 subj' to="/cyberSecurity">Cyber and Network Security</Link>
   <Link className='subj4 subj' to="/python">Programming with python</Link>
   <Link className='subj5 subj' to="/toc">Theory of Computation </Link>
   <Link className='subj6 subj' to="/iot">Internet of Things</Link>
   <Link className='subj7 subj' to="/cloudComputing">Cloud Computing</Link>
   <Link className='subj8 subj' to="/dataScience">Data Science </Link>
   </div>
   </div>
   </div>
  )
}

export default ThirdYear
import React from 'react'
import {Link} from "react-router-dom";
import "./css/SecondYear.css";
function SecondYear() {
  return (
    <div className='fy'>
    <div className='container'>
   <h1>Second Year</h1>
   <div className='subjs'>
   <Link className='subj1 subj' to="/computerNetwork">Computer Networks</Link>
   <Link className='subj2 subj' to="/operatingSystem">Operating System</Link>
   <Link className='subj3 subj' to="/dbms">Data Base Management System</Link>
   <Link className='subj4 subj' to="/advanceJava">Advanced Java Programming</Link>
   <Link className='subj5 subj' to="/dataComm">Data Communication</Link>
   <Link className='subj6 subj' to="/coreJava">Introduction to Core Java</Link>
   <Link className='subj7 subj' to="/html">Web Development Lab-II(PHP/JSP) </Link>
   </div>
   </div>
   </div>
  )
}

export default SecondYear
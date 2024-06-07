import React from 'react'
import "./css/Home.css"
import image from "./img/homeBackround.jpg"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
    <div>
    <img src={image} className="homeimg" alt="bi"/>
    <div className='homecontent'>
    <h1>Welcome to <span>College Space</span></h1>
    <br/>
    <div className='insidehc'>
    <h2>Please Select your year</h2>
    <br/>
    <Link className='an' to='/firstYear'>First Year</Link>
    <Link className='an' to='/secondYear'>Second Year</Link>
    <Link className='an' to='/thirdYear'>Third Year</Link>
    <Link className='an' to='/fourthYear' >Fourth Year</Link> 
    <br/>
    <br/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home

import { Link } from "react-router-dom"
import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <div>
      <section className='head'>
        <div className="container flexSB">
          <div className="logo">
            <h1>VALMIKI</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
       
          <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/daily'>Daily Quests</Link>
            </li>
            <li>
              <Link to='/coding'>Code</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFIED</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
        </div>
      </section>
    </div>
  )
}

export default Header

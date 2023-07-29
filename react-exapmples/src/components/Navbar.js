import React from 'react'
import {useRef} from 'react'

import '../styles/main.css'

import{FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
        console.log("Test")
    }

  return (
    <header>

        <h3>logo</h3>

        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>MyWork</a>
            <a href='/#'>Bloq</a>
            <a href='/#'>About me</a>

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes></FaTimes>
            </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
            <FaBars></FaBars>
        </button>

    </header>
  )
}

export default Navbar

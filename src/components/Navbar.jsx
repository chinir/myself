import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} className='nav-logo' />        
        <ul className='nav-manu'>
        <li><a className='anchor-link' offset={50} href='#home'>Home</a></li>
        <li><a className='anchor-link' offset={50} href='#about'>About</a></li>
        <li><a className='anchor-link' offset={50} href='#work'>My Work</a></li>
        <li> <a className='anchor-link'offset={50} href='#contact'>Contact Us</a></li>

        </ul>
        <div className='nav-connect'>for contect</div>
        
    </div>
  )
}

export default Navbar;
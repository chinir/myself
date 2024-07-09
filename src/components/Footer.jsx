import React from 'react'
import './Footer.css'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* logo */}
                <p>Social media is not a monologue, but a two-way interaction, so contact me on</p>
            </div>
            <div className="footer-top-right">
                {/* logos */}
                <a href="https://www.linkedin.com/in/niraj-chitroda/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/chinir" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </div>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>privacy policy</p>
            <p>contact with me</p>
        </div>
    </div>
  )
}

export default Footer
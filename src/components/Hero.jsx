import React from 'react'
import './Hero.css'
import nir from '../assets/nir2.png'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={nir} alt=""  />
        <h1><span>I'm Niraj Chitroda</span> <br></br>&lt;web devloper/&gt;</h1>
        <p>A passionate web developer with experience in CSS, JavaScript, and React.JS is looking for 
        an entry-level position.</p>
        <div className="hero-action">
        <div className="hero-connect"> connect with me</div>
        <div className="hero-resume">Resume</div>
        </div>
    </div>
  )
}

export default Hero
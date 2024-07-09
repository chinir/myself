import React from 'react'
import './About.css'
const About = () => {
  return (
    <div id ='about'className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-dabibaju">
          {/* <img></img> */}
        </div>
        <div className="about-jamnibaju">
          <div className="abut-para">
            <p>Hi, I'm Niraj Chitroda, an entry-level web developer with a passion for creating responsive and user-friendly websites. I'm committed to staying updated with the latest technologies in web development. Check out my projects, and feel free to contact me for collaboration or more information. Let's create something extraordinary together!</p>
          </div>
          <br/>
          <div className="about-skills">
            <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>javaScript</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>React.js</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>Bootstrap</p><hr style={{width:"50%"}} /></div>


          </div>
        </div>
      </div>
    </div>

  )
}

export default About
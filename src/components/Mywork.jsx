import React from 'react'
import './Mywork.css'
import jobjunction from '../assets/jobjunction.png'
import timer from '../assets/timer.png'
import ngo from '../assets/ngo.png'

const projects = [
    {
      title: 'Job-junction',
      description: 'this is my first project. It involves technologies like React, CSS, and JavaScript.',
    //   link: 'https://github.com/yourusername/project-one',
         image: jobjunction,
    },
    {
      title: 'Chrome-Extension',
      description: 'This is a brief description of Project Two. It involves technologies like HTML, CSS, and Node.js.',
    //   link: 'https://github.com/yourusername/project-two',
      image: timer,
    },
    {
        title: 'Ngo-web',
        description: 'This is a brief description of Project Two. It involves technologies like HTML, CSS, and Node.js.',
      //   link: 'https://github.com/yourusername/project-two',
        image: ngo,
      },
    // Add more projects as needed
  ];
  function Mywork() {
    return (
        <section id='work' className="project-section">
            <h2>My Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                    </div>
                ))}
            </div>
            <br />
            <br />
        </section>
        
    );
}

export default Mywork
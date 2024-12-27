import React from 'react'
import './Mywork.css'
import jobjunction from '../assets/jobjunction.png'
import timer from '../assets/sorts.png'
import ngo from '../assets/bitd.jpg'

const projects = [
    {
      title: 'Job-junction',
      description: 'A MERN-based job portal connecting job seekers and employers with seamless search, applications, and personalized features.',
      link: 'https://jobjunction1.onrender.com/',
         image: jobjunction,
    },
    {
      title: 'Sorting-Visulizer',
      description: 'An interactive MERN-based app for visually exploring and understanding sorting algorithms with real-time animations and complexity insights',
       link: 'https://sortvisulize.netlify.app/',
      image: timer,
    },
    {
        title: 'CRYPTD2',
        description: 'IN PROGRESS',
         //link: 'https://sortvisulize.netlify.app/',
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
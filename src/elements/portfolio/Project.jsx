import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Project = ({ id, column, list, image, category, title, description, techList, link, github }) => {
  return (
    <div key={id} className={column}>
        <div className="im_portfolio">
            <div className="thumbnail_inner">
                <div className="thumbnail">
                    {image}
                </div>
            </div>
            <div className="content">
                <div className="inner">
                    <div className="portfolio_heading">
                        <h4 className="title">{title}</h4>
                    </div>
                    <div className="portfolio_hover">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <a href={link} className="transparent_link" target="_blank" rel="noopener noreferrer" />
        </div>
        <div className="icons-container">
            {techList.map((tech, index)  => (
                <div key={`${id}-${index}`} className="icon">
                    <img src={tech.src} alt={tech.alt} />
                    <p>{tech.label}</p>
                </div>
            ))}    
        </div>
        <div className='github-container'>
            <a href={github} target="_blank" rel="noopener noreferrer">
                <button className='github-btn'>Github Code</button>
            </a>
        </div>
    </div>
  )
}

export default Project

import React from 'react'
import './About.css'

import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Universities provide a structured environment where you can study a wide range of subjects in depth, following a curriculum designed to cover essential knowledge. You have access to professors and lecturers who are experts in their fields.</p>
            <p>You can meet people from diverse backgrounds, form study groups, and build a network that could be beneficial for your future career. Universities often have extensive libraries.</p>
            <p>Universities often offer internships, research opportunities, and extracurricular activities that can enhance your learning and improve your resume.</p>
        </div>
    </div>
  )
}

export default About
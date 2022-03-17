import React from 'react'
import { SubHeading } from '../../components';
import {BsShieldFillCheck} from 'react-icons/bs'
import { BiSliderAlt } from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'
import {RiLineChartLine} from 'react-icons/ri'

import images from '../../constants/images'
import './About.css'

const logos = [images.astra, images.sinovac, images.pfizer, images.moderna];
const About = () => {
  return (
    <div className="app__about app__container">
      <div className="app__about-logos">
        {logos.map((imgUrl, index)=>(
          <div key={index} className="logo">
            <img src={imgUrl} alt="logo" />
          </div>
        ))}
      </div>
      <div className="app__about-title">
        <SubHeading title='why should i vaccine'/>
        <p>In order to avoid any doubts about getting the COVID-19 vaccine, identify the following 4 benefits of COVID-19 vaccination:</p>
      </div>
      <div className="app__about-boxes">
        <div className="box">
          <div className="icon-container">
            <BiSliderAlt/>
          </div>
          <h3>Minimize the spread of viruses</h3>
          <p>vaccine has been proven effective to prevent someone from getting infected with coronavirus</p>
        </div>
        <div className="box">
          <div className="icon-container">
            <BsShieldFillCheck/>
          </div>
          <h3>Forming antibodies</h3>
          <p>vaccine has been proven effective to prevent someone from getting infected with coronavirus</p>
        </div>
        <div className="box">
          <div className="icon-container">
            <HiUserGroup/>
          </div>
          <h3>protecting people nearby</h3>
          <p>vaccine has been proven effective to prevent someone from getting infected with coronavirus</p>
        </div>
        <div className="box">
          <div className="icon-container">
            <RiLineChartLine/>
          </div>
          <h3>creating group immunity</h3>
          <p>vaccine has been proven effective to prevent someone from getting infected with coronavirus</p>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import {BsShieldFillCheck, BsFillStarFill, BsFillClockFill, BsFillCalendar2WeekFill} from 'react-icons/bs'
import {HiLocationMarker, HiPencilAlt} from 'react-icons/hi'

import { PrimaryBtn } from "../../components";
import images from '../../constants/images'
import './Header.css'

const Header = () => {
  return (
    <div className="app__header app__container">
      <div className="app__header-text">
        <h2>fight virus with vaccines</h2>
        <p className='p-text'>
          Let's stop this pandemic by killing the virus with a vaccine, don't let yourself and your family get infected
        </p>
        <div className="app__header-info">
          <div>
            <BsShieldFillCheck/>
            <p>Best Protection</p>
          </div>
          <div>
            <BsFillStarFill/>
            <p>Selected vaccines</p>
          </div>
        </div>
        <div className="app__header-schedule">
          <div className="app__header-schedule-title">
            <div className="icon-container">
              <BsFillClockFill/>
            </div>
            <h3>schedule your vaccinations</h3>
          </div>
          <div className="app__header-schedule-info">
            <div className="location schedule-info-container">
              <div className="icon-container">
                <HiLocationMarker/>
              </div>
              <div className="info schedule-info-container">
                <p>location</p>
                <p>Jakarta Utara</p>
              </div>
            </div>
            <div className="date schedule-info-container">
              <div className="icon-container">
                <BsFillCalendar2WeekFill/>
              </div>
              <div className="info schedule-info-container">
                <p>date</p>
                <p>08 july 2022</p>
              </div>
            </div>
            <div className="type schedule-info-container">
              <div className="icon-container">
                <HiPencilAlt/>
              </div>
              <div className="info schedule-info-container">
                <p>vaccine type</p>
                <p>moderna</p>
              </div>
            </div>
            <PrimaryBtn title='submit'/>
          </div>
        </div>
      </div>
      <div className="app__header-img">
        <img src={images.nurse} alt="nurse header" />
      </div>
    </div>
  )
}

export default Header
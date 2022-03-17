import React from 'react'
import {BsFillTelephoneFill, BsChatDotsFill, BsCameraVideoFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'

import './Contact.css'
import { PrimaryBtn, SubHeading } from '../../components'
import images from '../../constants/images'

const contactSources = [
  {
    icon: BsFillTelephoneFill,
    title: 'call',
    number: '021.123.145.14',
    legend: 'call now'
  },
  {
    icon: BsChatDotsFill,
    title: 'chat',
    number: '021.123.145.14',
    legend: 'chat now'
  },
  {
    icon: BsCameraVideoFill,
    title: 'video call',
    number: '021.123.145.14',
    legend: 'video call now'
  },
  {
    icon: IoMdMail,
    title: 'message',
    number: '021.123.145.14',
    legend: 'message now'
  },
]
const Box = ({Component, title, number, legend}) => {
  return (
    <div className="box-container">
      <div className="box-info">
        <div className="icon-container">
          <Component/>
        </div>
        <div className="box-info-text">
          <h3>{title}</h3>
          <p className="p-text">{number}</p>
        </div>
      </div>
      <div className="box-button">
        <PrimaryBtn title={legend}/>
      </div>
    </div>
  );
}


const Contact = () => {
  return (
    <div className="app__contact app__container">
      <div className="app__contact-info">
        <SubHeading title='emergency contact'/>
        <p className="p-text">contact one of the contacts below if you or your family fell unwell and have similar symptoms such as COVID-19, make sure you also take care of yourself before reporting to us:</p>
        <div className="app__contact-info_types">
          {contactSources.map((source, index)=>(
            <Box key={index} Component={source.icon} title={source.title} number={source.number} legend={source.legend}/>
          ))}
        </div>
      </div>
      <div className="app__contact-img">
        <img src={images.nursemen} alt="contact img" />
      </div>
    </div>
  )
}

export default Contact
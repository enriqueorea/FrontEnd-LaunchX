import React from 'react'

import './PrimaryBtn.css'
const PrimaryBtn = ({title}) => {
  return (
    <button className='app__primaryBtn' type='button'>{title}</button>
  )
}

export default PrimaryBtn
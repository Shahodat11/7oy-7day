import React from 'react'
import '../main/main.css'
import iphone from '../../assets/Rectangle 3 (1).svg'

const Main = () => {
  return (
    <div className="container">
      <div className="nav-link">
        <div className="nav1">
          <h2>Mobile</h2>
          <h4>Backcover</h4>
          <h4>Tempered Glass</h4>
          <button className='button'>Shop all !</button>
        </div>
        <img className='img' src={iphone} alt="" />
      </div>
    </div>
  )
}

export default Main
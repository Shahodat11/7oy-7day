import React from 'react'
import '../mainTop/mainTop.css'
import tizig from '../../assets/Rectangle 18.svg'
import img from '../../assets/Rectangle 19.svg'
import phone from '../../assets/Rectangle 22.svg'

function MainTop() {
  return (
    <div className='container'>
        <div className="nav-link1">
            <img className='tizig' src={tizig} alt="" />
            <ul>
                <li>
                    <a href="#" className='a'>about us</a>
                </li>
            </ul>
            <p className='p'>If you’re looking for a Premium Quality
               Tempered Glass or Back-cover for
               your Device </p>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <img className='banner' src={img} alt="" />
        </div>
        <div className="nav-link2">
            <div className="navv">
                <h3 className='h3'>Shop Premium 
                    Tempered Glass in wholesale Price !</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <p>LKR : 299</p>
                <button className='button1'>Shop Tempered Glass </button>
            </div>
            <img src={phone} alt="" />
        </div>
    </div>
  )
}

export default MainTop
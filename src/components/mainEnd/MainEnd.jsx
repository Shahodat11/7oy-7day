import React from 'react'
import '../mainEnd/mainEnd.css'
import tizig from '../../assets/Rectangle 18.svg'
import car from '../../assets/delivery-truck-van_svgrepo.com.svg'
import dolor from '../../assets/cash-payment-solid_svgrepo.com (1).svg'
import yulduz from '../../assets/Vector.svg'

function MainEnd() {
  return (
    <div className='container'>
        <div className="nav-link4">
            <img className='tizig' src={tizig} alt="" />
            <ul>
                <li>
                    <a href="#" className='nav-a'>Why Choose US</a>
                </li>
            </ul>
            <div className="cards">
                <div className="cardd">
                    <img className='svgg' src={car} alt="" />
                    <h4 className='nav-h4'>Fast Delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="cardd">
                    <img className='svgg' src={dolor} alt="" />
                    <h4 className='nav-h4'>Cheap Price</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="cardd">
                    <img className='svgg' src={yulduz} alt="" />
                    <h4 className='nav-h4'>Premium Quality</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainEnd
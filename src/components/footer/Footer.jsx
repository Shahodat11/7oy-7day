import React from 'react'
import '../footer/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className="footer__nav">
                <div className="navss">
                    <p className='loremm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="navs">
                    <h5>Contact us</h5>
                    <h6>E: info@example.com</h6>
                    <h6>P: +94 7670000000</h6>
                    <h6>A: 123 Hospital rd, </h6>
                    <h6>Kalubowila, Dehiwela</h6>
                </div>
                <div className="navs">
                    <h5>Useful links</h5>
                    <h6>Shop All </h6>
                    <h6>Tempered Glass</h6>
                    <h6>Back-cover</h6>
                    <h6>About Us</h6>
                </div>
                <div className="navs">
                    <h6>Whatsapp</h6>
                    <h6>Facebook</h6>
                    <h6>Instargram</h6>
                    <h6>Tik Tok</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
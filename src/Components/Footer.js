import React from 'react';
import logo from '../Assets/images/logo.png'

function Footer() {
  return (
    <div>
       <div>
            <div className='footer-section flex'>
                <div className="footer-section company">
                    <img className='logo' src={logo} alt="logo"/>
                    <h4>Little Lemon</h4>
                </div>

                <div className="footer-section contact">
                    <h4>Contact use</h4>
                    <p>Lorem ipsum dolor sit 
                    amet consectetur 
                    adipisicing elit. 
                    Inventore, ratione!
                    </p>
                </div>

                <div className="footer-section controls">
                    <h4>Controls</h4>
                    <p>Order Online</p>
                    <p>Book a Table</p>
                </div>
                <div className="footer-section socials">
                    <h4>Socials</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

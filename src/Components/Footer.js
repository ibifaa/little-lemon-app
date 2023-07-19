import React from 'react';
import logo from '../Assets/images/logo.png'

function Footer() {
  return (
    <div>
       <div>
            <div id='footer' className='footer-section flex'>
                <div className="footer-logo-section company">
                    <img className='footer-logo' src={logo} alt="logo"/>
                    <h4 className='logo-txt'>Little Lemon</h4>
                </div>

                <div className="footer-section contact">
                    <h4>Contact use</h4>
                    <p>Lorem ipsum dolor sit <br />
                    amet consectetur <br />
                    </p>
                </div>

                <div className="footer-section controls">
             
                    <ul>
                    <li><h4>Controls</h4></li>
                    <li> <a href="">Order Online</a></li>
                    <li><a href="">Book a Table</a></li>
                    </ul>
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

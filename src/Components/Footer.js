import React from 'react';
import logo from '../Assets/images/logo.png'

function Footer() {
  return (
       
            <footer id='footer' className='footer-section'>

                <div className="footer-logo-section company flex">
                    <img className='footer-logo' src={logo} alt="logo"/>
                    <h4 className='footer-logo-txt'>Little Lemon</h4>
                </div>

                <div className="contact">
                    <h4>Contact use</h4>
                    <p>Lorem ipsum dolor sit 
                    amet consectetur 
                    </p>
                </div>

                <div className=" controls">
             
                    <ul className='footer-controls'>
                    <li><h4>Controls:</h4></li>
                    <li> <a href="">Order Online</a></li>
                    <li><a href="">Book a Table</a></li>
                    </ul>
                </div>

            </footer>
    
  )
}

export default Footer

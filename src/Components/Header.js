import React from 'react';
import logo from '../Assets/images/logo.png'
import Nav from './Nav';


function Header() {
  return (
    <div className='navbar flex headerClass'>
        <div className='brandSection flex'>
          <img src={logo} alt="logo" className='logo' />
          <p>Little Lemon</p>
        </div>

        <div className='harmbuger'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
    

        <div className='nav-items '>
        <Nav />
      </div>

      
    </div>
  )
}

export default Header

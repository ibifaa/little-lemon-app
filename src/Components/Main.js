import React from 'react';
import Home from  './Home';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import { BrowserRouter as Router } from 'react-router-dom';

function Main() {
  return (
    <div>
    <div className='home darkBrown'> <Home /></div>
    <div className='specials pink'> <Specials /> </div>
    <div className='testimonials darkBrown'>   <Testimonials /> </div>
    <div className='about'> <About /> </div>
    </div>
  )
}

export default Main

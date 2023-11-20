import React from 'react';
import Home from  './Home';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import { BrowserRouter as Router } from 'react-router-dom';

function Main() {
  return (
    <div>
    <section className=''> <Home /></section>
    <section className=''> <Specials /> </section>
    <section className=''>   <Testimonials /> </section>
    <section className=''> <About /> </section>
    </div>
  )
}

export default Main

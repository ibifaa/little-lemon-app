import React from 'react';
import logo from '../Assets/images/logo.png'

function About() {
  return (
    <div id='about' className='about-section flex padding'>
      <div className='text-section'>
          <h1 className='about-title'>Little Lemon</h1>
          <h3 className='about-subTitle'>Chicago</h3>
          <p className='about-txt '>Lorem ipsum dolor sit amet consectetur elit. 
            Quaerat doloribus corrupti fugit error. Dolorem quae voluptatibus, 
             facere quibusdam voluptate officiis accusamus quia cupiditate corpo 
              provident itaque quod voluptas eligendi commodi similique excepturi . 
               Aliquid eos, quo, suscipit iste asperiores dolorem illo, 
                odit eius soluta autem molestiae nihil.
          </p>
          <button className='homeBtn'>Reserve a Table</button>
      </div>
      <div className='image-section'>
        <img src={logo} className="aboutImg" alt="about" />
      </div>
    </div>
  )
}

export default About

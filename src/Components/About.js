import React from 'react';
import logo from '../Assets/images/logo.png'

function About() {
  return (
    <div id='about' className='about-section flex padding'>
      <div className='text-section'>
          <h1 className='about-title'>Little Lemon</h1>
          <h3 className='about-subTitle white-txt'>Chicago</h3>
          <p className='home-txt white-txt'>Lorem ipsum dolor sit amet consectetur elit. <br />
            Quaerat doloribus corrupti fugit error. Dolorem quae voluptatibus, <br />
             facere quibusdam voluptate officiis accusamus quia cupiditate corpo <br />
              provident itaque quod voluptas eligendi commodi similique excepturi . <br />
               Aliquid eos, quo, suscipit iste asperiores dolorem illo, <br />
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

import React, { useState } from 'react'
import homeImg from '../Assets/images/homeImg.jpg';
import { Navigate } from 'react-router-dom';


function Home() {

  const [goToBookingForm, setGoToBookingForm] = useState(false)
  if (goToBookingForm) {
    return <Navigate to="/bookingForm" />
  }

  return (
    <div id='home' className='home-section padding flex '>
      <div className='text-section'>
        <h1 className='title'>Little Lemon</h1>
        <h3 className='subTitle white-txt'>Chicago</h3>
        <p className='home-txt white-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quaerat doloribus corrupti fugit error. Dolorem quae voluptatibus esse quam, <br />
          facere quibusdam voluptate officiis accusamus quia cupiditate corporis sit <br />
          provident itaque quod voluptas eligendi commodi similique excepturi eveniet. <br />
          Aliquid eos, quo, suscipit iste asperiores dolorem illo, <br />
          odit eius soluta autem molestiae nihil.
        </p>
        <button className='homeBtn bg-yellow' onClick={() => { setGoToBookingForm(true) }}>Reserve a Table</button>
      </div>
      <div className='image-section'>
        <img src={homeImg} className="homeImg" alt="Home" />
      </div>

    </div>
  )
}

export default Home

import React, { useState } from 'react'
import homeImg from '../Assets/images/homeImg.jpg';
import { Navigate } from 'react-router-dom';


function Home() {

  const [goToBookingForm, setGoToBookingForm] = useState(false)
  if (goToBookingForm) {
    return <Navigate to="/bookingForm" />
  }

  return (
    <div id='home' className='home-section flex '>
      <div className='text-section'>
        <h1 className='title'>Little Lemon</h1>
        <h3 className='subTitle white-txt'>Chicago</h3>
        <p className='home-txt white-txt'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. <p className='home-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit in soluta, neque at dolor aut nam, odit deleniti illum pariatur fugiat fugit, 
                nisi dignissimos iure! Blanditiis</p>

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

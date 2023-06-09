import React from 'react'
import homeImg from '../Assets/images/homeImg.jpg'

function Home() {
  return (
      <div className='HomePage padding'>
        <div className='text-section'>
          <h1 className='title'>Little Lemon</h1>
          <h3 className='subTitle white-txt'>Chicago</h3>
          <p className='home-txt white-txt'>     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Maiores tenetur quas modi totam nobis. 
          Sequi perspiciatis alias excepturi sed a.
          </p>
          <button className='homeBtn bg-yellow'>Reserve a Table</button>
      </div>
      
      <div className='image-section'>
        <img src={homeImg} className="homeImg" alt="Home" />
      </div>
      
    </div>
  )
}

export default Home

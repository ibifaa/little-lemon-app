import React from 'react';
import image1 from '../Assets/images/image1.jpg';
import image2 from '../Assets/images/image2.jpg';
import image3 from '../Assets/images/image3.jpg';

function Specials() {
  return (
    <div id='specials' className='specials'>
      <div className='special-heading flex'>
        <h3 className='special-title'> SPECIALS</h3>
        <button className='specialBtn darkBrown darkBg'> Online Menu</button>
      </div>

    <div className='card-section flex'>
      <div className='card light'>
        <div className='card-image-section'>
            <img src={image1} alt="food" className='card-image' />
        </div>

        <div className='card-body' >
            <div className="food-price-section flex">
              <h5 className='food-type'>Salad Cream</h5>
              <h5 className="price">$ 5.00</h5>
            </div>
                <p className='card-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit in soluta, neque at dolor aut nam, odit deleniti illum pariatur fugiat fugit, 
                nisi dignissimos iure! Blanditiis.</p>
            
            
            <div className="flex order-section">
              <h5 className='order-details'>Order Delivery</h5>
              <h5 className="quantity">+1</h5>
            </div>
            </div>
        </div>

       {/* Card Two*/}
         <div className='card light'>
        <div className='card-image-section'>
            <img src={image3} alt="food" className='card-image' />
        </div>

        <div className='card-body' >
            <div className="food-price-section flex">
              <h5 className='food-type'>Salad Cream</h5>
              <h5 className="price">$ 5.00</h5>
            </div>
                <p className='card-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit in soluta, neque at dolor aut nam, odit deleniti illum pariatur fugiat fugit, 
                nisi dignissimos iure! Blanditiis.</p>
            
            
            <div className="flex order-section">
              <h5 className='order-details'>Order Delivery</h5>
              <h5 className="quantity">+1</h5>
            </div>
            </div>
        </div>

        {/* Card Three*/}
         <div className='card light'>
        <div className='card-image-section'>
            <img src={image2} alt="food" className='card-image' />
        </div>

        <div className='card-body' >
            <div className="food-price-section flex">
              <h5 className='food-type'>Salad Cream</h5>
              <h5 className="price">$ 5.00</h5>
            </div>
                <p className='card-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit in soluta, neque at dolor aut nam, odit deleniti illum pariatur fugiat fugit, 
                nisi dignissimos iure! Blanditiis.</p>
            
            
            <div className="flex order-section">
              <h5 className='order-details'>Order Delivery</h5>
              <h5 className="quantity">+1</h5>
            </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Specials
import React from 'react';
import image1 from '../Assets/images/image1.jpg';

function Specials() {
  return (
    <div>
      <div className='title-section'>
      <h3 className='section-heading'> SPECIALS</h3>
      <button> Online Menu</button>
      </div>
      <div className='special-body'>
        <div className='image-section'>
            <img src={image1} alt="food" className='food-img' />
        </div>
        <div className="text-section">
            <div>
            <div className="flex">
            <h5 className='food'>Salad Cream</h5>
            <p className="price">$ 5.00</p>
            </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit in soluta, neque at dolor aut nam, odit deleniti illum pariatur fugiat fugit, 
                nisi dignissimos iure! Blanditiis, pariatur nemo facilis possimus quaerat voluptates? 
                Quia porro voluptas impedit similique, fugiat autem dicta iste,
                 dolores totam nemo ipsa molestiae, veniam consectetur earum in.</p>
            <div className="flex">
            <h5 className='order-details'>Salad Cream</h5>
            <h5 className="quantity">$ 5.00</h5>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Specials
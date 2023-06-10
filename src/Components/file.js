return (
      <div className='testimonial-section'> 
          <button className='next' onClick={nextSlide} > {nextSymbol} </button>
          <button className='prev' onClick={prevSlide} > {prevSymbol} </button>
        
          {myTestimonials.map((currentSlide, ind) =>{
          return (
            <div>
              <p  className='comment'>{myTestimonials.txt}</p>
              <h5  className='name'>{myTestimonials.name} </h5>
              <img  src={myTestimonials.url} alt={myTestimonials[myIndex].name}  className='image'/>
            </div>
          );
        })}
      </div>
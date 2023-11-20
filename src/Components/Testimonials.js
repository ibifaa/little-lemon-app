import React, { useState } from 'react'

const myTestimonials = [ {
  id: 1,
  image: {url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxmMBO3vRil-ORcHLSi4wLzYCevjNpJOPDhPhnsi1jhDuY7ysv'},
  name: "Dennis Ritchie",
  txt: "Dennis MacAlistair Ritchie, an American computer scientist, is recognized for helping to shape and develop the digital era. He invented the most widely used C programming language, which is used today in a wide range of software applications, embedded system development, and operating systems, and has impacted the creation of most current programming languages.",
},
{ id: 2,
  image:{url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkX45a1tQQSUinM5dJtlJOkozGxinV0_mRRPRmIXi3dvnqSyRm'},
  name: "Linus Torvalds",
  txt: "Linus Benedict Torvalds is a software engineer from Finland. He designed the Linux kernel operating system in his college dorm at the University of Helsinki, and he is the inventor and director of the Linux kernel. He also invented the Git(Open Source) centralized control system, which is currently used all over the globe."
}, 
{
  id: 3,
  image: {url: 'https://www.engineering.columbia.edu/files/seas/styles/300x300/public/content/bio_profile_image/2020/27/stroustrup_500.png?itok=CumUm5ll'},
  name: "Bjarne Stroustrup",
  txt: "A computer scientist from Denmark, Bjarne Stroustrup. In Bell Lab, he created and developed the most extensively used computer language, C++. Stroustrup earned the Senior Dahl–Nygaard Prize in 2015, the Faraday Medal from the College of Engineering and Technology (IET) in 2017, the IEEE Computer Society’s 2018 Computer Innovator Award, and an honorary doctorate from the University Carlos III in Spain recently"
},
{
   id: 4,
   image:{url:'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRjmKV7h6gCgo4ADnbCohB7k9iyD7uAB6TlymsaH_jJMoG-sOAEeXaFE2UjDBjOWYqaQp2dYlyKV8hPkvU'},
  name: "Tim Berners-Lee",
  txt: "Tim” Berners-Lee, usually known as “TimBL,” is a British computer scientist who is best known for the HTML, URL, and HTTP technologies. He was the one who originally exposed us to the World Wide Web in 1989 and set up the first successful Internet communication between a Hypertext Transfer Protocol client and server."
}
]

const prevSymbol = ">";
const nextSymbol = "<"



function Testimonials() {

   const myLength = myTestimonials.length;
  const [currentIndex, setIndex] = useState(0);
  
 

  const nextSlide = () =>{
  // const defaultIndex = (index > myLength) ? 0
    setIndex(currentIndex === myLength - 1 ? 0 : currentIndex + 1 );
  }

  const prevSlide = () => {
    // (index < myLength)? setIndex(myDefault2):
    setIndex(currentIndex === 0  ? myLength - 1 : currentIndex - 1);
  }

 
      return (
      <div id='testimonials' className='testimonial-section center'>
        <div className='testimonial-content'>
        <p  className='comment'>{myTestimonials[currentIndex].txt}</p>
        <h5  className='name'>{myTestimonials[currentIndex].name} </h5>
        <img className="programmers" src={myTestimonials[currentIndex].image.url} alt={myTestimonials[currentIndex].name}/>
        <div  className="buttons">
        <button className='next btn ' onClick={nextSlide} > {nextSymbol} </button>
        <button className='prev btn ' onClick={prevSlide} > {prevSymbol} </button>
        </div>
        </div>

        </div>
      )
  
}

export default Testimonials

import React, { Fragment } from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';


function MainPage() {
  return (
    <React.Fragment>
    <div className='layout'>

      <div className='header'>
        <Header />
      </div>
      
      <div className='nav'>
        <Nav />
      </div>
       
      <div className='main'>
       <Main />
      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>

     </React.Fragment>
  )
}

export default MainPage

import React, { Fragment, useState } from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonials from './Testimonials';
import About from './About';
import Home from './Home';
import Specials from './Specials';
import BookingForm from './BookingForm';
import ConfirmedBookingPage from './ConfirmedBookingPage';



function MainPage() {
  const [avaliableTimes, setAvailableTimes] = useState({
    resDate: "",
    resTime: "",
    guest: "",
    occasion: ""
  });

  return (
    <Router>
      <div className='header light'>
        <Header />
      </div>
      <div className='nav lightPink'>
        <Nav />
      </div>
      <React.Fragment>
        <div className='layout'>
          <div className='main'>
            <Routes>
              <Route path='/' element={<Main />}>
                <Route path='/home' element={<Home />} />
                <Route path='/specials' element={<Specials />} />
                <Route path='testimonials' element={<Testimonials />} />
                <Route path='/about' element={<About />} />
              </Route>
              <Route path='/bookingForm' element={<BookingForm avaliableTimes={avaliableTimes}  setAvailableTimes={setAvailableTimes}/>} />
              <Route path='/confirmedBookingPage' element={<ConfirmedBookingPage />} />
            </Routes>
          </div>

          <div className='footer light padding'>
            <Footer />
          </div>

        </div>

      </React.Fragment>
    </Router>
  )
}

export default MainPage

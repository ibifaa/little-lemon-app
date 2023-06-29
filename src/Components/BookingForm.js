import React, { useContext, useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ConfirmedBookingPage from './ConfirmedBookingPage';
import { AvailableTimesContext } from './MyContext';
// import { useForm } from 'react-hook-form';

// const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']


function BookingForm() {
  const { availableTimes, dispatch } = useContext(AvailableTimesContext);
  const [resDate, setResDate] = useState('')
  const [resTime, setResTime] = useState('')

  const [guest, setGuest] = useState(0);
  const [occasion, setOccasion] = useState();

  useEffect(() => {
    const newTimes = calculateAvailableTimes(resDate);
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: newTimes })
  }, [resDate, dispatch])

  const handleDateChange = (e) => {
    setResDate(e.target.value)
  }

  const calculateAvailableTimes = (selectedDate) => {
    return availableTimes
  }

  const [isFormVissible, setIsFormVissible] = useState(true);

  const inputFileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormVissible(false);
  }



  const [goToConfirmedBooking, setGoToConfirmedBooking] = useState(false)
  if (goToConfirmedBooking) {
    return <Navigate to="/confirmedBookingPage" />
  }

  return (
    <>
      {isFormVissible ? (
        <div className='bookingForm' >
          <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }} action="" method="post">
            <h1>Reserve a Table</h1>

            <label htmlFor="resDate">Choose date:</label>
            <input type="date" name="resDate" id="date" onChange={handleDateChange} />
            <label htmlFor="resTime">Choose Time</label>

            <select value={resTime} onChange={(e) => setResTime(e.target.value)}>
              <option value=""> Select a time </option>
              {availableTimes.map((availableTime, index) =>
                <option key={index} value={availableTime}>
                  {availableTimes}
                </option>)}

            </select>
            <label htmlFor="guest">Number of guests</label>
            <input type="number" name='guest' placeholder='1' min="1" max="10" id='guests' onChange={(e) => setGuest(e.target.value)} />

            <select id="occasion" name='occasion' onChange={(e) => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input type="submit" value="Make your Reservation" />
          </form>
        </div >
      ) : (
        <ConfirmedBookingPage guest={guest} occasion={occasion} resTime={resTime} resDate={resDate} />
      )
      }
    </>

  )
};

export default BookingForm

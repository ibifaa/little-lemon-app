import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ConfirmedBookingPage from './ConfirmedBookingPage';
// import { useForm } from 'react-hook-form';


let arrOfResTimes = [
  { label: "17.00", value: "17.00" },
  { label: "18.00", value: "18.00" },
  { label: "19.00", value: "19.00" },
  { label: "20.00", value: "20.00" },
  { label: "21.00", value: "21.00" },
  { label: "22.00", value: "22.00" }
]


function BookingForm(props) {

  const [isFormVissible, setIsFormVissible] = useState(true);

  const inputFileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormVissible(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setAvailableTimes((prev) => {
      return { ...prev, [name]: value }
    })
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
            <label htmlFor="resDate">Choose date</label>
            <input type="date" name="resDate" id="date" onChange={handleChange} />
            <label htmlFor="resTime">Choose time</label>
            <select id="resTime" name="resTime" onChange={handleChange}>
              <option value="Choose a Time">Choose a Time</option>
              {arrOfResTimes.map((myTime) => <option value={myTime.value} key={myTime.label}> {myTime.label}</option>)}
            </select>
            <label htmlFor="guest">Number of guests</label>
            <input type="number" name='guest' placeholder='1' min="1" max="10" id='guests' onChange={handleChange} />
            <select id="occasion" name='occasion' onChange={handleChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input type="submit" value="Make your Reservation" />
          </form>
        </div>
      ) : (
        <ConfirmedBookingPage data={props.avaliableTimes} />
      )}
    </>
  );
};

export default BookingForm

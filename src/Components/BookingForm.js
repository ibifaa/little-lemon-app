import React, { useContext} from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ConfirmedBookingPage from './ConfirmedBookingPage';
import { AvailableTimesContext } from './MyContext';
// import { basicSchema } from '../schemas';
// import MyContext from './MyContext';

const  BookingForm = () => {
  const {availableTimes, updateTimes } = useContext(AvailableTimesContext);
  
  
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [telephone , setTelephone] = useState("")
  const [guest, setGuest] = useState("")
  const [resDate, setResDate] = useState("")
  const [occasion , setOccasion] = useState("")

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsFormVisible(false);

  }

  const [resTime, setResTime] = useState(
    availableTimes.map((times) => <option> {times}</option>)
  );

  const handleDateChange = (e) => {
    setResDate(e.target.value);

    var stringify = e.target.value;
    const resDate = new Date(stringify);

    updateTimes(resDate);

    setResTime(availableTimes.map((times) => <option>{times}</option>));
  };

  const [isFormVisible, setIsFormVisible] = useState(true);
  
  const inputFileRef = useRef();


  const [goToConfirmedBooking, setGoToConfirmedBooking] = useState(false)
  if (goToConfirmedBooking) {
    <Navigate to="/confirmedBookingPage" />
  }


  return (
    <>
      {isFormVisible ? (
        <div className='bookingForm' >
          <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }} action="" method="post">
            <h1>Reserve a Table</h1>

            <label htmlFor="name">Name:</label>
            <input 
            value={name} 
            id="name" 
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />

            <label htmlFor="email">Email:</label>
            <input type="email" value={email} 
            name="email" id="email"  onChange={(e) => setEmail(e.target.value)}
            />
            
            <label htmlFor="telephone">Phone:</label>
            <input type="phone" value={telephone} 
            name="phone" id="telephone"  onChange={(e) => setTelephone(e.target.value)}
            />

            <label htmlFor="resDate">Choose a date:</label>
            <input type="date" value={resDate} name="resDate" id="resDate" 
            onChange={handleDateChange}/>
            
            <label htmlFor="resTime">Choose a Time</label>
            <select id='resTime' required>
             {resTime}
             </select>

            <label htmlFor="guest">Number of guests</label>
            <input type="number" value={guest} name='guest' placeholder='1' 
            min="1" max="10" id='guests' onChange= {(e) => setGuest(e.target.value)}  
            required />
            
            <label htmlFor="occasion">Occasion type</label>   
            <select id="occasion" name='occasion' 
            onChange={(e) => setOccasion(e.target.value)} required>
              <option>None</option>
              <option>Anniversary</option>
              <option>Wedding</option>
              <option>Engagement</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
            <input type="submit" value="Make your Reservation" />
          </form>       
          </div >
        ) : (
          <ConfirmedBookingPage />
        )
      }
    </>      
  )
 }

export default BookingForm

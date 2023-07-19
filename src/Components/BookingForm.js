import React, { useContext} from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ConfirmedBookingPage from './ConfirmedBookingPage';
import { AvailableTimesContext } from './MyContext';
import image4 from '../Assets/images/image4.jpg';
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
    <div className='formContainer light'>
    <div className='bookingForm flex' >
    <div className='image-section'>
        <img src={image4} className="formImg" alt="form image"/>
      </div>
     
        <div>
          <form className='form-section' onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }} action="" method="post">
          <h4> Information for Reservation</h4>
            <label htmlFor="resDate" className='label'>Choose a date:</label>
            <input type="date" value={resDate} name="resDate" id="resDate" 
            onChange={handleDateChange}/>
            
            <label htmlFor="resTime" className='label'>Choose a Time</label>
            <select id='resTime' required>
             {resTime}
             </select>

            <label htmlFor="guest" className='label'>Number of guests</label>
            <input type="number" value={guest} name='guest' placeholder='1' 
            min="1" max="10" id='guests' onChange= {(e) => setGuest(e.target.value)}  
            required />
            
            <label htmlFor="occasion" className='label'> Occasion type</label>   
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
          </div>
        
    </div>      
    </div>
    ) : (
      <ConfirmedBookingPage />
    )
  }
    </>
  )
 }

export default BookingForm

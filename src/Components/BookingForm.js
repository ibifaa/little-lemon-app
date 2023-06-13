import React from 'react';
import { useForm } from 'react-hook-form';

function BookingForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='bookingForm'>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", maxWidth: "200px", gap: "20px" }} action="" method="post">
        <label htmlFor="resDate">Choose date</label>
        <input type="date" id="date" {...register("resDate")} />
        <label htmlFor="resTime">Choose time</label>
        <select id="resTime" {...register("resTime")}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guest">Number of guests</label>
        <input type="number" placeholder='1' min="1" max="10" id='guests' {...register("number of guest")} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...register("occasion")}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make your Reservation" />
      </form>
    </div>
  )
}

export default BookingForm

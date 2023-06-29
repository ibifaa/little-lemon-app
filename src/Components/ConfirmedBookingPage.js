import React from 'react';
import BookingForm from './BookingForm';


function ConfirmedBookingPage(props) {

    return (
        <div>
            <h1>Booking is Successfull</h1>
            <p>Date: {props.resDate}</p>
            <p>Time: {props.resTime}</p>
            <p>Number of Guest: {props.guest}</p>
            <p> Occasion: {props.occasion}</p>
        </div>
    )
}

export default ConfirmedBookingPage

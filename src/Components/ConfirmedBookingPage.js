import React from 'react';


function ConfirmedBookingPage({ data }) {

    return (
        <div>
            <h1>Booking is Successfull</h1>
            <p>Date: {data?.resDate}</p>
            <p>Time: {data?.resTime}</p>
            <p>Number of Guest: {data?.guest}</p>
            <p> Occasion: {data?.occasion}</p>
        </div>
    )
}

export default ConfirmedBookingPage

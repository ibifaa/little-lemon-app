import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
    return (
        <div className="padding">
            <div className="link-section flex">
                <Link to="/home" className="link "> Home</Link>
                <Link to="#about" className="link "> About </Link>
                <Link to="#specials" className="link "> Menu </Link>
                <Link to="/bookingForm" className="link"> Reservation </Link>
                <Link to="/bookingForm" className="link">  Order Online</Link>
                <Link to="/home" className="link "> Login  </Link>
            </div>
        </div>
    )
}
export default Nav;

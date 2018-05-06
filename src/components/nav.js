import React from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <Link to="/" className="nav-link">Welcome</Link>
            </li>
            <li className="nav-item">
                <Link to="/our_macarons" className="nav-link">Our Macarons</Link>
            </li>
            <li className="nav-item">
                <Link to="/gift_parties" className="nav-link">Gift Parties</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
    )
}
export default Nav;
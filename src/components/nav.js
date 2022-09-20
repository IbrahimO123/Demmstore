import React from 'react';
import { Link } from "react-router-dom";

function Nav () {


    return <nav>
        <Link to="/" className='link' >Home</Link>
        <Link to="/blog1" className='link' >Blog1</Link>
        <Link to="/blog2"  className='link' >Blog2</Link>
    </nav>
}


export default Nav;
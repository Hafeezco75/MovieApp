import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/home'><p>Home</p></Link></li>
                <li><Link to='/aboutUs'><p>About us</p></Link></li>
                <li><Link to='/login'><p>login</p></Link></li>
                <li><Link to='/Signup'>Sign up</Link></li>
                <li><Link to='/topRated'><p>TopRated</p></Link></li>
            </ul>
        </div>
    )
}

export default Header;
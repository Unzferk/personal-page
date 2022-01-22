import React, {useState} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Navbar.css';


 
function Navbar() {
    
    const[show,setShow] = useState(false);
    
    const showToggle = () => {
        setShow(!show);
    }

    return(
        <>
        <nav className="navbar">
            <div className="navbar__logo"><Link exact to="/">UNZFERK<span>.DEV</span></Link></div>
                <ul className={show? "navbar__menu show" : "navbar__menu" }>
                    <li><NavLink exact to="/" activeClassName='active' >Home</NavLink></li>
                    <li><NavLink exact to="/knowledge" activeClassName='active' >Knowledge</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName='active' >Contact</NavLink></li>
                </ul>
                
                <div className="navbar__toggle" onClick={showToggle}>
                    <i className="fas fa-align-justify"></i>
                
                </div> 
        </nav>
        </>
    )
}

export default Navbar

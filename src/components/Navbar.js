import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {DiAtom} from 'react-icons/di';
import {IoIosHome} from 'react-icons/io'
import { Button } from './Button';
import './Navbar.css';
 
function Navbar() {

    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize',showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <DiAtom className='navbar-icon'/>
                </Link>
                <div className = 'menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                            <IoIosHome className='navbar-icon'/>Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/knowledge' className= 'nav-links' onClick={closeMobileMenu}>
                            Knowledge
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' className= 'nav-links-mobile' onClick={closeMobileMenu}>
                            Contact Me
                        </Link>
                    </li>
                    
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}

            </div>
        </nav>
        </>
    )
}

export default Navbar

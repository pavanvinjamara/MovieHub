import React, {useState} from 'react'
import './Navbar.css';
import LogoNav from '../../assets/logomovie.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBars,
  faClose
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navbar({isLoggedIn}) {
  const [showNav, setShowNav] = useState(false);
  const handleNav =() =>{
    setShowNav(!showNav);
  }
  
  return (
    <div className='header'>
        <img src={LogoNav} alt='navlog' className='navlogo'/>
        <nav className={showNav ?'nav-links-mobile':'navbar'}>
        
        
          <ul className='list1'>
            <li>
              <Link to="/"  className='links'>
              Home
              </Link>
            </li>
            <li>
            <Link to="/language"  className='links'>
              Language
              </Link>
            </li>
            <li>
            <Link to="/genre"  className='links'>
              genre
              </Link>
            </li>
      
          
            <li>
            <Link to="/login" className='links'>{isLoggedIn ? "LogOut" : "login"}</Link>
            </li>
            </ul>
        </nav>
        <div className='menu-icon' onClick={handleNav}>
          {showNav? <FontAwesomeIcon icon={faClose}
            onClick={() => setShowNav(false)}
            size="2x"
            className='close-icon'
            />: <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars} 
            size="2x"
            className='hamlogo'/>}
        </div>
    </div>
  )
}

export default Navbar
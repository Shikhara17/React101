import { click } from '@testing-library/user-event/dist/click'
import React,{useState, useEffect} from 'react';
import {Button} from './Button'
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    //To handle the hamburger menu, It basically changes it back from 'x' to '---' 
    //and viceversa. 
    const [click, setClick] = useState(false); 
    
    const handleClick =() => setClick(!click);

    //

    const [button, setButton] = useState(true);

    const closeMobileMenu =()=>setClick(false);

    const showButton =() =>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton)

  return (
   <>
   <nav className='navbar'>
    <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
            Shikhara <i className='fab fa-typo3' onClick={closeMobileMenu}/>
        </Link>
        {/* hamburgermenu, event handling at the top */}
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
        </div>
        {/* we need the nav menu to appear or dissapear when we click on it */}
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact-me' className='nav-links' onClick={closeMobileMenu}>
                    contact me</Link>
            </li>
        </ul>
         {button && <Button buttonStyle='btn--outline'>Contact me</Button>}

    </div>
   </nav>
   </>
  )
}

export default Navbar

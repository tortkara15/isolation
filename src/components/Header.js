import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes, FaGreaterThan} from "react-icons/fa";
import Logo from '../assets/logo192.png';
import DropMenu from './DropMenu';
import { useMediaQuery } from 'react-responsive';


function Header() {
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 820px)` });
  
  function HandleClick() {
    setOpen(true);
  }

  function HandleClose() {
    setOpen(false);
  }
  
  function HandleFocus(){
setFocus(true);
  }
  function HandleLeave() {
    setFocus(false)
  }
  
  return ( 
    <>
     <section className="navbar">
      <div className="logo">
        {<img src={Logo} alt="logo" className="logo-img" /> }
        <h2 className="logo-title"><Link to='/'>Profmet</Link> </h2>
      </div>
      <div className="header-menu ">
        <ul className={open?'nav-links container nav-links_open':'nav-links container '}>
          <li className='nav-link'>
            <Link to='/products' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>МАТЕРИАЛЫ URSA</Link>
            <FaGreaterThan className='nav-link_icon' />
            </li>
          <li className='nav-link'>
            <Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>ОБЛАСТИ ПРИМЕНЕНИЯ</Link>
              <FaGreaterThan className='nav-link_icon'/>
              </li>
          <li className='nav-link'>
            <Link to='#' >ПОДБОР МАТЕРИАЛА</Link>
            <FaGreaterThan className='nav-link_icon'/>
            </li>
          <li className='nav-link'>
            <Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>БИБЛИОТЕКА</Link>
              <FaGreaterThan className='nav-link_icon'/>
              </li>
          <li className='nav-link'>
            <Link to='#'>ГДЕ КУПИТЬ</Link>
              <FaGreaterThan className='nav-link_icon'/>
              </li>
          <li className='nav-link'>
            <Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>ПОЧЕМУ URSA</Link>
            <FaGreaterThan className='nav-link_icon'/>
            </li>
          <li className='nav-link'>
            <Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}><FaBars/></Link>
            <FaGreaterThan className='nav-link_icon'/></li>
        </ul> 
          <div className='menuIcon' >{open?<FaTimes onClick={HandleClose}/>:<FaBars onClick = {HandleClick}/>}
          </div>
        <DropMenu focus={focus}/>
      </div>
    </section>
    
    </>
  );
}


export default Header;
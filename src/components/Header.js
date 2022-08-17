import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import Logo from '../assets/logo192.png';
import DropMenu from './DropMenu';



function Header() {
  const [focus, setFocus] = useState(false);
  function HandleFocus(){
setFocus(true);
  }
  function HandleLeave() {
    setFocus(false)
  }
  return ( 
    <>
     <section className="section navbar">
      <div className="logo">
        {<img src={Logo} alt="logo" className="logo-img" /> }
        <h2 className="logo-title"><Link to='/'>Profmet</Link> </h2>
      </div>
      <div className="header-menu">
        <ul className="nav-links">
          <li><Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>МАТЕРИАЛЫ URSA</Link></li>
          <li><Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>ОБЛАСТИ ПРИМЕНЕНИЯ</Link></li>
          <li><Link to='#' >ПОДБОР МАТЕРИАЛА</Link></li>
          <li><Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>БИБЛИОТЕКА</Link></li>
          <li><Link to='#'>ГДЕ КУПИТЬ</Link></li>
          <li><Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}>ПОЧЕМУ URSA</Link></li>
          <li><Link to='#' onMouseEnter={HandleFocus} onMouseLeave = {HandleLeave}><FaBars/></Link></li>
        </ul>
      </div>
    </section>
    <DropMenu focus={focus}/>
    </>
  );
}


export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import Logo from '../assets/logo192.png'


function Header() {
  return (
    <section className="section navbar">
      <div className="logo">
        {<img src={Logo} alt="logo" className="logo-img" /> }
        <h2 className="logo-title"><Link to='/'>Profmet</Link> </h2>
      </div>
      <div className="header-menu">
        <ul className="nav-links">
          <li><Link to='#'>МАТЕРИАЛЫ URSA</Link></li>
          <li><Link to='#'>ОБЛАСТИ ПРИМЕНЕНИЯ</Link></li>
          <li><Link to='#'>ПОДБОР МАТЕРИАЛА</Link></li>
          <li><Link to='#'>БИБЛИОТЕКА</Link></li>
          <li><Link to='#'>ГДЕ КУПИТЬ</Link></li>
          <li><Link to='#'>ПОЧЕМУ URSA</Link></li>
          <li><Link to='#'><FaBars/></Link></li>
        </ul>
      </div>
    </section>
  );
}


export default Header;
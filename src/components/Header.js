import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <section className="section navbar">
      <div className="logo">
        <img src="../../public/logo192.png" alt="logo" className="logo-img" />
        <h2 className="logo-title"><Link to='/'>Profmet</Link> </h2>
      </div>
      <div className="header-menu">
        <ul className="nav-links">
          <li><Link to='#'>Ursa Materials</Link></li>
          <li><Link to='#'>Where to use</Link></li>
          <li><Link to='#'>Choose the material</Link></li>
        </ul>
      </div>
    </section>
  );
}


export default Header;
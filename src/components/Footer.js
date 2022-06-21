import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
   <section className="section navbar">
     <div className="footer-menu">
       <ul className="nav-links">
         <li><Link to = '#'>ursa materials</Link></li>
         <li><Link to = '#'>useful services</Link></li>
         <li><Link to = '#'>material library</Link></li>
       </ul>
     </div>
     <div className="copyright">
       <span>Copyright 2022</span>
     </div>
   </section>
  );
}


export default Footer;
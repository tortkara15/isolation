import React from 'react';


function Header() {
  return (
      <div className="header">
          <div className="headerLogo">
<a href="#" className="headerLink">ТОО "CSI-Astana"</a>
          </div>
          <div className="headerMenu">
              <ul className='menuList'>
                  <li className="menuItem"><a href="#" className="menuLink">Материалы Ursa</a></li>
                  <li className="menuItem"><a href="#" className="menuLink">области применения</a></li>
                  <li className="menuItem"><a href="#" className="menuLink">подбор материала</a></li>
                  <li className="menuItem"><a href="#" className="menuLink">библиотека</a></li>
                  <li className="menuItem"><a href="#" className="menuLink">почему ursa</a></li>
                  <li className="menuItem"><a href="#" className="menuLink">контакты</a></li>
              </ul>
          </div>
      </div>
  );
}


export default Header;
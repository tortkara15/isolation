import React from 'react';
import { Link } from 'react-router-dom';
import { SlSocialVkontakte } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import {FaOdnoklassniki} from "react-icons/fa";
import {SlSocialFacebook} from "react-icons/sl"

function Footer() {
  return (
  <>
<section className="section footer container">
     <div className="footer-menu">
       <ul className="footer-links">
         <li className='footerList-item'><Link to = '#'><h4 className='footer-links_title'>ГДЕ КУПИТЬ</h4 ></Link>
         <ul>
          <li><Link to='#'>Россия</Link></li>
          <li><Link to='#'>Азербайджан</Link></li>
          <li><Link to='#'>Армения</Link></li>
          <li><Link to='#'>Беларусь</Link></li>
          <li><Link to='#'>Грузия</Link></li>
          <li><Link to='#'>Казахстан</Link></li>
          <li><Link to='#'>Средняя Азия</Link></li>
         </ul>
         </li>
         <li className='footerList-item'><Link to = '#'><h4 className='footer-links_title'>МАТЕРИАЛЫ УРСА</h4></Link>
         <ul>
          <li><Link to='#'>Области применения</Link></li>
          <li><Link to='#'>URSA TERRA</Link></li>
          <li><Link to='#'>URSA GEO</Link></li>
          <li><Link to='#'>URSA PUREONE</Link></li>
          <li><Link to='#'>URSA BW</Link></li>
          <li><Link to='#'>URSA XPS</Link></li>
          <li><Link to='#'>URSA SECO</Link></li>
         </ul>
         </li>
         <li className='footerList-item'><Link to = '#'><h4 className='footer-links_title'>БИБЛИОТЕКА МАТЕРИАЛОВ</h4></Link>
         <ul>
          <li><Link to='#'>Сертификаты и декларации</Link></li>
          <li><Link to='#'>Протоколы, испытания и заключения</Link></li>
          <li><Link to='#'>Материалы для проектирования</Link></li>
          <li><Link to='#'>Каталоги и брошюры</Link></li>
          <li><Link to='#'>Медиа</Link></li>
         </ul>
         </li>
         <li className='footerList-item'><Link to = '#'><h4 className='footer-links_title'>ПОЛЕЗНЫЕ СЕРВИСЫ</h4></Link>
         <ul>
          <li><Link to='#'>Частным клиентам</Link></li>
          <li><Link to='#'>Архитекторам и проектировщикам</Link></li>
          <li><Link to='#'>Профессиональным строителям</Link></li>
          <li><Link to='#'>Вебинары</Link></li>
          <li><Link to='#'>FAQ</Link></li>
         </ul>
         </li>
         <li className='footerList-item'><Link to = '#'><h4 className='footer-links_title'>ПОЧЕМУ URSA</h4></Link>
         <ul>
          <li><Link to='#'>Преимущества изоляции</Link></li>
          <li><Link to='#'>Преимущества материалов</Link></li>
          <li><Link to='#'>Преимущества компании</Link></li>
         </ul>
         </li>
       </ul>
    <div className="footer-center">
      <div className="footer-icons">
        <li><Link to ='#'><SlSocialVkontakte/></Link></li>
        <li><Link to ='#'><SlSocialYoutube/></Link></li>
        <li><Link to ='#'><SlSocialFacebook/></Link></li>
        <li><Link to ='#'><FaOdnoklassniki/></Link></li>
      </div>
      <div className="footer-papers">
        <div className="footer-papers_link"><Link to='#'>Политика конфиденциальности</Link></div>
        <div className="footer-papers_link"><Link to='#'>Privacy-statement (EU)</Link></div>
        <div className="footer-papers_link"><Link to='#'>Условия использования</Link></div>
      </div>
    </div>
    <div className="footer-adress">
        <div className="footer-adress_Item">
          <h4 className='footer-adress_Item-title'>ЦЕНТРАЛЬНЫЙ ОФИС</h4>
          <p className='footer-adress_text'>
          ООО «УРСА Евразия»
          г. Санкт-Петербург, 196191, 
          Ленинский пр., д. 168
          </p>
          <p className='footer-adress_text'><Link to = '#'>(812) 313-72-72</Link></p>
          <p className='footer-adress_text'><Link to = '#'>ursa-russia@ursa.com</Link></p>
        </div>
        <div className="footer-adress_Item">
          <h4 className='footer-adress_Item-title'>ПРОИЗВОДСТВЕННЫЕ ЦЕНТРЫ</h4>
         <div className="footer-adress_center">
          <p className='footer-adress_text'>ООО «УРСА Евразия», филиал в г. Чудово</p>
          <p className='footer-adress_text'>ООО «УРСА Евразия», филиал в г. Серпухов</p>
          <p className='footer-adress_text'>г. Чудово, Новгородская область, 174211, ул. Восстания, д. 10</p>
          <p className='footer-adress_text'>г. Серпухов, Московская область, 142204, Московское ш., д. 96</p>
          <p className='footer-adress_text'>
            <Link to ='#'>
            <span>(812) 313-72-62</span>
            <p>(81665) 4-61-80</p>
            </Link></p>
          <p className='footer-adress_text'><Link to = '#'>(4967) 35-91-17</Link></p>
         </div>
        </div>
        <div className="footer-adress_Item">
        <h4 className='footer-adress_Item-title'>ПРЕДСТАВИТЕЛЬСТВА</h4>
        <ul className="footer-adress_links">
          <li><p><Link to = '#'>Санкт-Петербург и Северо-Западный федеральный округ</Link></p></li>
          <li><p><Link to = '#'>Москва и Центральный федеральный округ</Link></p></li>
          <li><p><Link to = '#'>Приволжский федеральный округ</Link></p></li>
          <li><p><Link to = '#'>Южный и Северо-Кавказский федеральные округа</Link></p></li>
          <li><p><Link to = '#'>Уральский федеральный округ</Link></p></li>
          <li><p><Link to = '#'>Сибирский и Дальневосточный федеральные округа</Link></p></li>
          <li><p><Link to = '#'>Беларусь</Link></p></li>
          <li><p><Link to = '#'>Казахстан</Link></p></li>
        </ul>
        </div>
        </div>
       </div>
     <div className="copyright">
       <span>© Copyright 2012–2022 URSA Insulation</span>
       <p className='copyright-link'><Link to= '#'> Web-дизайн, разработка сайта — Текарт.</Link></p>
     </div>
   </section>
  </>
  );
}


export default Footer;
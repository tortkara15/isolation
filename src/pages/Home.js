import React from 'react';
import MainSlider from '../components/MainSlider';
import SecondSlider from '../components/SecondSlider';
import Questions from '../components/Questions';
import {FaQuestion} from "react-icons/fa";
import Form from "../components/Form";
import News from "../components/News"
import { useState } from "react";
import {Link} from 'react-router-dom';
import garanty from '../assets/hometextIcons/garanty.png'
import rosizol from '../assets/hometextIcons/rosizol.png'

function Home() {
  const [showForm, setShowForm] = useState(false);
  function HandleSldBtnClick() {
    setShowForm(true);
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <section className="section section-home">
      <div className="mainSlider">
        <MainSlider/>
      </div>
      <div className="secondSlider">
        <SecondSlider/>
      </div>
      <div className='news'>
        <News/>
      </div>
      <div className="questions">
        <Questions/>
      </div>
      <div className="homeText">
        <h2 className='homeText-title'>Ursa-leader and expert</h2>
        <p className='homeText-text'>Компания URSA — Ваш партнeр в области строительных изоляционных материалов 
          и систем утепления для различных конструкций. URSA — одна из ведущих компаний 
          на строительном рынке Европы и один из самых известных брендов строительных 
          материалов. URSA предлагает широкий ассортимент тепло-и звукоизоляционных 
          материалов для строительства новых и реконструкции существующих зданий и сооружений.</p>
      <div className="homeIcon_container">
         <Link to = '#'><img src= {garanty} alt = "garanty icon" className='garantyIcon'/></Link>
         <Link to = '#'><img src= {rosizol} alt = "rosizol icon" className='rosizolIcon'/></Link>
      </div>
      </div>
      <button type="button" onClick={HandleSldBtnClick} className="slide-link"><FaQuestion/></button>
      <Form showForm={showForm} setShowForm= {setShowForm}/>
    </section>
  );
}
export default Home;
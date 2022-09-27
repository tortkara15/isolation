import React from 'react';
import MainSlider from '../components/MainSlider';
import SecondSlider from '../components/SecondSlider';
import Questions from '../components/Questions';
import {FaQuestion} from "react-icons/fa";
import Form from "../components/Form";
import { useState } from "react";

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
      <div className="questions">
        <Questions/>
      </div>
      <div className="homeText">
        <h2>Ursa-leader and expert</h2>
        <p>Компания URSA — Ваш партнeр в области строительных изоляционных материалов 
          и систем утепления для различных конструкций. URSA — одна из ведущих компаний 
          на строительном рынке Европы и один из самых известных брендов строительных 
          материалов. URSA предлагает широкий ассортимент тепло-и звукоизоляционных 
          материалов для строительства новых и реконструкции существующих зданий и сооружений.</p>
      <div className="homeIcon_container">
        <img src="https://www.ursa.ru/why_ursa/preimushchestva-materialov/garantiya-50-let/"
         alt="logo" />
         <img src="http://rosizol.org/" alt="member of Rosisol association" />
      </div>
      </div>
      <button type="button" onClick={HandleSldBtnClick} className="slide-link"><FaQuestion/></button>
      <Form showForm={showForm} setShowForm= {setShowForm}/>
    </section>
  );
}
export default Home;
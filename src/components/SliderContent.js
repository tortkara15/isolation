import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {FaQuestion} from "react-icons/fa";
import Form from "./Form";

function SliderContent({ activeIndex, sliderImage }) {
  const [showForm, setShowForm] = useState(false);
  function HandleSldBtnClick() {
    setShowForm(true);
  }
  return (
    <section className="sliderContainer">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"} 
        >
          <div className="sliderInner">
          <img className="slide-image" src={slide.img} alt="" />
          <h2 className="slide-title">{slide.textTitle}</h2>
          <h3 className="slide-text">{slide.mainText}</h3>
          <button className="slide-btn"><Link to='#'>{slide.btnText}</Link></button>
          <img src={slide.miniImg} alt="" className={slide.miniImg?'slide-miniImg':'inactive'} />
            <button type="button" onClick={HandleSldBtnClick} className="slide-link"><FaQuestion/></button>
            
          </div>
         
        </div>
      ))}
       <Form showForm={showForm} setShowForm= {setShowForm}/>
    </section>

  );
}

export default SliderContent;
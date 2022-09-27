import React from "react";
import { Link } from 'react-router-dom';


function SliderContent({ activeIndex, sliderImage }) {
 
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
           
            
          </div>
         
        </div>
      ))}
      
    </section>

  );
}

export default SliderContent;
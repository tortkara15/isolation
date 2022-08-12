import React from "react";
import { Link } from 'react-router-dom';
import {FaQuestion} from "react-icons/fa";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="SliderContent">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"} 
        >
          <div>
          <img className="slide-image" src={slide.img} alt="" />
          <h2 className="slide-title">{slide.textTitle}</h2>
          <h3 className="slide-text">{slide.mainText}</h3>
          <button className="slide-btn"><Link to='#'>{slide.btnText}</Link></button>
          <img src={slide.miniImg} alt="" className={slide.miniImg?'slide-miniImg':'inactive'} />
            <Link to='/form' className="slide-link"><FaQuestion/></Link>
          </div>
          
            
          
          
        </div>
        
      ))}
    </section>

  );
}

export default SliderContent;
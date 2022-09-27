import React, { useState, useEffect } from 'react';
import data2 from '../data2';
import { Link } from 'react-router-dom';


function SecondSlider() {
  const [item, setItem] = useState(data2);
  const [index, setIndex] = useState(0);
    return ( 
    <>
    <div className="secondSlider-content">
      {item.map((prod) => {
            return (
  <>
  
  <div className="secondSliderContainer">
    <div className="secondSlider-inner">
    <img src={prod.img} alt="product image" className="secondSliderImg" />
    <h2 className='secondSliderTitle'><Link to='#'>{prod.textTitle}</Link></h2>
    <p className="secondSliderText">{prod.mainText}</p>
    </div>
  </div>
 
 
  </>
)
      })}
     </div>
     </>
     );
  }
  export default SecondSlider;
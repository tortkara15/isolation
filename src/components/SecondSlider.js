import React, { useState, useEffect } from 'react';
import data2 from '../data2';
import { Link } from 'react-router-dom';
import {FiChevronRight} from 'react-icons/fi'
import { FaBorderNone } from 'react-icons/fa';



function SecondSlider() {
  const [item, setItem] = useState(data2);
  const [index, setIndex] = useState(0);
  useEffect(()=> {
if (index>=item.length-2) {
  setIndex(0);
}
  }, [index, item])
  
    return ( 
    <>
    <div className="secondSlider-content container">
      {item.map((prod, prodIndex) => {
        const{id, img, textTitle, mainText} = prod;
            return (
  
    <div className="secondSliderContainer" key={id}>
    <div className="secondSlider-inner" style={{transform:`translateX(-${index*320}px)`}}>
    <img src={img} alt="product" className="secondSliderImg" />
    <h2 className='secondSliderTitle'><Link to='#'>{textTitle}</Link></h2>
    <p className="secondSliderText">{mainText}</p>
    </div>
    
  </div>
  
)
      })}
      
      <button className="secondSliderNext-btn" onClick={()=>{setIndex(index+1)}}><FiChevronRight/></button>
     </div>
     </>
     );
  }
  export default SecondSlider;
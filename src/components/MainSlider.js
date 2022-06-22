import React from 'react';
import data from '../data';
import { useState, useEffect } from 'react';

function MainSlider() {
  const [products, setProducts] = useState(data);
  const [index, setIndex] = useState(0);
useEffect(()=> {
const lastIndex = products.length-1;
if (index<0) {
  setIndex(lastIndex);
}
if (index>lastIndex) {
  setIndex(0)
}
},[index,products]);
useEffect(()=>{
let slider=setInterval(()=>{
setIndex(index+1)
},3000);
return () =>clearInterval(slider);
},[index])

    return (
      <section>
        <div className="main-slider">
          {products.map((product, productIndex) =>{
            const {name, img, id, textTitle, mainText} = product;
            let position = 'nextSlide'
            if (productIndex===index) {
                 position = 'activeSlide'
            }
            
            return (
              <article className={position} key={id}>
                <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: '100vh' }}>
                  <h2>{name}</h2>
                  <h4>{textTitle}</h4>
                  <p>{mainText}</p>
                </div>
                </article> 
            )
          })}
        </div>
      </section>
    );
  }
  export default MainSlider;
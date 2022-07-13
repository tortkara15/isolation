import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="SliderContent">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.img} alt="" />
          <h2 className="slide-title">{slide.textTitle}</h2>
          <h3 className="slide-text">{slide.mainText}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
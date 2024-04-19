import React, { useRef, useState } from 'react';
import Review from "./Review";
import './DraggableCardSlider.css';

const DraggableCardSlider = ({ reviews }) => {

  return (
    <>
      <div className="slider-container">
        <div className="button-container">
          <button className="slide-button left" onClick={() => handleSlide('left')}> <i class="fa-solid fa-arrow-left"></i></button>
          <h1>Category: </h1>
          <div className="slider" ref={sliderRef}>
            {reviews.map(review => (
              <Review
                key={review.id}
                review={review}
                deleteReview={deleteReview}
                patchReview={patchReview}
              />
            ))}
          </div>
          <button className="slide-button right" onClick={() => handleSlide('right')}> <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </>
  );
};

export default DraggableCardSlider;

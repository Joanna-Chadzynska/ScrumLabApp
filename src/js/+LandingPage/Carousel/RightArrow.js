import React from "react";
import "font-awesome/css/font-awesome.min.css";

const RightArrow = ({ goToNextSlide }) => {
  return (
    <div className="right__arrow" onClick={goToNextSlide}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

export default RightArrow;

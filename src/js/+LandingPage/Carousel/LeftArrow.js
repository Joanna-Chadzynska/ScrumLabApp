import React from "react";
import "font-awesome/css/font-awesome.min.css";

const LeftArrow = ({ goToPrevSlide }) => {
  return (
    <div className="left__arrow" onClick={goToPrevSlide}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

export default LeftArrow;

import React from "react";

const Slide = ({ url }) => {
  return (
    <div className="slide">
      <img src={url} alt="meal" />
    </div>
  );
};

export default Slide;

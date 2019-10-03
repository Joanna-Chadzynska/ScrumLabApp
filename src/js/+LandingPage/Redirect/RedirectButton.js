import React from "react";
import { Link } from "react-router-dom";

const RedirectButton = () => {
  return (
    <div className='redirect__btn'>
      <button>
        <Link to='/app'>Lorem ipsum</Link>
      </button>
    </div>
  );
};

export default RedirectButton;

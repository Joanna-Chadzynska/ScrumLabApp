import React from "react";

const Logo = ({ history }) => {
  return (
    <h1 className='header__logo' onClick={() => history.push("/")}>
      <span id='first'>Zaplanuj</span>
      <span id='second'>Jedzonko</span>
    </h1>
  );
};

export default Logo;

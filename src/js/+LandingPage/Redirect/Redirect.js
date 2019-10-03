import React from "react";
import RedirectButton from "./RedirectButton";
import Info from "./Info";
import Wrapper from "../../+Wrapper";

const Redirect = () => {
  return (
    <div className='redirect' id='goToApp'>
      <Wrapper>
        <div className='redirect__desc'>
          <Info />
          <RedirectButton />
        </div>
      </Wrapper>
    </div>
  );
};

export default Redirect;

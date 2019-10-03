import React from "react";
import Wrapper from "../../+Wrapper";

import AboutItemOne from "./AboutItemOne";
import AboutItemTwo from "./AboutItemTwo";
import AboutItemThree from "./AboutItemThree";

const AboutApp = () => {
  return (
    <div className='aboutapp' id='aboutApp'>
      <Wrapper>
        <div className='aboutapp__desc'>
          <AboutItemOne />
          <AboutItemTwo />
          <AboutItemThree />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutApp;

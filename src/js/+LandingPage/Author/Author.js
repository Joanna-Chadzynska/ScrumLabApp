import React from "react";
import Wrapper from "../../+Wrapper";
import Image from "./Image";
import Text from "./Text";

const Author = () => (
  <div className='author' id='aboutMe'>
    <Wrapper>
      <div className='author__container'>
        <Image />
        <Text />
      </div>
    </Wrapper>
  </div>
);

export default Author;

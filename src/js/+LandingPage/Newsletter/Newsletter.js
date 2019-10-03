import React from "react";
import Input from "./Input";
import Text from "./Text";
import Wrapper from "../../+Wrapper";

const Newsletter = () => (
  <div className="newsletter">
    <Wrapper>
      <div className="newsletter__container">
        <Text />
        <Input />
      </div>
    </Wrapper>
  </div>
);

export default Newsletter;

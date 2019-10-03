import React from "react";
import Company from "./Company";
import Copyright from "./Copyright";
import Wrapper from "../../+Wrapper";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Company />
      </Wrapper>
      <Copyright />
    </footer>
  );
};

export default Footer;

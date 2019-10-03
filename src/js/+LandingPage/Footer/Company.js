import React from "react";
import CompanyContact from "./CompanyContact";
import AboutCompany from "./AboutCompany";
import CompanySocials from "./CompanySocials";

const Company = () => {
  return (
    <div className='company' id='contact'>
      <CompanyContact />
      <AboutCompany />
      <CompanySocials />
    </div>
  );
};

export default Company;

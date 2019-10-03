import React from "react";
import Carousel from "./Carousel";
import Heading from "./Heading/Heading";
import Form from "./Newsletter";
import Redirect from "./Redirect";
import AboutApp from "./AboutApp";
import Author from "./Author";
import Footer from "./Footer";

const LandingPage = (props) => {
  return (
    <div>
      <Heading match={props.match} history={props.history} />
      <Carousel />
      <Redirect />
      <AboutApp />
      <Form />
      <Author />
      <Footer />
    </div>
  );
};

export default LandingPage;

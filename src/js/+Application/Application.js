import React, { useEffect } from "react";
import Heading from "../+LandingPage/Heading/Heading";
import Navigation from "./Navigation";
import MainPage from "./MainPage";
import { getUserName } from "../../redux/user/actions";

const Application = ({ match, history }, props) => {
  useEffect(() => {
    getUserName();
  }, []);
  return (
    <div className='app'>
      <Heading match={match} history={history} />
      <div className='mainapp' style={{ display: "flex" }}>
        <Navigation />
        <MainPage />
      </div>
    </div>
  );
};

export default Application;

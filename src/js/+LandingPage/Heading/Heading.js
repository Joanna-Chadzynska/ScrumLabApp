import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";
import Wrapper from "../../+Wrapper";

const Heading = ({ match, history, user }) => {
  return (
    <header>
      <Wrapper>
        <div className='header'>
          <Logo history={history} />
          {match.url === "/" ? (
            <Menu />
          ) : (
            <User user={user} history={history} />
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Heading;

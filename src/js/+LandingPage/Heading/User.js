import React from "react";
import { connect } from "react-redux";
import { clearUserName } from "../../../redux/user/actions";

import "font-awesome/css/font-awesome.min.css";

const User = ({ user, clearUserName, history }) => {
  const handleClick = (e) => {
    clearUserName();
    history.push("/");
  };

  return (
    <div className='header__user'>
      <h4>{user.user.name}</h4>
      <div className='header__icon'>
        <i className='fa fa-user-circle fa-3x' onClick={handleClick}></i>
      </div>
    </div>
  );
};

const mapState = ({ user }) => ({ user });
const mapDispatch = { clearUserName };
export default connect(
  mapState,
  mapDispatch
)(User);

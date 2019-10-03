import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUserName, getUserName } from "../../../redux/user/actions";
import Pulpit from "../Pulpit";

const Welcome = ({ updateUserName, user }) => {
  useEffect(() => {
    getUserName();
  }, []);
  const [name, setName] = useState("");
  const [isReady, setReady] = useState(false);
  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const validate = () => {
    let errors = {};
    let formValid = true;
    if (!name) {
      formValid = false;
      errors = "Musisz podać imię!";
    }
    setErrors(errors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      updateUserName(name);
      setReady(true);
      setName("");
    }
  };

  return (
    <>
      {isReady || user.user.name !== undefined ? (
        <Pulpit user={user} />
      ) : (
        <div className='welcome'>
          <h1>Witaj,</h1>
          <h2>wygląda na to, że jesteś tutaj pierwszy raz!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='tutaj wpisz jak masz na imię'
              value={name}
              onChange={handleChange}
            />
            {name.length <= 0 ? (
              <p
                style={{
                  fontSize: "1rem",
                  color: "#BD4932",
                  letterSpacing: "0"
                }}>
                {errors}
              </p>
            ) : null}
            <br />
            <button type='submit'>Gotowe!</button>
          </form>
          <p>
            Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację
            :)
          </p>
        </div>
      )}
    </>
  );
};

const mapState = ({ user }) => ({ user });

const mapDispatch = (dispatch) => {
  return {
    updateUserName: (name) => dispatch(updateUserName(name)),
    getUserName: () => dispatch(getUserName())
  };
};

export default connect(
  mapState,
  mapDispatch
)(Welcome);

import React from "react";
// import ErrorMessage from "../AddRecipe/Utils/ErrorMessage";

const Header = ({ name, weekNumber }) => {
  return (
    <div className='addPlan_header__box'>
      <h2>NOWY PLAN</h2>
      {/* {name.length <= 0 || !weekNumber ? (
        <ErrorMessage>Uzupełnij zaznaczone pola!</ErrorMessage>
      ) : null} */}
      <button type='submit'>Zapisz i zamknij</button>
    </div>
  );
};

export default Header;

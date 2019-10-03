import React from "react";
import ErrorMessage from "../Utils/ErrorMessage";

const FormHeader = ({ errors, recipe }) => {
  return (
    <div className='addRecipe__header'>
      <h2>nowy przepis</h2>
      {/* {!recipe.name ||
      !recipe.description ||
      recipe.steps.length <= 0 ||
      recipe.ingredients.length <= 0 ? (
        <ErrorMessage>Uzupełnij zaznaczone pola!</ErrorMessage>
      ) : null} */}
      <button type='submit'>Zapisz i zamknij</button>
    </div>
  );
};

export default FormHeader;

import React from "react";

const FormHeader = () => {
  return (
    <div className='addRecipe__header'>
      <h2>nowa lista zakupów</h2>
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

import React from "react";
import ErrorMessage from "../../../Przepisy/AddRecipe/Utils/ErrorMessage";

const FormHeader = ({ shopList, errors, shoopItem }) => {
  return (
    <div className='addRecipe__header'>
      <h2>nowa lista zakupów</h2>
      {shopList.length <= 0 ? (
        <ErrorMessage>Uzupełnij zaznaczone pola!</ErrorMessage>
      ) : null}
      <button type='submit'>Zapisz i zamknij</button>
    </div>
  );
};

export default FormHeader;

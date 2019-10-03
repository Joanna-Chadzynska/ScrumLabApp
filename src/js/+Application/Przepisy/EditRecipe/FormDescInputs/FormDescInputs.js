import React from "react";
import ErrorMessage from "../Utils/ErrorMessage";

const FormDescInputs = ({
  errors,
  name,
  description,
  addName,
  addDescription,
  recipe
}) => {
  return (
    <div className='addRecipe__desc-inputs'>
      <div className='addRecipe__input-box'>
        <div className='input-element'>
          <h3>Nazwa przepisu</h3>
          <input
            type='text'
            name='name'
            value={recipe.name}
            placeholder='Nazwa przepisu'
            onChange={addName}
            className={name.length <= 0 || name.length >= 50 ? "error" : null}
          />
        </div>

        {name.length >= 50 ? <ErrorMessage>{errors.name}</ErrorMessage> : null}

        <div className='input-element'>
          <h3>Opis przepisu</h3>
          <textarea
            name='description'
            id='description'
            value={recipe.description}
            cols='30'
            rows='10'
            placeholder='Opis przepisu'
            onChange={addDescription}
            className={
              description.length <= 0 || description.length >= 360
                ? "error"
                : null
            }
          />
        </div>

        {description.length >= 360 ? (
          <ErrorMessage>{errors.description}</ErrorMessage>
        ) : null}
      </div>
    </div>
  );
};

export default FormDescInputs;

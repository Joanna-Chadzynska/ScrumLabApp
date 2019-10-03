import React from "react";
import Ingredient from "./Ingredient";
import ErrorMessage from "../../Utils/ErrorMessage";
import "font-awesome/css/font-awesome.min.css";

const Ingredients = ({
  errors,
  ingredient,
  ingredients,
  addIngredient,
  addIngredients,
  deleteIngredient
}) => {
  return (
    <div className='addRecipe__container' style={{ paddingLeft: "1rem" }}>
      <h2>Składniki</h2>

      <div className='addRecipe__form-items'>
        <div className='addRecipe__input-box-instr'>
          <input
            type='text'
            name='ingredients'
            value={ingredient}
            onChange={addIngredient}
            placeholder='Dodaj składniki'
          />

          <i
            className='fa fa-plus-square fa-3x'
            onClick={() => addIngredients(ingredient)}></i>

          {ingredient.length <= 0 || ingredient.length >= 50 ? (
            <ErrorMessage>{errors.ingredient}</ErrorMessage>
          ) : null}
        </div>

        <div
          className={
            ingredients.length <= 0
              ? "addRecipe__list error"
              : "addRecipe__list"
          }>
          <ul>
            {ingredients.map((ingredient, idx) => (
              <Ingredient
                key={idx}
                idx={idx}
                deleteIngredient={deleteIngredient}
                ingredient={ingredient}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;

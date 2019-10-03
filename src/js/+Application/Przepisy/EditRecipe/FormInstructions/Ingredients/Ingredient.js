import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

const Ingredient = ({ ingredient, idx, deleteIngredient }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [newIngredient, setNewIngredient] = useState(ingredient);

  const toggleEditIngredient = (e) => {
    setEditMode(!isEditMode);
  };

  const handleChange = (e) => {
    setNewIngredient(e.target.value);
  };

  const handleClick = (e) => {
    setEditMode(false);
  };
  return (
    <>
      {isEditMode ? (
        <li>
          <input
            type='text'
            name='step'
            value={newIngredient}
            style={{ color: "#468966" }}
            onChange={handleChange}
          />
          <i
            className='fa fa-check-square-o'
            aria-hidden='true'
            onClick={handleClick}></i>
        </li>
      ) : (
        <li className='not-edit-mode'>
          {newIngredient}
          <i className='fa fa-edit' onClick={toggleEditIngredient}></i>
          <i
            className='fa fa-trash-o'
            aria-hidden='true'
            onClick={() => deleteIngredient(idx)}></i>
        </li>
      )}
    </>
  );
};

export default Ingredient;

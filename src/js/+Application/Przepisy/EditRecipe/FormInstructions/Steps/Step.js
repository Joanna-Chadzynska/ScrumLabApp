import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

const Step = ({ step, idx, deleteStep }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [newStep, setNewStep] = useState(step);

  const toggleEditStep = (e) => {
    setEditMode(!isEditMode);
  };

  const handleChange = (e) => {
    setNewStep(e.target.value);
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
            value={newStep}
            onChange={handleChange}
          />
          <i
            className='fa fa-check-square-o'
            aria-hidden='true'
            style={{ color: "#468966" }}
            onClick={handleClick}></i>
        </li>
      ) : (
        <li>
          {newStep}
          <i className='fa fa-edit' onClick={toggleEditStep}></i>
          <i
            className='fa fa-trash-o'
            aria-hidden='true'
            onClick={() => deleteStep(idx)}></i>
        </li>
      )}
    </>
  );
};

export default Step;

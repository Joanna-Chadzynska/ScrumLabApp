import React from "react";
// import ErrorMessage from "../AddRecipe/Utils/ErrorMessage";

const Input = ({
  name,
  setName,
  description,
  setDescription,
  weekNumber,
  setWeekNumber
}) => {
  const addName = (e) => {
    if (e.target.value.length <= 50) {
      setName(e.target.value);
    }
  };

  const addDescription = (e) => {
    if (e.target.value.length <= 360) {
      setDescription(e.target.value);
    }
  };

  const addWeekNumber = (e) => {
    setWeekNumber(Number(e.target.value));
  };

  return (
    <div className='addPlan__input'>
      <div className='addPlan_input__box'>
        <div className='addPlan_input__el'>
          <h3>Nazwa planu</h3>
          <input
            type='text'
            name='name'
            value={name}
            onChange={addName}
            placeholder='Nazwa planu'
            className={name.length <= 0 ? "error" : null}
          />
        </div>

        {/* {name.length >= 50 && <ErrorMessage>Nazwa jest za długa!</ErrorMessage>} */}

        <div className='addPlan_input__el'>
          <h3>Opis planu</h3>
          <textarea
            name='description'
            rows='10'
            cols='20'
            value={description}
            onChange={addDescription}
            placeholder='Opis planu'></textarea>
        </div>

        {/* {description.length >= 360 && (
          <ErrorMessage>Opis jest za długi!</ErrorMessage>
        )} */}

        <div className='addPlan_input__week'>
          <h3>Numer tygodnia</h3>

          <input
            type='number'
            min='1'
            max='52'
            value={weekNumber}
            onChange={addWeekNumber}
            className={!weekNumber ? "error week_number" : "week_number"}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

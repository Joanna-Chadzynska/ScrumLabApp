import React from "react";
import Steps from "./Steps";
import Ingredients from "./Ingredients";

const FormInstructions = ({
  errors,
  step,
  steps,
  addStep,
  addSteps,
  deleteStep,
  addIngredients,
  ingredient,
  ingredients,
  addIngredient,
  deleteIngredient,
  isEditingItem
}) => {
  return (
    <div className='addRecipe__instructions'>
      <Steps
        step={step}
        steps={steps}
        addStep={addStep}
        addSteps={addSteps}
        deleteStep={deleteStep}
        errors={errors}
      />
      <Ingredients
        ingredient={ingredient}
        ingredients={ingredients}
        addIngredient={addIngredient}
        addIngredients={addIngredients}
        deleteIngredient={deleteIngredient}
        errors={errors}
        isEditingItem={isEditingItem}
      />
    </div>
  );
};

export default FormInstructions;

import React from "react";
import Step from "./Step";
import ErrorMessage from "../../Utils/ErrorMessage";
import "font-awesome/css/font-awesome.min.css";

const Steps = ({ errors, step, steps, addStep, addSteps, deleteStep }) => {
  return (
    <div className='addRecipe__container'>
      <h2>Instrukcje</h2>

      <div className='addRecipe__form-items'>
        <div className='addRecipe__input-box-instr'>
          <textarea
            name='steps'
            id='steps'
            cols='30'
            rows='10'
            value={step}
            onChange={addStep}
            placeholder='Dodaj sposób przygotowania'
          />
          <i
            className='fa fa-plus-square fa-3x'
            onClick={() => addSteps(step)}></i>

          {step.length <= 0 || step.length >= 150 ? (
            <ErrorMessage>{errors.step}</ErrorMessage>
          ) : null}
        </div>

        <div
          className={
            steps.length <= 0 ? "addRecipe__list error" : "addRecipe__list"
          }>
          <ol>
            {steps.map((step, idx) => (
              <Step key={idx} idx={idx} step={step} deleteStep={deleteStep} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Steps;

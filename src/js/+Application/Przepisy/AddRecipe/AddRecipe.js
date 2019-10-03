import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../../../redux/recipes/actions";
import FormHeader from "./FormHeader";
import FormDescInputs from "./FormDescInputs";
import FormInstructions from "./FormInstructions";

const AddRecipe = ({ addRecipe, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState({
    name: null,
    description: null,
    steps: "",
    ingredients: ""
  });
  // form validation
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    step: "",
    steps: "",
    ingredient: "",
    ingredients: ""
  });

  const addName = (e) => {
    if (e.target.value.length <= 50) {
      setName(e.target.value);
    }
  };

  const addDescription = (e) => {
    if (e.target.value.length > 360) {
      setErrors({
        description: "Opis przepisu nie może przekraczać 360 znaków!"
      });
    } else {
      return setDescription(e.target.value);
    }
  };

  const addStep = (e) => {
    if (e.target.value.length > 150) {
      setErrors({ step: "Nazwa jest za długa!" });
    } else {
      return setStep(e.target.value);
    }
  };

  const deleteStep = (index) => {
    setSteps(steps.filter((el, idx) => index !== idx));
  };

  const addSteps = (step) => {
    if (step.length > 0) {
      setSteps([...steps, step]);
      setStep("");
    } else {
      setErrors({ step: "Nazwa nie może być pusta!" });
    }
  };

  const addIngredient = (e) => {
    if (e.target.value.length > 50) {
      setErrors({ ingredient: "Nazwa jest za długa!" });
    } else {
      setIngredient(e.target.value);
    }
  };

  const deleteIngredient = (index) => {
    setIngredients(ingredients.filter((el, idx) => index !== idx));
  };

  const addIngredients = (ingredient) => {
    if (ingredient.length > 0) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    } else {
      setErrors({ ingredient: "Nazwa nie może być pusta!" });
    }
  };

  const validate = () => {
    let isValid = true;

    if (!name) {
      isValid = false;
      errors.name = "Podaj nazwę przepisu!";
    } else {
      recipe.name = name;
      errors.name = "";
    }

    if (description.length <= 0) {
      isValid = false;
      errors.description = "Podaj opis przepisu!";
    } else {
      recipe.description = description;
      errors.name = "";
    }

    if (steps.length <= 0) {
      isValid = false;
      errors.steps = "Podaj sposób przygotowania!";
    } else {
      recipe.steps = steps;
      errors.steps = "";
    }

    if (ingredients.length <= 0) {
      isValid = false;
      errors.ingredients = "Podaj składniki!";
    } else {
      recipe.ingredients = ingredients;
      errors.ingredients = "";
    }

    setErrors({
      ...errors
    });

    setRecipe({ ...recipe });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      addRecipe(recipe);
      setName("");
      setDescription("");
      setSteps([]);
      setIngredients([]);
      onClose();
      window.location.reload();
      alert(`Dziękujemy za dodanie przepisu!`);
    } else {
      console.log("Formularz błędnie wypełniony");
      return errors;
    }
  };

  return (
    <div className='backdrop'>
      <form className='addRecipe' onSubmit={handleSubmit}>
        <i
          className='fa fa-times close-btn'
          aria-hidden='true'
          onClick={onClose}></i>
        <FormHeader errors={errors} recipe={recipe} />
        <FormDescInputs
          errors={errors}
          name={name}
          description={description}
          addName={addName}
          addDescription={addDescription}
        />
        <FormInstructions
          errors={errors}
          step={step}
          steps={steps}
          ingredient={ingredient}
          ingredients={ingredients}
          addStep={addStep}
          addSteps={addSteps}
          deleteStep={deleteStep}
          addIngredient={addIngredient}
          addIngredients={addIngredients}
          deleteIngredient={deleteIngredient}
        />
      </form>
    </div>
  );
};

const mapDispatch = {
  addRecipe
};
export default connect(
  null,
  mapDispatch
)(AddRecipe);

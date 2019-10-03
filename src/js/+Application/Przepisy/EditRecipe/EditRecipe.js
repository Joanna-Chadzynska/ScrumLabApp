import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  editRecipe,
  getRecipeDetails
} from "../../../../redux/recipes/actions";
import FormHeader from "./FormHeader";
import FormDescInputs from "./FormDescInputs";
import FormInstructions from "./FormInstructions";

const EditRecipe = ({
  editRecipe,
  getRecipeDetails,
  onClose,
  recipeId,
  recipe
}) => {
  useEffect(() => {
    getRecipeDetails(recipeId);
  }, [getRecipeDetails, recipeId]);
  console.log(recipe.name);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [newRecipe, setRecipe] = useState({
    id: recipe.id,
    name: null,
    description: null,
    steps: recipe.steps,
    ingredients: recipe.ingredients
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
      newRecipe.name = name;
      errors.name = "";
    }

    if (description.length <= 0) {
      isValid = false;
      errors.description = "Podaj opis przepisu!";
    } else {
      newRecipe.description = description;
      errors.name = "";
    }

    if (steps.length <= 0) {
      isValid = false;
      errors.steps = "Podaj sposób przygotowania!";
    } else {
      newRecipe.steps = steps;
      errors.steps = "";
    }

    if (ingredients.length <= 0) {
      isValid = false;
      errors.ingredients = "Podaj składniki!";
    } else {
      newRecipe.ingredients = ingredients;
      errors.ingredients = "";
    }

    setErrors({
      ...errors
    });

    setRecipe({ ...newRecipe });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      editRecipe(newRecipe);
      setName("");
      setDescription("");
      setSteps([]);
      setIngredients([]);
      // onClose();
      alert(`Dziękujemy za dodanie przepisu!`);
      window.location.reload();
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
          recipe={recipe}
          errors={errors}
          name={name}
          description={description}
          addName={addName}
          addDescription={addDescription}
        />
        <FormInstructions
          recipe={recipe}
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

const mapState = (state) => ({
  recipe: state.recipes.recipe
});

const mapDispatch = {
  editRecipe,
  getRecipeDetails
};

export default connect(
  mapState,
  mapDispatch
)(EditRecipe);

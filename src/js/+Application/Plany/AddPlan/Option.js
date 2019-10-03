import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../../../../redux/recipes/actions";

const Option = ({ recipes, meal, meals, setMeals }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const [selectedValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    if (e.target.id === "breakfast") {
      recipes.forEach((recipe) => {
        if (
          recipe.name === e.target.value &&
          e.target.value !== "Wybierz przepis"
        ) {
          meals.breakfast = Number(recipe.id);
        }
        return recipe;
      });
    } else if (e.target.id === "lunch") {
      recipes.forEach((recipe) => {
        if (
          recipe.name === e.target.value &&
          e.target.value !== "Wybierz przepis"
        ) {
          meals.lunch = Number(recipe.id);
        }
        return recipe;
      });
    } else if (e.target.id === "soup") {
      recipes.forEach((recipe) => {
        if (
          recipe.name === e.target.value &&
          e.target.value !== "Wybierz przepis"
        ) {
          meals.soup = Number(recipe.id);
        }
        return recipe;
      });
    } else if (e.target.id === "dinner") {
      recipes.forEach((recipe) => {
        if (
          recipe.name === e.target.value &&
          e.target.value !== "Wybierz przepis"
        ) {
          meals.dinner = Number(recipe.id);
        }
        return recipe;
      });
    } else if (e.target.id === "supper") {
      recipes.forEach((recipe) => {
        if (
          recipe.name === e.target.value &&
          e.target.value !== "Wybierz przepis"
        ) {
          meals.supper = Number(recipe.id);
        }
        return recipe;
      });
    }

    setMeals({ ...meals });
  };

  return (
    <select value={selectedValue} onChange={handleChange} id={meal.meal}>
      <option value='select' defaultValue={selectedValue}>
        Wybierz przepis
      </option>
      {recipes.map((el) => (
        <option key={el.id} value={el.name} id={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

const mapState = (state) => {
  return {
    recipes: state.recipes.recipes
  };
};

export default connect(
  mapState,
  { fetchRecipes }
)(Option);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipeDetails } from "../../../../../redux/recipes/actions";

const MondayTwo = ({ recipe, getRecipeDetails, id }) => {
  useEffect(() => {
    getRecipeDetails(id);
  }, [getRecipeDetails, id]);

  return <td>{recipe.name}</td>;
};

const mapDispatch = (dispatch) => ({
  getRecipeDetails: (id) => dispatch(getRecipeDetails(id))
});

const mapState = (state) => ({
  recipe: state.recipes.recipe
});

export default connect(
  mapState,
  mapDispatch
)(MondayTwo);

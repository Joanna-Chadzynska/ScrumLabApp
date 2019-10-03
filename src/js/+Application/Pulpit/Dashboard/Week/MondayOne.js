import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipeDetails } from "../../../../../redux/recipes/actions";

const MondayOne = ({ recipes, getRecipeDetails, id }) => {
  useEffect(() => {
    getRecipeDetails(id);
  }, [getRecipeDetails, id]);

  const list = () =>
    recipes.map((el) => {
      if (el.id === id) {
        return el.name;
      }
    });

  return <td>{list()}</td>;
};

const mapState = (state) => ({
  recipes: state.recipes.recipes
});

const mapDispatch = (dispatch) => ({
  getRecipeDetails: (id) => dispatch(getRecipeDetails(id))
});

export default connect(
  mapState,
  mapDispatch
)(MondayOne);

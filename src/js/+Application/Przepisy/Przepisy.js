import React, { useEffect, useState } from "react";
import EditRecipe from "./EditRecipe";
import { connect } from "react-redux";
import { fetchRecipes, editRecipe } from "../../../redux/recipes/actions";
import Recipe from "./Recipe";

import AddRecipe from "../Przepisy/AddRecipe";

const Przepisy = ({ recipes, fetchRecipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const [isAddRecipe, setAddRecipe] = useState(false);
  const [isInEditMode, setEditMode] = useState(false);
  const [editedItemId, setItemId] = useState("");

  const toggleEdit = (e) => {
    setEditMode(!isInEditMode);
    setItemId(e.target.id);
    if (isInEditMode) {
      window.location.reload();
    }
  };

  const openAddRecipe = (e) => {
    setAddRecipe(!isAddRecipe);
    if (isAddRecipe) {
      window.location.reload();
    }
  };

  return (
    <>
      {isAddRecipe ? (
        <AddRecipe show={isAddRecipe} onClose={openAddRecipe} />
      ) : isInEditMode ? (
        <EditRecipe
          show={isInEditMode}
          onClose={toggleEdit}
          recipeId={editedItemId}
        />
      ) : (
        <div className='itemsList'>
          <div className='itemsList__header'>
            <h3>Lista Przepisów</h3>
            <i
              className='fa fa-plus-square fa-2x'
              onClick={openAddRecipe}
              aria-hidden='true'></i>
          </div>

          <div className='itemsList__table'>
            <table>
              <thead>
                <tr className='itemsList--headRow'>
                  <th>id</th>
                  <th>nazwa</th>
                  <th>opis</th>
                  <th>akcje</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe) => (
                  <Recipe
                    recipe={recipe}
                    key={recipe.id}
                    id={recipe.id}
                    toggleEdit={toggleEdit}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    recipes: state.recipes.recipes
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
    editRecipe: (recipe) => dispatch(editRecipe(recipe))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Przepisy);

import {
  ADD_NEW_RECIPE_START,
  ADD_NEW_RECIPE_SUCCESS,
  ADD_NEW_RECIPE_ERROR,
  FETCH_RECIPES,
  FETCH_RECIPE_DETAILS_START,
  FETCH_RECIPE_DETAILS_SUCCESS,
  FETCH_RECIPE_DETAILS_ERROR,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_ERROR,
  FETCH_RECIPE_DETAILS_PDF_START,
  FETCH_RECIPE_DETAILS_PDF_SUCCESS,
  FETCH_RECIPE_DETAILS_PDF_ERROR
} from "./actionTypes";
import { AddUserNameError } from "../user/actions";

export const addNewRecipeStart = () => ({ type: ADD_NEW_RECIPE_START });

export const addNewRecipeSuccess = (payload) => ({
  type: ADD_NEW_RECIPE_SUCCESS,
  payload
});

export const addNewRecipeError = (payload) => ({
  type: ADD_NEW_RECIPE_ERROR,
  payload
});

export const addRecipe = (recipe) => (dispatch) => {
  dispatch(addNewRecipeStart());

  fetch(`http://localhost:3000/recipes`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(recipe)
  })
    .then((resp) => resp.json())
    .then((recipe) => dispatch(addNewRecipeSuccess(recipe)))
    .catch((error) => dispatch(AddUserNameError(error)));
};

// pobieranie przepisów
export const fetchRecipes = () => (dispatch) => {
  fetch("http://localhost:3000/recipes")
    .then((response) => response.json())
    .then((recipes) =>
      dispatch({
        type: FETCH_RECIPES,
        payload: recipes
      })
    );
};

// pobieranie pojedynczego przepisu

export const fetchRecipeDetailsStart = () => ({
  type: FETCH_RECIPE_DETAILS_START
});
export const fetchRecipeDetailsSuccess = (payload) => ({
  type: FETCH_RECIPE_DETAILS_SUCCESS,
  payload
});
export const fetchRecipeDetailsError = (payload) => ({
  type: FETCH_RECIPE_DETAILS_ERROR,
  payload
});

export const getRecipeDetails = (id) => (dispatch) => {
  dispatch(fetchRecipeDetailsStart());

  fetch(`http://localhost:3000/recipes/${id}`)
    .then((resp) => resp.json())
    .then((recipe) => dispatch(fetchRecipeDetailsSuccess(recipe)));
  // .then((error) => dispatch(fetchRecipeDetailsError(error)));
};

// pobieranie przepisu do pdf
export const fetchRecipeDetailsPdfStart = () => ({
  type: FETCH_RECIPE_DETAILS_PDF_START
});
export const fetchRecipeDetailsPdfSuccess = (payload) => ({
  type: FETCH_RECIPE_DETAILS_PDF_SUCCESS,
  payload
});
export const fetchRecipeDetailsPdfError = (payload) => ({
  type: FETCH_RECIPE_DETAILS_PDF_ERROR,
  payload
});

export const getRecipeDetailsToPdf = (id) => (dispatch) => {
  dispatch(fetchRecipeDetailsPdfStart());

  fetch(`http://localhost:3000/recipes/${id}`, {
    method: "GET",
    headers: {
      // Accept: "application/pdf",
      "Content-Type": "application/pdf"
    }
  })
    .then((resp) => resp.json())
    .then((recipe) => dispatch(fetchRecipeDetailsSuccess(recipe)));
  // .then((error) => dispatch(fetchRecipeDetailsPdfError(error)));
};

// usuwanie konkretnego przepisu

export const deleteRecipeStart = () => ({ type: DELETE_RECIPE_START });
export const deleteRecipeSuccess = (payload) => ({
  type: DELETE_RECIPE_SUCCESS,
  payload
});
export const deleteRecipeError = (payload) => ({
  type: DELETE_RECIPE_ERROR,
  payload
});

export const deleteRecipe = (id) => (dispatch) => {
  dispatch(deleteRecipeStart());

  fetch(`http://localhost:3000/recipes/${id}`, {
    method: "DELETE"
  })
    .then((resp) => resp.json())
    .then((recipeId) => dispatch(deleteRecipeSuccess(recipeId)))
    .catch((error) => dispatch(deleteRecipeError(error)));
};

// edycja pojedynczego przepisu

export const editRecipeStart = () => ({ type: EDIT_RECIPE_START });
export const editRecipeSuccess = (payload) => ({
  type: EDIT_RECIPE_SUCCESS,
  payload
});
export const editRecipeError = (payload) => ({
  type: EDIT_RECIPE_ERROR,
  payload
});

export const editRecipe = (recipe) => (dispatch) => {
  dispatch(editRecipeStart());

  fetch(`http://localhost:3000/recipes/${recipe.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(recipe)
  })
    .then((resp) => resp.json())
    .then((recipe) => dispatch(editRecipeSuccess(recipe)))
    .catch((error) => dispatch(editRecipeError(error)));
};

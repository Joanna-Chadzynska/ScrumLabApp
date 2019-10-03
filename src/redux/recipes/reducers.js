import {
  ADD_NEW_RECIPE_START,
  ADD_NEW_RECIPE_SUCCESS,
  ADD_NEW_RECIPE_ERROR,
  FETCH_RECIPES,
  FETCH_RECIPE_DETAILS_START,
  FETCH_RECIPE_DETAILS_SUCCESS,
  // FETCH_RECIPE_DETAILS_ERROR,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_ERROR,
  FETCH_RECIPE_DETAILS_PDF_START,
  FETCH_RECIPE_DETAILS_PDF_SUCCESS
  // FETCH_RECIPE_DETAILS_PDF_ERROR
} from "./actionTypes";

const initState = {
  recipes: [],
  recipe: [],
  recipePdf: [],
  loading: false,
  error: ""
};

export const recipes = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_RECIPE_START:
      return {
        ...state,
        loading: true
      };

    case ADD_NEW_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload
      };

    case ADD_NEW_RECIPE_ERROR:
      return {
        ...state,
        loading: false,
        recipes: [],
        error: action.payload
      };

    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };

    case FETCH_RECIPE_DETAILS_START:
      return {
        ...state,
        loading: true,
        recipe: []
      };

    case FETCH_RECIPE_DETAILS_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        recipePdf: action.payload,
        loading: false
      };

    // case FETCH_RECIPE_DETAILS_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     recipe: [],
    //     error: action.payload
    //   };

    //usuwanie przepisu
    case DELETE_RECIPE_START:
      return {
        ...state,
        loading: true
      };

    case DELETE_RECIPE_SUCCESS:
      return Object.assign({}, state, {
        recipes: [
          ...state.recipes.filter((item) => item.id !== action.payload.id)
        ]
      });

    case DELETE_RECIPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    // edycja przepisu
    case EDIT_RECIPE_START:
      return {
        ...state,
        loading: true
      };

    case EDIT_RECIPE_SUCCESS:
      return Object.assign({}, state, {
        recipes: [
          ...state.recipes.filter((recipe) => recipe.id !== action.payload.id)
        ]
      });

    case EDIT_RECIPE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    // pobieranie przepisu do formatu pdf
    case FETCH_RECIPE_DETAILS_PDF_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_RECIPE_DETAILS_PDF_SUCCESS:
      return {
        ...state,
        recipePdf: [...action.payload],
        loading: false
      };

    default:
      return state;
  }
};

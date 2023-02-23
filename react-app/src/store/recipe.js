const LOAD_ALL_RECIPES = 'recipe/LOAD_ALL_RECIPES';
const LOAD_RECIPE = 'recipe/LOAD_RECIPE';
const ADD_RECIPE = 'recipe/ADD_RECIPE';
const UPDATE_RECIPE = 'recipe/UPDATE_RECIPE';
const REMOVE_RECIPE = 'recipe/REMOVE_RECIPE';

//Action
export const loadAllRecipes = (recipes) => {
  return {
    type: LOAD_ALL_RECIPES,
    payload: recipes
  }
};

export const loadRecipe = (recipe) => {
  return {
    type: LOAD_RECIPE,
    payload: recipe
  }
};

export const addRecipe = (recipe) => {
  return {
    type: ADD_RECIPE,
    payload: recipe
  }
};

export const updateRecipe = (recipe) => {
  return {
    type: UPDATE_RECIPE,
    payload: recipe
  }
};

export const removeRecipe = (id) => {
  return {
    type: REMOVE_RECIPE,
    payload: id
  }
}

//Thunk
export const thunkLoadAllRecipes = () => async (dispatch) => {
  const response = await fetch('/api/recipe/');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadAllRecipes(data.recipes))
  }
};

export const thunkLoadRecipe = (id) => async (dispatch) => {
  const response = await fetch(`/api/recipe/${id}`);
  if (response.ok) {
    const recipe = await response.json();
    dispatch(loadRecipe(recipe))
    return recipe;
  }
};

export const thunkCreateRecipe = (recipe) => async (dispatch) => {
  const response  = await fetch(`/api/recipe/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  });

  if (response.ok) {
    const recipe = await response.json();
    dispatch(addRecipe(recipe))
    return recipe
  } else {
    const data = await response.json();
    if (data.errors) {
      return data
    }
  }
}

export const thunkUpdateRecipe = (data) => async (dispatch) => {
  const response = await fetch(`/api/recipe/${data.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const recipe = await response.json();
    dispatch(updateRecipe(recipe))
    return recipe;
  } else {
    const data = await response.json();
    if (data.errors) {
      return data
    }
  }
}

export const thunkRemoveRecipe = (id) => async (dispatch) => {
  const response = await fetch(`/api/recipe/${id}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(removeRecipe(id))
    return data;
  }
};

//InitialState
const initialState = {
  recipes: {}
};

//Reducer
const recipeReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_ALL_RECIPES:
      newState.recipes = normalize(action.payload)
      return newState;
    case ADD_RECIPE:
      newState.recipes = {...state.recipes, [action.payload.id]: action.payload}
      return newState;
    case UPDATE_RECIPE:
      newState.recipes = {...state.recipes, [action.payload.id]: action.payload}
      return newState;
    case REMOVE_RECIPE:
      newState.recipes = {...state.recipes}
      delete newState.recipes[action.payload]
      return newState;
    default:
      return state;
  }
};

// helper
const normalize = (array) => {
  const obj = {}
  array.forEach((el) => {
    obj[el.id] = el
  });
  return obj;
}

export default recipeReducer;

// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const ADD_RECIPE_TO_LIKES = "session/ADD_RECIPE_TO_LIKES";
const REMOVE_RECIPE_FROM_LIKES = "session/REMOVE_RECIPE_FROM_LIKES";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const addRecipeToLikes = (recipeId) => ({
  type: ADD_RECIPE_TO_LIKES,
  recipeId,
});

const removeRecipeFromLikes = (recipeId) => ({
  type: REMOVE_RECIPE_FROM_LIKES,
  recipeId,
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp =
  (first_name, last_name, username, email, img_url, bio, password) =>
  async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        img_url,
        bio,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

export const likeRecipe = (recipeId) => async (dispatch) => {
  const res = await fetch(`/api/likes/${recipeId}`, { method: "POST" });

  if (res.ok) {
    dispatch(addRecipeToLikes(recipeId));
    return true;
  }

  return false;
};

export const removeLikeRecipe = (recipeId) => async (dispatch) => {
  const res = await fetch(`/api/likes/${recipeId}`, { method: "DELETE" });

  if (res.ok) {
    dispatch(removeRecipeFromLikes(recipeId));
    return true;
  }

  return false;
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case REMOVE_USER:
      return { user: null };
	case ADD_RECIPE_TO_LIKES:
      const addLike = {...state.user.likes}
      addLike[action.recipeId] = true
      return { user: { ...state.user, likes: {...addLike}}}
    case REMOVE_RECIPE_FROM_LIKES:
      const removeLike = {...state.user.likes}
      delete removeLike[action.recipeId]
      return { user: { ...state.user, likes: {...removeLike}}}
    default:
      return state;
  }
}

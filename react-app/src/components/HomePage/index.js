import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllRecipes } from "../../store/recipe";
import { thunkLoadAllReviews } from "../../store/review";
import { NavLink } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import "./HomePage.css";


const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const allRecipesData = useSelector(state => state.recipe.recipes)
  let allRecipes;
  if (allRecipesData) allRecipes = Object.values(allRecipesData);
  useEffect(() => {
    dispatch(thunkLoadAllRecipes())
    dispatch(thunkLoadAllReviews())
  }, [dispatch])
  if (!allRecipes) {
    return null
  }

  return (
    <>
    <div className="HomePageCompleteDiv">
        <h2>DIYDinners</h2>
    </div>
    </>
  )
};

export default HomePage;

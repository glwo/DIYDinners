import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllRecipes } from "../../store/recipe";
import { thunkLoadAllReviews } from "../../store/review";
import { NavLink } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import RecipeOTD from "../RecipeOTD";
import "./SplashPage.css";

const SplashPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const allRecipesData = useSelector((state) => state.recipe.recipes);
  const VegRecipes = Object.values(allRecipesData).filter(
    (recipe) => recipe.recipe_type == "vegetarian"
  );
  const ClassicRecipes = Object.values(allRecipesData).filter(
    (recipe) => recipe.recipe_type == "classic"
  );
  const PastaRecipes = Object.values(allRecipesData).filter(
    (recipe) => recipe.recipe_type == "pasta"
  );
  const DesRecipes = Object.values(allRecipesData).filter(
    (recipe) => recipe.recipe_type == "dessert"
  );

  let allRecipes;
  if (allRecipesData) allRecipes = Object.values(allRecipesData);
  useEffect(() => {
    dispatch(thunkLoadAllRecipes());
    dispatch(thunkLoadAllReviews());
  }, [dispatch]);
  if (!allRecipes) {
    return null;
  }

  return (
    <>
      <RecipeOTD />
      <div className="homePageBox">
        {/* <div className="recipeHomePageBox">
          {allRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div> */}
        <div className="ClassicRecipeDiv">
          <h2>Classic Recipes</h2>
          <h4>Traditional dishes we think you'll love.</h4>
        </div>
        <div className="recipeHomePageBox">
          {ClassicRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
        <div className="ClassicRecipeDiv">
          <h2>Vegetarian Recipes</h2>
          <h4>Creative meat-free meals.</h4>
        </div>
        <div className="recipeHomePageBox">
          {VegRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
        <div className="ClassicRecipeDiv">
          <h2>Pasta Recipes</h2>
          <h4>Hearty and satisfying pasta dishes.</h4>
        </div>
        <div className="recipeHomePageBox">
          {PastaRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
        <div className="ClassicRecipeDiv">
          <h2>Dessert Recipes</h2>
          <h4>Decadent sweets to round off your evening.</h4>
        </div>
        <div className="recipeHomePageBox">
          {DesRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SplashPage;

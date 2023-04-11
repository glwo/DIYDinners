import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Favorite from "../Favorite";
import "./RecipeOTD.css";

const RecipeOTD = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [showFavorite, setShowFavorite] = useState(true);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const allRecipesData = useSelector(state => state.recipe.recipes)

  let allRecipes;
  if (allRecipesData) allRecipes = Object.values(allRecipesData);

  const recipe = Object.values(allRecipesData).find(
    (recipe) => recipe.id == selectedRecipeId
  );


  function selectRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const randomRecipe = allRecipes[randomIndex];
    setSelectedRecipeId(randomRecipe?.id);
  }


  useEffect(() => {
    selectRandomRecipe();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      selectRandomRecipe();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

if (!allRecipesData) {
    return null;
  }

if(!recipe) {
    return null;
}

  return (
    <div
      className="recipeOTD-main-div"
      to={`/recipe/${recipe.id}`}
      // onMouseOver={() => setShowFavorite(true)}
      // onMouseLeave={() => setShowFavorite(false)}
    >
      <Link className="recipe-OTD-image-div" to={`/recipe/${recipe.id}`}>
        <img
          className="recipeOTD-preview-image"
          src={
            recipe.recipe_images[0] !== undefined
              ? recipe.recipe_images[0].image_url
              : null
          }
          alt="No Recipe Image found"
          onError={(e) => {
            e.currentTarget.src =
              "https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png";
          }}
        />
      </Link>
      <Link className="recipeOTDInfoDiv" to={`/recipe/${recipe.id}`}>
        <h4 className="recipeOTDName">{recipe.recipe_name}</h4>
        <p>
          {recipe.first_name} {recipe.last_name}
        </p>
      </Link>
      <div className="favIconContainer">
        <div
          className="favoriteIcon"
          hidden={sessionUser && sessionUser !== null ? false : true}
        >
          {showFavorite && <Favorite recipeId={recipe.id} />}
        </div>
      </div>
    </div>
  );
};

export default RecipeOTD;

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

  const recipe = Object.values(allRecipesData).find(
    (recipe) => recipe.id == selectedRecipeId
  );

  let allRecipes;
  if (allRecipesData) allRecipes = Object.values(allRecipesData);

  useEffect(() => {
    const recipeOTD = JSON.parse(localStorage.getItem('recipeOTD'));
    if (recipeOTD && recipeOTD.expirationTime > new Date().getTime()) {
      setSelectedRecipeId(recipeOTD.recipeId);
    } else {
      selectRandomRecipe();
    }
  }, []);

  function selectRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const randomRecipe = allRecipes[randomIndex];
    setSelectedRecipeId(randomRecipe?.id);

    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    localStorage.setItem('recipeOTD', JSON.stringify({ recipeId: randomRecipe?.id, expirationTime }));
  }

  return (
    <div
      className="recipeOTD-main-div"
      to={`/recipe/${recipe?.id}`}
      // onMouseOver={() => setShowFavorite(true)}
      // onMouseLeave={() => setShowFavorite(false)}
    >
      <Link className="recipe-OTD-image-div" to={`/recipe/${recipe?.id}`}>
        <img
          className="recipeOTD-preview-image"
          src={
            recipe?.recipe_images[0] !== undefined
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
      <Link className="recipe-OTD-circle" to={`/recipe/${recipe?.id}`}>
        <div>
          <p>
            Recipe of the Day
          </p>
        </div>
      </Link>
      <Link className="recipeOTDInfoDiv" to={`/recipe/${recipe?.id}`}>
        <h4 className="recipeOTDName">{recipe?.recipe_name}</h4>
        {/* <p>{recipe.avg}</p> */}
        <p>
          {recipe?.first_name} {recipe?.last_name}
        </p>
      </Link>
      <div className="favIconOTDContainer">
        <div
          className="favoriteIcon"
          hidden={sessionUser && sessionUser !== null ? false : true}
        >
          {showFavorite && <Favorite recipeId={recipe?.id} />}
        </div>
      </div>
    </div>
  );
};

export default RecipeOTD;

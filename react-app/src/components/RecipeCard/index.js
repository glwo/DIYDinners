import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {
  if (!recipe) {
    return null
  }

  return (
    <Link className="recipeCard-main-div" to={`/recipe/${recipe.id}`}>
      <div className="image-div">
        <img className="recipe-preview-image" src={recipe.recipe_images[0] !== undefined ? recipe.recipe_images[0].image_url : null} alt="No Recipe Image found" />
      </div>
      <div className="recipeInfoDiv">
        <div className="recipeStoreName">{recipe.recipe_name}</div>
        <div>{recipe.num_reviews} review(s)</div>
      </div>
    </Link>
  )
};

export default RecipeCard;

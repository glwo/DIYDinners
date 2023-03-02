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
        <h4 className="recipeName">{recipe.recipe_name}</h4>
        <p>{recipe.first_name} {recipe.last_name}</p>
      </div>
    </Link>
  )
};

export default RecipeCard;

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
        <div>
          {recipe.avg_rating >= 1 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {recipe.avg_rating >= 2 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {recipe.avg_rating >= 3 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {recipe.avg_rating >= 4 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {recipe.avg_rating >= 5 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
        </div>
        <div>{recipe.num_reviews} review(s)</div>
      </div>
    </Link>
  )
};

export default RecipeCard;

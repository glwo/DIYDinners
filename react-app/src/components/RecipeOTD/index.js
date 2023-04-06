import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Favorite from "../Favorite";
import "./RecipeOTD.css";

// const RecipeOTD = () => {
//   const sessionUser = useSelector((state) => state.session.user);
//   const [showFavorite, setShowFavorite] = useState(true);
//   if (!recipe) {
//     return null;
//   }



//   return (
//     <div
//       className="recipeCard-main-div"
//       to={`/recipe/${recipe.id}`}
//       // onMouseOver={() => setShowFavorite(true)}
//       // onMouseLeave={() => setShowFavorite(false)}
//     >
//       <Link className="image-div" to={`/recipe/${recipe.id}`}>
//         <img
//           className="recipe-preview-image"
//           src={
//             recipe.recipe_images[0] !== undefined
//               ? recipe.recipe_images[0].image_url
//               : null
//           }
//           alt="No Recipe Image found"
//           onError={(e) => {
//             e.currentTarget.src =
//               "https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png";
//           }}
//         />
//       </Link>
//       <Link className="recipeInfoDiv" to={`/recipe/${recipe.id}`}>
//         <h4 className="recipeName">{recipe.recipe_name}</h4>
//         <p>
//           {recipe.first_name} {recipe.last_name}
//         </p>
//       </Link>
//       <div className="favIconContainer">
//         <div
//           className="favoriteIcon"
//           hidden={sessionUser && sessionUser !== null ? false : true}
//         >
//           {showFavorite && <Favorite recipeId={recipe.id} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeOTD;

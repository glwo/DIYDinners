import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./SearchRecipes.css";
import RecipeCard from "../RecipeCard";

const SearchRecipes = () => {
//   const dispatch = useDispatch();
  const { keyword } = useParams();
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`/api/recipe/search-all/${keyword}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then((res) => {
        setRecipes(Object.values(res));
      })
      .catch(() => history.push("/recipes"))
      .finally(() => setIsLoaded(true));
  }, [keyword]);
//   if (!allRecipes) {
//     return null;
//   }

  return (
    <>
      {!!recipes.length ? (
        <div className="homePageBox">
          <div className="recipeHomePageBox">
            {recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </div>
      ) : (
        <div>No Recipe Found</div>
      )}
    </>
  );
};

export default SearchRecipes;

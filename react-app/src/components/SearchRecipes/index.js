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
    //   .then(res => setRecipes(res))
      .then((res) => {
        setRecipes(res);
      })
      .catch(() => history.push("/recipes"))
      .finally(() => setIsLoaded(true));
  }, [keyword]);
  if (!recipes) {
    setRecipes(null);
  }

console.log(Object.values(recipes))

  return (
    <>
    <div className="">Search results with "{keyword}"</div>
      {Object.keys(recipes).length !== 0 ? (
        <div className="homePageBox">
          <div className="recipeHomePageBox">
            {Object.values(recipes).map((recipe) => (
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

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard";
import "./RecipeBox.css";
import { applyMiddleware } from "redux";
import { NavLink } from "react-router-dom";

const RecipeBox = () => {
  const likedRecipeIds = Object.keys(
    useSelector((state) => state.session.user.likes)
  );
  // console.log(likedRecipeIds)
  let likedRecipes = [];
  const RecipesData = useSelector((state) => state.recipe.recipes);
  let allRecipes;
  if (RecipesData) allRecipes = Object.values(RecipesData);
  // const likedRecipes = Object.values(Recipes).filter(recipe => recipe?.id == likedRecipeIds)
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [isError, setIsError] = useState(false)
  // const [data, setData] = useState([])
  for (let id of likedRecipeIds) {
    likedRecipes.push(allRecipes.find((recipe) => recipe?.id == id));
  }

  // console.log(likedRecipes)

  // useEffect(() => {
  //     const itemIds = Object.keys(likedItems)

  //     if(itemIds.length){
  //         const method = 'POST'
  //         const headers = {'Content-type': 'application/json'}
  //         const body = JSON.stringify({itemIds})
  //         const options = {method, headers, body}

  //         fetch('/api/items/get', options)
  //             .then(res => {
  //                 if(res.ok) return res.json()
  //                 throw new Error()
  //             })
  //             .then(res => {
  //                 setData(Object.values(res))
  //             })
  //             .catch(() => setIsError(true))
  //             .finally(() => setIsLoaded(true))
  //     }else {
  //         setData([])
  //         setIsLoaded(true)
  //     }
  // }, [likedItems])

  return (
    <>
      <div className="recipeBoxMainDiv">
        <div className="savedRecipes">
        <h3 className="">Saved Recipes</h3>
        <p>{likedRecipes.length} recipes</p>
        </div>
        {!!likedRecipes.length ? (
          <div className="likedRecipesBox">
            {likedRecipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe?.id} />
            ))}
          </div>
        ) : (
          <div className="noSavedRecipes">
            You have not saved any recipes to your Recipe Box.
            <NavLink to="/recipes">Browse DIYDinners to start saving recipes.</NavLink>
          </div>
        )}
      </div>
      <div className="footers">
        <div className="footer">
          DIYDinners is a free service of The App Academy Times. It is a digital
          cookbook and cooking guide alike, available on one platform, that
          helps home cooks of every level discover, save and organize the
          world’s most simple dinner recipes, while also helping them become
          better, more competent cooks. No subscription needed for full access!
        </div>
        <div className="rightside-footer">
          <div>
            <a
              className="link-footer"
              href="https://github.com/glwo"
              rel="noreferrer"
              target="_blank"
            >
              Glen's Github
              | <i className="fa-brands fa-github fa-xl" />
            </a>
          </div>
          <div>
            <a
              className="link-footer"
              href="https://www.linkedin.com/in/glen-wojnar-74449b269/"
              rel="noreferrer"
              target="_blank"
            >
              Glen's LinkedIn
              | <i className="fa-brands fa-linkedin fa-xl" />
            </a>
          </div>
          <div>
            <a
              className="link-footer"
              href="https://github.com/glwo/DIYDinners"
              rel="noreferrer"
              target="_blank"
            >
              Project Repo
              | <i className="fa-brands fa-github fa-xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeBox;

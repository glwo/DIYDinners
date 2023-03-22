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

  // console.log(Object.values(recipes));

  return (
    <>
      <div className="SearchResultsDiv">
        Search Results<p className="SearchResultsP">{Object.keys(recipes).length} "{keyword}" result(s)</p>
      </div>
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

export default SearchRecipes;

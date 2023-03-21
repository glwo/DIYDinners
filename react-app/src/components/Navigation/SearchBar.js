import "./SearchBar.css";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isOnResult, setIsOnResult] = useState(false);
  const [result, setResult] = useState({});
  const submitBtn = useRef(null);
  const searchBarContainer = useRef(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(result).length) {
      history.push(`/recipe/search/${keyword}`);
      setKeyword("");
    }
  };

  useEffect(() => {
    if (keyword.length) {
      fetch(`/api/recipe/search/${keyword}`)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((res) => setResult(res));
    }
    setShowResult(!!keyword.length);
  }, [keyword]);

  if (!result) {
    setResult([]);
  }
  return (
    <div className="searchResultContainer">
      <form
        ref={searchBarContainer}
        className="searchBarContainer"
        method="GET"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="srcImg">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className=""
          type="text"
          placeholder={"What would you like to cook?"}
          value={keyword}
          onChange={(e) => {
            if (/^[a-zA-Z0-9]*$/.test(e.target.value))
              setKeyword(e.target.value);
          }}
        />
        {!!keyword.length && (
          <div
            className=""
            onClick={() => {
              setKeyword("");
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        )}
      </form>
      {(showResult || isOnResult) && (
        <ul
          className="searchResult"
          onMouseOver={() => setIsOnResult(true)}
          onMouseLeave={() => setIsOnResult(false)}
        >
          <div>{console.log(Object.values(result))}</div>
          {Object.keys(result).length ? (
            Object.values(result).map((recipe) => (
              <li
                className="recipesFound"
                onClick={() => {
                  history.push(`/recipe/${recipe.id}`);
                  setIsOnResult(false);
                  setKeyword("");
                }}
              >
                {recipe.recipe_name}
              </li>
            ))
          ) : (
            <li className="noRecipeFound">No recipe found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

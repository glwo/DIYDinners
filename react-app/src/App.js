import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import RecipePage from "./components/RecipePage";
import CreateRecipe from "./components/CreateRecipe";
import HomePage from "./components/HomePage";
import SearchRecipes from "./components/SearchRecipes";
import RecipeBox from "./components/RecipeBox/RecipeBox";
import { NavLink } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/recipe/search/:keyword">
            <SearchRecipes />
          </Route>
          <Route exact path="/recipe/:recipeId">
            <RecipePage />
          </Route>
          <Route exact path="/recipe">
            <CreateRecipe />
          </Route>
          <Route exact path="/recipes">
            <SplashPage />
          </Route>
          <Route exact path="/recipebox">
            <RecipeBox />
          </Route>
          <Route>
            <div className="errorpageDiv">
              <h1>Page Not Found</h1>
              <p>
                We’re sorry, we seem to have lost this page, but we don’t want
                to lose you.
              </p>
              <p>Return to our recipes page to browse our popular content.</p>
              <NavLink to="/recipes">Go back to recipes page</NavLink>
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

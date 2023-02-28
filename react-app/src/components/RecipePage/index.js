import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkRemoveRecipe, thunkLoadAllRecipes } from "../../store/recipe";
import { thunkLoadAllReviews } from "../../store/review";
import { Link, useParams, useHistory } from "react-router-dom";
import "./RecipePage.css";
import { removeReview, reviewCreate, reviewUpdate } from "../../store/review";
import OpenModalButton from "../OpenModalButton";
import UpdateRecipeModal from "../UpdateRecipeModal";
import UpdateReviewModal from "../UpdateReviewModal";
import CreateReviewForm from "../CreateReviewForm";

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const recipes = useSelector((state) => state.recipe.recipes);
  const currentRecipe = Object.values(recipes).find(
    (recipe) => recipe.id == recipeId
  );
  const loggedInUser = useSelector((state) => state.session.user);
  const [openModal, setOpenModal] = useState(false);
  let recipeReviews;
  if (currentRecipe) {
    recipeReviews = currentRecipe.review;
  }

  useEffect(() => {
    dispatch(thunkLoadAllRecipes());
    dispatch(thunkLoadAllReviews());
  }, [dispatch, recipeId]);

  const reviewFilter = (array, num) => {
    if (array) {
      const result = array.filter((review) => review.rating == num);
      return result.length;
    }
    return null;
  };

  const totalReviews = useSelector((state) => state.review.allReviews);
  const reviews = Object.values(totalReviews).filter(
    (review) => review.recipe_id == recipeId
  );
  if (!totalReviews) return null;

  if (!currentRecipe) {
    return null;
  }

  return (
    <div className="recipeRootDiv">
      {currentRecipe && (
        <div className="recipeDetails">
          <div id="recipe-details-inner">
            <div className="recipeNameImgRating">
              <div className="RecipeNameAndOwnerName">
                <h2>{currentRecipe.recipe_name}</h2>
              </div>
              <div>
                <img
                  id="recipeImg"
                  src={
                    currentRecipe.recipe_images[0]
                      ? currentRecipe.recipe_images[0].image_url
                      : null
                  }
                  alt="No image available for this recipe!"
                ></img>
              </div>
            </div>
            <div className="RatingsAndDescription">
              <div className="RatingsDiv">
                <h3>Ratings</h3>
                <div>{currentRecipe.avg_rating}</div>
                <div className="RatingStars">
                  {currentRecipe.avg_rating >= 1 ? (
                    <i className="fas fa-solid fa-star red"></i>
                  ) : (
                    <i className="fas fa-solid fa-star gray"></i>
                  )}
                  {currentRecipe.avg_rating >= 2 ? (
                    <i className="fas fa-solid fa-star red"></i>
                  ) : (
                    <i className="fas fa-solid fa-star gray"></i>
                  )}
                  {currentRecipe.avg_rating >= 3 ? (
                    <i className="fas fa-solid fa-star red"></i>
                  ) : (
                    <i className="fas fa-solid fa-star gray"></i>
                  )}
                  {currentRecipe.avg_rating >= 4 ? (
                    <i className="fas fa-solid fa-star red"></i>
                  ) : (
                    <i className="fas fa-solid fa-star gray"></i>
                  )}
                  {currentRecipe.avg_rating >= 5 ? (
                    <i className="fas fa-solid fa-star red"></i>
                  ) : (
                    <i className="fas fa-solid fa-star gray"></i>
                  )}
                </div>
                <div>({currentRecipe.num_reviews})</div>
                <div
                  hidden={
                    loggedInUser && loggedInUser?.id === currentRecipe.user_id
                      ? false
                      : true
                  }
                >
                  <OpenModalButton
                    className="updateRecipeButton"
                    buttonText="Update Your Recipe"
                    modalComponent={
                      <UpdateRecipeModal recipe={currentRecipe} />
                    }
                  />
                </div>
                <button
                  className="delRecipeButton"
                  onClick={() =>
                    dispatch(thunkRemoveRecipe(currentRecipe.id))
                      .then(dispatch(thunkLoadAllRecipes()))
                      .then(history.push("/"))
                  }
                  hidden={
                    loggedInUser && loggedInUser?.id === currentRecipe.user_id
                      ? false
                      : true
                  }
                >
                  Delete Your Recipe
                </button>
              </div>
              <div className="recipeDesc">
                <p id="recipe-description">{currentRecipe.description}</p>
              </div>
            </div>
            <div className="IngredientsAndSteps">
              <div className="recipeIngredients">
                <h3>Ingredients</h3>
                <h4>Yield: 2 to 4 servings</h4>
                <p>{currentRecipe.ingredients}</p>
              </div>
              <div className="recipeSteps">
                <h3>Preparation</h3>
                <h4>Step One</h4>
                <p>{currentRecipe.step_one}</p>
                <h4>Step Two</h4>
                <p>{currentRecipe.step_two}</p>
                <h4>Step Three</h4>
                <p>{currentRecipe.step_three}</p>
                <h4>Step Four</h4>
                <p>{currentRecipe.step_four}</p>
              </div>
            </div>
            <div id="page-bottom-container">
              <div className="reviewRatingsDiv">
                <h3>Ratings</h3>
                <div className="reviewsAndStars">
                  <div>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div>{currentRecipe.avg_rating} out of Five</div>
                    <div>{currentRecipe.num_reviews} user ratings</div>
                  </div>
                </div>
              </div>
              <div className="review-container">
                <div className="cookingNotes">
                  <h3>Cooking Notes</h3>
                  <div
                    hidden={
                      loggedInUser && loggedInUser?.id === currentRecipe.user_id
                        ? true
                        : false
                    }
                  >
                    <CreateReviewForm recipeId={recipeId} />
                  </div>
                  <h4 className="allNotesHeader">All Notes</h4>
                  {reviews.length > 0 &&
                    reviews.map((review) => {
                      return (
                        <div key={review.id} className="indiv-review">
                          <div className="review-name">
                            <h5>
                              <i class="fa-solid fa-user"></i>
                              {review.firstName}
                            </h5>
                          </div>
                          {review.content}
                          <div>
                            {loggedInUser &&
                            review.user_id == loggedInUser.id ? (
                              <div className="editDeleteButton">
                                <OpenModalButton
                                  buttonText="Update Your Review"
                                  modalComponent={
                                    <UpdateReviewModal
                                      key={review.id}
                                      reviewDetails={review}
                                    />
                                  }
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            <button
                              className="delReviewButton"
                              onClick={() => dispatch(removeReview(review.id))}
                              hidden={
                                loggedInUser &&
                                loggedInUser?.id === review.user_id
                                  ? false
                                  : true
                              }
                            >
                              Delete Your Review
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {!reviews.length && (
                  <p> There are currently no cooking notes for this recipe. </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage;

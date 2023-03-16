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
import DeleteRecipeModal from "../DeleteRecipeModal";
import DeleteReviewModal from "../DeleteReviewModal";

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
    // dispatch(removeReview());
  }, [dispatch, recipeId]);

  const checkReviews = (user, reviews) => {
    for (let review of reviews) {
      if (review?.user_id === user?.id) {
        return true;
      }
    }
    return false;
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
                <h4>
                  Recipe from {currentRecipe.first_name}{" "}
                  {currentRecipe.last_name}
                </h4>
              </div>
              <div className="recipeImgDiv">
                <img
                  id="recipeImg"
                  src={
                    currentRecipe.recipe_images[0]
                      ? currentRecipe.recipe_images[0].image_url
                      : null
                  }
                  alt="No image available for this recipe!"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png";
                  }}
                ></img>
              </div>
            </div>
            <div className="RatingsAndDescription">
              <div className="RecipeRatingsAndButtonsDiv">
                <div className="RatingsDiv">
                  <h3>Ratings</h3>
                  <div className="RatingsStarsAndReviewsRow">
                    <div className="avgRatingToFixed">{(+currentRecipe.avg_rating).toFixed(1)}</div>
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
                    <div className="currentRecipeNumReviews">({currentRecipe.num_reviews})</div>
                  </div>
                  <div className="UpdateAndDeleteRecipeButtons">
                    <div
                      hidden={
                        loggedInUser &&
                        loggedInUser?.id === currentRecipe.user_id
                          ? false
                          : true
                      }
                    >
                      <OpenModalButton
                        className="updateRecipeButton"
                        buttonText={
                          <>
                            <i class="fa-regular fa-pen-to-square"></i>Update
                          </>
                        }
                        modalComponent={
                          <UpdateRecipeModal recipe={currentRecipe} />
                        }
                      />
                    </div>
                    <div
                      hidden={
                        loggedInUser &&
                        loggedInUser?.id === currentRecipe.user_id
                          ? false
                          : true
                      }
                    >
                      <OpenModalButton
                        className="updateRecipeButton"
                        buttonText={
                          <>
                            <i class="fa-solid fa-trash"></i>Delete
                          </>
                        }
                        modalComponent={
                          <DeleteRecipeModal recipeId={currentRecipe.id} />
                        }
                      />
                    </div>
                  </div>
                </div>
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
                <h4>Step 1</h4>
                <p>{currentRecipe.step_one}</p>
                <h4>Step 2</h4>
                <p>{currentRecipe.step_two}</p>
                <h4>Step 3</h4>
                <p>{currentRecipe.step_three}</p>
                <h4>Step 4</h4>
                <p>{currentRecipe.step_four}</p>
              </div>
            </div>
            <div id="page-bottom-container">
              <div className="reviewRatingsDiv">
                <h3>Ratings</h3>
                <div className="reviewsAndStars">
                  <div>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <div className="avgUserRatingsDiv">
                    <div className="avgRatingFixed">
                      {(+currentRecipe.avg_rating).toFixed(1)} out of 5
                    </div>
                    <p className="userRatings">
                      {currentRecipe.num_reviews} user ratings
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-container">
                <div className="cookingNotes">
                  <h3>Cooking Notes</h3>
                  <div
                    hidden={
                      (loggedInUser &&
                        loggedInUser?.id === currentRecipe.user_id) ||
                      checkReviews(loggedInUser, recipeReviews) === true
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
                          <div className="reviewContentDiv">
                            <h5 className="firstNamelastInitheader">
                              <i class="fa-solid fa-user"></i>

                              {review.firstName} {review.lastInitial}.
                            </h5>
                            <p><div className="RatingStars">
                      {review.rating >= 1 ? (
                        <i className="fas fa-solid fa-star red"></i>
                      ) : (
                        <i className="fas fa-solid fa-star gray"></i>
                      )}
                      {review.rating >= 2 ? (
                        <i className="fas fa-solid fa-star red"></i>
                      ) : (
                        <i className="fas fa-solid fa-star gray"></i>
                      )}
                      {review.rating >= 3 ? (
                        <i className="fas fa-solid fa-star red"></i>
                      ) : (
                        <i className="fas fa-solid fa-star gray"></i>
                      )}
                      {review.rating >= 4 ? (
                        <i className="fas fa-solid fa-star red"></i>
                      ) : (
                        <i className="fas fa-solid fa-star gray"></i>
                      )}
                      {review.rating >= 5 ? (
                        <i className="fas fa-solid fa-star red"></i>
                      ) : (
                        <i className="fas fa-solid fa-star gray"></i>
                      )}
                    </div></p>
                            <div>{review.content}</div>
                            <img
                              id="reviewImg"
                              src={review.imgUrl ? review.imgUrl : null}
                              alt="No image available for this review!"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg";
                              }}
                            ></img>
                          </div>
                          <div className="editDeleteButton">
                            {loggedInUser &&
                            review.user_id == loggedInUser.id ? (
                              <div>
                                <OpenModalButton
                                  buttonText={
                                    <>
                                      <i class="fa-regular fa-pen-to-square"></i>{" "}
                                      Update
                                    </>
                                  }
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
                            {loggedInUser &&
                            review.user_id == loggedInUser.id ? (
                              <div>
                                <OpenModalButton
                                  buttonText={
                                    <>
                                      <i class="fa-solid fa-trash"></i> Delete
                                    </>
                                  }
                                  modalComponent={
                                    <DeleteReviewModal
                                      key={review.id}
                                      reviewId={review.id}
                                    />
                                  }
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            {/* <button
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
                            </button> */}
                            <div className="borderBottom"></div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {!reviews.length && (
                  <p> There aren't any notes yet. Be the first to leave one. </p>
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

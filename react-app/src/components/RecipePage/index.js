import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllRecipes } from "../../store/recipe";
import { Link, useParams } from "react-router-dom";
import "./RecipePage.css"
import OpenModalButton from "../OpenModalButton";

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipe.recipes)
  const currentRecipe = Object.values(recipes).find(recipe => recipe.id == recipeId)

  let recipeReviews;
  if (currentRecipe) {
    recipeReviews = currentRecipe.review
  }

  useEffect(() => {
    dispatch(thunkLoadAllRecipes())
  }, [dispatch, recipeId])

  const reviewFilter = (array, num) => {
    if (array) {
      const result = array.filter(review => review.rating == num)
      return result.length
    }
    return null
  }

  if (!currentRecipe) {
    return null
  }

  return (
    <div className="recipeRootDiv">
        {currentRecipe &&
        <div className="recipeDetails">
            <div id='recipe-details-inner'>
                <div>
                    <h2>{currentRecipe.recipe_name}</h2>
                        <p id="recipe-owner">{currentRecipe.user_id}</p>
                </div>
                        <img id="recipeImg" src={currentRecipe.recipe_images[0].image_url} alt="No image available for this recipe!"></img>
                <div>
                    {currentRecipe.avg_rating}
                </div>
                <div className="recipeDesc">
                    <p id="recipe-description">{currentRecipe.description}</p>
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
                {/* <div id='page-bottom-container'>
                    <div className="review-container">
                        <h3>Reviews</h3>
                    {recipeReviews.length > 0 && (
                        recipeReviews.map(review => {
                            return (
                                <div key={review.id} className='indiv-review'>
                                    <div className="review-name">
                                    <h5><i class="fa-solid fa-user"></i>{review.User?.firstName}</h5>
                                    </div>
                                    {review.review}
                                    <div>
                                    <button className="delReviewButton"
                                    onClick={() => dispatch(deleteReview(review.id)).then(dispatch(getAllReviews(spotObj.id)))}
                                    hidden={(loggedInUser && loggedInUser?.id === review.User?.id ? false : true)}>
                                        Delete Your Review
                                    </button>
                                    </div>
                                </div>
                            )
                        })
                            )}
                        </div>
                    {!spotReviewsArr.length && (<p> There are currently no reviews for this location </p>)}

                    <div id='spot-information'>
                        <div className="price">
                            <h2>
                                $ {spotObj.price} night
                            </h2>
                        </div>
                        <div className="ratingandreviews">
                            <p>
                            <i class="fa-sharp fa-solid fa-star"></i>
                                {(+(spotObj.avgStarRating)).toFixed(2)} · {spotObj.numReviews} review(s)
                            </p>
                        </div>
                        <div>
                        <button className="spotButtons" onClick={createReview} hidden={(loggedInUser && loggedInUser.id !== spotObj.ownerId ? false : true)}>
                            Add A Review
                        </button>
                        </div>
                        <div>
                        <button className="spotButtons" onClick={updateSpot} hidden={(loggedInUser && loggedInUser.id === spotObj.ownerId ? false : true)}>
                            Update Spot
                        </button>
                        </div>
                        <div>
                        <button className="spotButtons"
                        onClick={() => dispatch(deleteIndivSpot(id)).then(dispatch(getAllSpots())).then(history.push("/"))}
                        hidden={(loggedInUser && loggedInUser.id === spotObj.ownerId ? false : true)}>
                            Delete Spot
                        </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        }
    </div>
)
}

export default RecipePage

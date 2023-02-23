import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllRecipes } from "../../store/recipe";
import { thunkLoadAllReviews } from "../../store/review";
import { Link, useParams } from "react-router-dom";
import "./RecipePage.css"
import OpenModalButton from "../OpenModalButton";

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipe.recipes)
  const currentRecipe = Object.values(recipes).find(recipe => recipe.id == recipeId)

//   let recipeReviews;
//   if (currentRecipe) {
//     recipeReviews = currentRecipe.review
//   }

  useEffect(() => {
    dispatch(thunkLoadAllRecipes())
    dispatch(thunkLoadAllReviews())
  }, [dispatch, recipeId])

  const reviewFilter = (array, num) => {
    if (array) {
      const result = array.filter(review => review.rating == num)
      return result.length
    }
    return null
  }

  const totalReviews = useSelector(state => state.reviews.allReviews)
  const reviews = Object.values(totalReviews).filter(review => review.recipe_id == recipeId)
  if (!totalReviews) return null

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
                <div id='page-bottom-container'>
                    <div className="review-container">
                        <h3>Reviews</h3>
                    {reviews.length > 0 && (
                        reviews.map(review => {
                            return (
                                <div key={review.id} className='indiv-review'>
                                    <div className="review-name">
                                    {/* <h5><i class="fa-solid fa-user"></i>{review.User?.firstName}</h5> */}
                                    </div>
                                    {review.review}
                                    <div>
                                    {/* <button className="delReviewButton"
                                    onClick={() => dispatch(deleteReview(review.id)).then(dispatch(getAllReviews(spotObj.id)))}
                                    hidden={(loggedInUser && loggedInUser?.id === review.User?.id ? false : true)}>
                                        Delete Your Review
                                    </button> */}
                                    </div>
                                </div>
                            )
                        })
                            )}
                        </div>
                    {!reviews.length && (<p> There are currently no reviews for this location </p>)}
                </div>
            </div>
        </div>
        }
    </div>
)
}

export default RecipePage

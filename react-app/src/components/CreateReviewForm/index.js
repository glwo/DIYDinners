import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { reviewCreate } from "../../store/review";
import { thunkLoadAllReviews } from "../../store/review";
import { thunkLoadAllRecipes } from "../../store/recipe";
import StarsRating from "stars-rating";
import "./CreateReviewForm.css";

function CreateReviewForm({ recipeId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState([]);

  // const { recipeId } = useParams()
  const currentUser = useSelector((state) => state.session.user);
  const totalReviews = useSelector((state) => state.review.allReviews);
  const reviews = Object.values(totalReviews).filter(
    (review) => review.recipe_id == recipeId
  );

  const checkReviews = function (currentUser, userReviews) {
    for (let userReview of userReviews) {
      if (userReview.user_id === currentUser.id) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    dispatch(thunkLoadAllReviews());
    // dispatch(reviewCreate())
  }, [dispatch, recipeId]);

  const updateReview = (e) => setReview(e.target.value);
  const updateStars = (e) => setStars(e.target.value);
  const updateImage = (e) => setImage(e.target.value);

  const clearData = (newReview) => {
    setReview("");
    setStars("");
    setImage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentUser == undefined) {
      setErrors(["Must be logged in to create a Cooking Note."]);
      return;
    }

    if (review.split(" ").length === 1 && review.length > 25) {
      setErrors(["Note cannot exceed 25 characters."]);
      return;
    }

    if (review.split(" ").length > 100) {
      setErrors(["Note cannot exceed 100 words."]);
      return;
    }

    if (review.length > 700) {
      setErrors(["Note cannot exceed 700 characters."]);
      return;
    }

    if (!stars) {
      setErrors(["Please select a rating for your note."]);
      return;
    }

    if (!image) {
      setErrors(["Please provide an image for your note."]);
      return;
    }

    if (checkReviews(currentUser, reviews) !== true) {
      setErrors(["User already has a review for this recipe."]);
      return;
    }

    if (review.split(" ").length > 1) {
      let words = review.split(" ");
      for (let word of words) {
        if (word.length > 30) {
          setErrors(["Words within review cannot exceed 30 characters"]);
          return;
        }
      }
    }

    let payload;

    payload = {
      recipe_id: recipeId,
      content: review,
      rating: stars,
      imgUrl: image,
    };

    let newReview = await dispatch(reviewCreate(recipeId, payload));
    // .then(() => dispatch(thunkLoadAllReviews()))

    // dispatch(reviewCreate(recipeId, payload))
    //     .then(() => dispatch(thunkLoadAllReviews()))

    if (newReview.errors) {
      setErrors(newReview.errors);
    } else {
      clearData(newReview);
      // dispatch(thunkLoadAllReviews())
      dispatch(thunkLoadAllRecipes());
    }
  };

  return (
    <div className="reviewForm">
      <form onSubmit={handleSubmit} className="reviewCreateContainer">
        <div>
          {/* <h4 className={!errors.length ? 'reviewFormHeader' : ''}>{recipe_id ? recipe.name : 'Reviews'}</h4> */}
        </div>
        {errors.length !== 0 && (
          <ul style={{ marginBottom: "0px" }}>
            {errors.map((error, idx) => (
              <li key={idx} style={{ color: "red" }}>
                {error}
              </li>
            ))}
          </ul>
        )}
        <h4>Add a Note</h4>
        <textarea
          style={{ borderRadius: "10px 10px 10px 10px", marginBottom: "10px" }}
          className="reviewText"
          type={"text"}
          placeholder={"Share your notes with other cooks..."}
          required
          value={review}
          onChange={updateReview}
        />
        {/* <div class="rate"> */}
        {/* Rating :
          <input
            type="radio"
            id="star1"
            name="rate"
            value="1"
            onChange={updateStars}
          />
          <label for="star1" title="text">
            1 star
          </label>
          <input
            type="radio"
            id="star2"
            name="rate"
            value="2"
            onChange={updateStars}
          />
          <label for="star2" title="text">
            2 stars
          </label>
          <input
            type="radio"
            id="star3"
            name="rate"
            value="3"
            onChange={updateStars}
          />
          <label for="star3" title="text">
            3 stars
          </label>
          <input
            type="radio"
            id="star4"
            name="rate"
            value="4"
            onChange={updateStars}
          />
          <label for="star4" title="text">
            4 stars
          </label>
          <input
            type="radio"
            id="star5"
            name="rate"
            value="5"
            onChange={updateStars}
          />
          <label for="star5" title="text">
            5 stars
          </label> */}
        {/* </div> */}
        <div className="reviewRatingandPhoto">
        <div>
          Your rating
          <StarsRating
            count={5}
            onChange={setStars}
            size={35}
            half={false}
            value={stars}
            color2={"#222222"}
            color1={"#80808f"}
          />
        </div>
        <div className="provideAPhoto">
          Have you cooked this?
          <input
            style={{
              borderRadius: "10px 10px 10px 10px",
              marginBottom: "10px",
            }}
            className="formChildren"
            type={"url"}
            placeholder={"Please provide a photo..."}
            value={image}
            onChange={updateImage}
          />
        </div>
        </div>
        <div>
          <button className="reviewSubmitButton">
            <i class="fa-solid fa-check"></i> Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateReviewForm;

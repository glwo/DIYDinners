import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import { reviewUpdate } from "../../store/review";
import { thunkLoadAllRecipes } from "../../store/recipe";
import StarsRating from "stars-rating";
import "./UpdateReviewModal.css";

function UpdateReviewModal({ reviewDetails }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [review, setReview] = useState(reviewDetails.content);
  const [stars, setStars] = useState(reviewDetails.rating);
  const [errors, setErrors] = useState([]);
  const [url, setUrl] = useState(reviewDetails.imgUrl);

  // const initialStars = useState(reviewDetails.rating);

  const updateReview = (e) => setReview(e.target.value);
  const updateStars = (e) => setStars(e.target.value);
  const updateImage = (e) => setUrl(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (!url) {
      setErrors(["Please provide an image for your note."]);
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

    const payload = {
      ...reviewDetails,
      content: review,
      rating: stars,
      imgUrl: url,
    };

    const updatedReview = await dispatch(
      reviewUpdate(payload, reviewDetails.id)
    );
    if (updatedReview.errors) {
      setErrors(updatedReview.errors);
    } else {
      setErrors([]);
      dispatch(thunkLoadAllRecipes());
      closeModal();
    }
  };

  return (
    <div className="updateReviewModal">
      <div>
        <h1>Update Your Note</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="reviewForm">
          {errors.length !== 0 && (
            <ul style={{ marginBottom: "0px" }}>
              {errors.map((error, idx) => (
                <li key={idx} style={{ color: "red" }}>
                  {error}
                </li>
              ))}
            </ul>
          )}
          <textarea
            style={{
              borderRadius: "10px 10px 10px 10px",
              marginBottom: "10px",
              width: "95%",
            }}
            className="reviewText"
            type={"text"}
            placeholder={"Update your note..."}
            required
            value={review}
            onChange={updateReview}
          />
          {/* <div>
            <label>Rating :</label>
          </div>
          <input
            // checked={initialStars === 1 ? true : false}
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
            // checked={initialStars === 2 ? true : false}
            type="radio"
            id="star2"
            name="rate"
            value={2}
            onChange={updateStars}
          />
          <label for="star2" title="text">
            2 stars
          </label>
          <input
            // checked={initialStars === 3 ? true : false}
            type="radio"
            id="star3"
            name="rate"
            value={3}
            onChange={updateStars}
          />
          <label for="star3" title="text">
            3 stars
          </label>
          <input
            // checked={initialStars === 4 ? true : false}
            type="radio"
            id="star4"
            name="rate"
            value={4}
            onChange={updateStars}
          />
          <label for="star4" title="text">
            4 stars
          </label>
          <input
            // checked={initialStars === 5 ? true : false}
            type="radio"
            id="star5"
            name="rate"
            value={5}
            onChange={updateStars}
          />
          <label for="star5" title="text">
            5 stars
          </label> */}
          <div className="yourRating">
            Your rating :
            </div>
            <StarsRating
            className="updateReviewStars"
              count={5}
              onChange={setStars}
              size={35}
              half={false}
              value={stars}
              color2={"#222222"}
              color1={"#80808f"}
            />

          <div className="noteImage">
            <label>Note image :</label>
          </div>
          <input
            style={{
              borderRadius: "10px 10px 10px 10px",
              marginBottom: "10px",
              width: "95%",
            }}
            className="formChildren"
            type={"url"}
            placeholder={"Note Image"}
            value={url}
            onChange={updateImage}
          />
        </div>
        <div className="reviewSubmit">
          <button type="submit">Submit Updates</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateReviewModal;

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkLoadAllReviews, removeReview } from '../../store/review';
import { thunkLoadAllRecipes } from '../../store/recipe';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import "./DeleteReviewModal.css"


export default function DeleteReviewModal({reviewId}) {
    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector((state) => state.session.user);
    const {closeModal} = useModal()
    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        dispatch(removeReview(reviewId))
            .then(() => dispatch(thunkLoadAllReviews()))
            .then(() => dispatch(thunkLoadAllRecipes()))
            // .then(() => history.push(`/`))
            .then(closeModal)
    };

    return (
        <div className='deleteNote'>
            <div className="form-header">
                <h1>Delete Note?</h1>
                <p>(Your note will be deleted permanently and this cannot be undone.)</p>
            </div>
            <form onSubmit={handleSubmit}>
              <button className="delete-button" type="submit">Confirm Delete</button>
            </form>
        </div>
    )
}

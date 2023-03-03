import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkLoadAllRecipes, thunkRemoveRecipe } from '../../store/recipe';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import './DeleteRecipeModal.css'


export default function DeleteRecipeModal({recipeId}) {
    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector((state) => state.session.user);
    const {closeModal} = useModal()
    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        dispatch(thunkRemoveRecipe(recipeId))
            .then(() => dispatch(thunkLoadAllRecipes()))
            .then(() => history.push(`/recipes`))
            .then(closeModal)
    };

    return (
        <div className='deleteRecipe'>
            <div className="form-header">
                <h1>Delete Recipe?</h1>
                <p>(Recipe and associated reviews will be deleted permanently and this cannot be undone.)</p>
            </div>
            <form onSubmit={handleSubmit}>
              <button className="delete-button" type="submit">Confirm Delete</button>
            </form>
        </div>
    )
}

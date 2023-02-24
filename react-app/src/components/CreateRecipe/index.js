import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateRecipe } from '../../store/recipe';
import './CreateRecipe.css'

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [recipe_name, setRecipeName] = useState('');
  const [recipe_type, setRecipeType] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [step_one, setStepOne] = useState('');
  const [step_two, setStepTwo] = useState('');
  const [step_three, setStepThree] = useState('');
  const [step_four, setStepFour] = useState('');
  const [errors, setErrors] = useState([]);
  const currentUser = useSelector(state => state.session.user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (currentUser == undefined) return history.push('/')

    const recipe = {
      recipe_name,
      recipe_type,
      description,
      ingredients,
      image_url,
      step_one,
      step_two,
      step_three,
      step_four,
    };

    const data = await dispatch(thunkCreateRecipe(recipe))
    if (data.errors) {
      setErrors(data.errors)
    } else {
      setErrors([]);
      history.push(`/recipe/${data.id}`);
    }
  }

  return (
    <div className='main-div'>
      <div className='create-business-form'>
        <h1>
          Create A New Recipe
        </h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className="input-form">
            <label>Recipe Name :</label>
            <input
              type='text'
              value={recipe_name}
              onChange={(e) => setRecipeName(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Recipe Type :</label>
            <select
              value={recipe_type}
              onChange={(e) => setRecipeType(e.target.value)}
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="classic">Classic</option>
              <option value="desert">Desert</option>
              <option value="pasta">Pasta</option>
            </select>
          </div>
          <div className="input-form">
            <label>Description :</label>
            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Ingredients :</label>
            <input
              type='text'
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Recipe Preview Image :</label>
            <input
              type='text'
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step One :</label>
            <input
              type='text'
              value={step_one}
              onChange={(e) => setStepOne(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step Two :</label>
            <input
              type='text'
              value={step_two}
              onChange={(e) => setStepTwo(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step Three :</label>
            <input
              type='text'
              value={step_three}
              onChange={(e) => setStepThree(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step Four :</label>
            <input
              type='text'
              value={step_four}
              onChange={(e) => setStepFour(e.target.value)}
              required
            />
          </div>
          <div>
            <button className='create-button' type="submit">Create New Recipe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

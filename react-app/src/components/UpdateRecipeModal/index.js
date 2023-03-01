import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkUpdateRecipe } from "../../store/recipe";
import './UpdateRecipeModal.css'

export default function UpdateRecipeModal({ recipe }) {
  const dispatch = useDispatch();
  const [recipe_name, setRecipeName] = useState(recipe.recipe_name);
  const [recipe_type, setRecipeType] = useState(recipe.recipe_type);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [image_url, setImageUrl] = useState(recipe.recipe_images[0].image_url);
  const [step_one, setStepOne] = useState(recipe.step_one);
  const [step_two, setStepTwo] = useState(recipe.step_two);
  const [step_three, setStepThree] = useState(recipe.step_three);
  const [step_four, setStepFour] = useState(recipe.step_four);
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const recipeData = {
      ...recipe,
      id: recipe.id,
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

    const data = await dispatch(thunkUpdateRecipe(recipeData))
    if (data.errors) {
      setErrors(data.errors)
    } else {
      setErrors([]);
      closeModal();
    }
  }

  return (
    <div className='main-div'>
      <div className='updateRecipeModal'>
        <h1>
          Update Your Recipe
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
            <button className='updateButton' type="submit">Update Recipe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateRecipe } from "../../store/recipe";
import "./CreateRecipe.css";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [recipe_name, setRecipeName] = useState("");
  const [recipe_type, setRecipeType] = useState("classic");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [step_one, setStepOne] = useState("");
  const [step_two, setStepTwo] = useState("");
  const [step_three, setStepThree] = useState("");
  const [step_four, setStepFour] = useState("");
  const [errors, setErrors] = useState([]);
  const currentUser = useSelector((state) => state.session.user);

  function checkURL(imageUrl) {
    return(imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (currentUser == undefined) {
      setErrors(["Must be logged in to create a Recipe."]);
      return;
    }

    if (recipe_name.split(" ").length === 1 && recipe_name.length > 15) {
      setErrors(["Recipe name cannot exceed 15 characters."]);
      return;
    }

    if (recipe_name.split(" ").length > 10) {
      setErrors(["Recipe name cannot exceed 10 words."]);
      return;
    }

    if (!recipe_type) {
      setErrors(["Please select a Recipe Type."]);
      return;
    }

    if (description.split(" ").length > 500){
      setErrors(["Recipe description cannot exceed 500 words"]);
      return;
    }

    if (description.split(" ").length === 1 && description.length > 25){
      setErrors(["Recipe description cannot exceed 25 characters"]);
      return;
    }

    if (ingredients.split(" ").length === 1 && ingredients.length > 25){
      setErrors(["Recipe ingredients cannot exceed 25 characters"]);
      return;
    }

    if (ingredients.split(" ").length > 500){
      setErrors(["Recipe ingredients cannot exceed 500 words"]);
      return;
    }

    if(checkURL(image_url) === false){
      setErrors(["Please provide an image in jpg or png format"])
      return
    }

    if (step_one.split(" ").length === 1 && step_one.length > 25 || step_two.split(" ").length === 1 && step_two.length > 25 || step_three.split(" ").length === 1 && step_three.length > 25 || step_four.split(" ").length === 1 && step_four.length > 25){
      setErrors(["Recipe step instructions cannot exceed 25 characters"]);
      return;
    }

    if (step_one.split(" ").length > 255 || step_two.split(" ").length > 255 || step_three.split(" ").length > 255 || step_four.split(" ").length > 255){
      setErrors(["Recipe step instructions cannot exceed 255 words"]);
      return;
    }

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

    const data = await dispatch(thunkCreateRecipe(recipe));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setErrors([]);
      history.push(`/recipe/${data.id}`);
    }
  };

  return (
    <div className="main-div">
      <div className="createRecipeForm">
        <h1>Create A New Recipe</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="input-form">
            <label>Recipe Name :</label>
            <input
              type="text"
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
              <option value="classic">Classic</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="desert">Desert</option>
              <option value="pasta">Pasta</option>
            </select>
          </div>
          <div className="input-form">
            <label>Description :</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Ingredients :</label>
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Recipe Preview Image :</label>
            <input
              type="text"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step One :</label>
            <input
              type="text"
              value={step_one}
              onChange={(e) => setStepOne(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step Two :</label>
            <input
              type="text"
              value={step_two}
              onChange={(e) => setStepTwo(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step Three :</label>
            <input
              type="text"
              value={step_three}
              onChange={(e) => setStepThree(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Step Four :</label>
            <input
              type="text"
              value={step_four}
              onChange={(e) => setStepFour(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="createRecipeButton" type="submit">
              Create New Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

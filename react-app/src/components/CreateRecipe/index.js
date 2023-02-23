import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreateBusiness.css'

export default function CreateBusiness() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session)
  const history = useHistory();
  const [recipe_name, setRecipeName] = useState('');
  const [recipe_type, setRecipeType] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [step_one, setStepOne] = useState('');
  const [step_two, setStepTwo] = useState('');
  const [step_three, setStepThree] = useState('');
  const [step_four, setStepFour] = useState('');
  const [errors, setErrors] = useState([]);
  const currentUser = useSelector(state => state.session.user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (currentUser == undefined) return history.push('/login')

    const business = {
      store_name,
      description,
      city,
      state,
      address,
      zipcode,
      business_type,
      opening_time,
      closing_time,
      phone_num,
      image_url
    };

    const data = await dispatch(thunkCreateBusiness(business))
    if (data.errors) {
      setErrors(data.errors)
    } else {
      setErrors([]);
      history.push(`/business/${data.id}`);
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
            <label>Business Name:</label>
            <input
              type='text'
              value={store_name}
              onChange={(e) => setStoreName(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Description:</label>
            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>City:</label>
            <input
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>State:</label>
            <input
              type='text'
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Address:</label>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Zipcode:</label>
            <input
              type='number'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Business Type:</label>
            <select
              value={business_type}
              onChange={(e) => setBusinessType(e.target.value)}
            >
              <option value="restaurant">Restaurant</option>
              <option value="auto">Auto Service</option>
              <option value="home">Home Service</option>
              <option value="salon">Hair Salon</option>
            </select>
          </div>
          <div className="input-form">
            <label>Opening Time:</label>
            <input
              type='text'
              value={opening_time}
              onChange={(e) => setOpeningTime(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Closing Time:</label>
            <input
              type='text'
              value={closing_time}
              onChange={(e) => setClosingTime(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Phone Number:</label>
            <input
              type='text'
              value={phone_num}
              onChange={(e) => setPhoneNum(e.target.value)}
              required
            />
          </div>
          <div className="input-form">
            <label>Business Image:</label>
            <input
              type='text'
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <button className='create-button' type="submit">Create New Business</button>
          </div>
        </form>
      </div>
      <div className='image-splash'>
        <img src={createBusinessImage} />
      </div>
    </div>
  )
}

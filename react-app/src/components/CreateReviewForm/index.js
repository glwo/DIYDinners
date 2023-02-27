import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { reviewCreate } from '../../store/review'
import { thunkLoadAllReviews } from '../../store/review'
import './CreateReviewForm.css'

function CreateReviewForm({ recipeId }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [ review, setReview ] = useState('')
    const [ stars, setStars ] = useState('')
    const [ image, setImage ] = useState('')
    const [ errors, setErrors ] = useState([])

    // const { recipe_id } = useParams()
    const currentUser = useSelector(state => state.session.user)



    useEffect(() => {
        dispatch(thunkLoadAllReviews())
    }, [dispatch])

    const updateReview = (e) => setReview(e.target.value)
    const updateStars = (e) => setStars(e.target.value)
    const updateImage = (e) => setImage(e.target.value)

    const clearData = (newReview) => {
        setReview('')
        setStars('')
        setImage('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (currentUser == undefined) return history.push('/login')

        let payload;

            payload= {
                recipe_id: recipeId,
                content: review,
                rating: stars,
                imgUrl: image,
            }

        let newReview = await dispatch(reviewCreate(recipeId, payload))

        if(newReview.errors){
            setErrors(newReview.errors)
        } else {
            clearData(newReview)
        }
    }

    console.log(stars)

    return (
        <div className='reviewForm'>
            <form onSubmit={handleSubmit} className='reviewCreateContainer'>
            <div>
                {/* <h4 className={!errors.length ? 'reviewFormHeader' : ''}>{recipe_id ? recipe.name : 'Reviews'}</h4> */}
            </div>
            {errors.length !== 0 &&
                <ul style={{"marginBottom":"0px"}}>
                    {errors.map((error, idx) => <li key={idx} style={{"color":"red"}}>{error}</li>)}

                </ul>
            }
            <h4>Add Note</h4>
            <textarea style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px"}}
                className='reviewText'
                type={'text'}
                placeholder={'Review'}
                required
                value={review}
                onChange={updateReview}
            />
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" onChange={updateStars}/>
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" onChange={updateStars}/>
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" onChange={updateStars}/>
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" onChange={updateStars}/>
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" onChange={updateStars}/>
              <label for="star1" title="text">1 star</label>
            </div>
            <input style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px"}}
                className='formChildren'
                type={'url'}
                placeholder={'Image'}
                value={image}
                onChange={updateImage}
            />
            <button className='reviewSubmit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateReviewForm

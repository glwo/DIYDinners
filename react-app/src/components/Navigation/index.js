import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='permanentNavBar'>
			<NavLink exact to="/">
				<div className='dinnerHomeLink'>
				<i class="fa-solid fa-utensils"></i>
				<h1> | </h1>
				<h1>DIYDinners</h1>
				</div>
			</NavLink>
			<div className='addRecipeNav'>
        		<NavLink exact to="/recipe">
          			Add Your Recipe
        		</NavLink>
      		</div>
			{/* <div>
			<NavLink exact to="/recipeBox">
          			Your Recipe Box
        		</NavLink>
			</div> */}
			{isLoaded && (
				<li className='navButtonProfile'>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</div>
	);
}

export default Navigation;

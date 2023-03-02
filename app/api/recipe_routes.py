from flask import Blueprint, redirect,session, request
from flask_login import login_required, current_user
from app.models import db, Recipe, RecipeImage
from app.forms import recipe_form

recipe_routes = Blueprint('recipe', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@recipe_routes.route('/')
def get_all_recipes():
  """
  Query for all recipes an return them in a list of recipe dictionaries
  """
  recipes = Recipe.query.all()
  return {"recipes": [recipe.to_dict() for recipe in recipes]}


@recipe_routes.route('/', methods=["POST"])
@login_required
def post_recipe():
  """
  Create a new recipe and return that recipe in a dictionary
  """
  form = recipe_form.RecipeForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  # Add and commit new recipe
  if form.validate_on_submit():
    newRecipe = Recipe(
      recipe_name = form.data['recipe_name'],
      recipe_type = form.data['recipe_type'],
      user_id = current_user.id,
      first_name = current_user.first_name,
      last_name = current_user.last_name,
      description = form.data['description'],
      ingredients = form.data['ingredients'],
      avg_rating = form.data['avg_rating'],
      num_reviews = form.data['num_reviews'],
      step_one = form.data['step_one'],
      step_two = form.data['step_two'],
      step_three = form.data['step_three'],
      step_four = form.data['step_four']
    )
    db.session.add(newRecipe)
    db.session.commit()
    # Add and commit recipe image
    newRecipeImage = RecipeImage(
      image_url = form.data['image_url'],
      preview = True,
      recipe_id = newRecipe.id
    )
    db.session.add(newRecipeImage)
    db.session.commit()

    return newRecipe.to_dict(), 201

  if form.errors:
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@recipe_routes.route('/<int:id>')
def get_recipe(id):
  """
  Query for a recipe by id and returns that recipe in a dictionary
  """
  thisRecipe = Recipe.query.get(id)

  if not thisRecipe:
    return {'Error': 'Recipe not Found'}, 404

  return thisRecipe.to_dict(), 200


@recipe_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_recipe(id):
  """
  Update recipe and return that recipe in a dictionary
  """
  thisRecipe = Recipe.query.get(id)
  thisRecipeImage = RecipeImage.query.get(thisRecipe.recipe_images[0].id)
  form = recipe_form.RecipeForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if not thisRecipe:
    return {"Error": "Recipe not Found"}, 404
  if current_user.id != thisRecipe.user_id:
    return {"Error": "Forbidden"}, 403

  if form.validate_on_submit():
    thisRecipe.recipe_name = form.data['recipe_name']
    thisRecipe.recipe_type = form.data['recipe_type']
    thisRecipe.description = form.data['description']
    thisRecipe.ingredients = form.data['ingredients']
    thisRecipe.step_one = form.data['step_one']
    thisRecipe.step_two = form.data['step_two']
    thisRecipe.step_three = form.data['step_three']
    thisRecipe.step_four = form.data['step_four']
    thisRecipeImage.image_url = form.data['image_url']

    db.session.commit()

    return thisRecipe.to_dict(), 200
  if form.errors:
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400


@recipe_routes.route('/<int:id>', methods=["DELETE"])
def delete_recipe(id):
  """
  Delete recipe
  """
  thisRecipe = Recipe.query.get(id)

  if not thisRecipe:
    return {"Error": "Recipe not Found"}, 404
  if current_user.id != thisRecipe.user_id:
    return {"Error": "Forbidden"}, 403

  db.session.delete(thisRecipe)
  db.session.commit()

  return {'Message': 'The recipe has been deleted!'}, 200

from flask import Blueprint, redirect,session, request
from flask_login import login_required, current_user
from ..models import db, Like

like_routes = Blueprint('likes', __name__)


@like_routes.route('/<int:recipe_id>', methods=['POST', 'DELETE'])
@login_required
def add_recipe(recipe_id):
    try:
        liked_recipe = Like.query.filter(Like.user_id == current_user.id, Like.recipe_id == recipe_id).first()
        if request.method == 'POST':
            if not liked_recipe:
                db.session.add(Like(user_id=current_user.id, recipe_id=recipe_id))
        else:
            if liked_recipe:
                db.session.delete(liked_recipe)

        db.session.commit()

        return {'message': 'successfully done'}, 201
    except:
        return {'error': 'something went wrong'}, 500

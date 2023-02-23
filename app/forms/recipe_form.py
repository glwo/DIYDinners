from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField, FloatField, SelectField
from wtforms.validators import DataRequired, ValidationError, URL, Length
from app.models import Recipe

class RecipeForm(FlaskForm):
  recipe_name = StringField('recipe_name', validators=[DataRequired()])
  recipe_type = StringField('recipe_type', validators=[DataRequired()])
  description = StringField('description', validators=[DataRequired()])
  ingredients = StringField('ingredients', validators=[DataRequired()])
  avg_rating = FloatField('avg_rating', default=0)
  num_reviews = IntegerField('num_reviews', default=0)
  step_one = StringField('step_one', validators=[DataRequired()])
  step_two = StringField('step_two', validators=[DataRequired()])
  step_three = StringField('step_three', validators=[DataRequired()])
  step_four = StringField('step_four', validators=[DataRequired()])
  image_url = StringField('image_url', validators=[DataRequired(), URL()])

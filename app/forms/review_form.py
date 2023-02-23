from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField, FloatField, SelectField
from wtforms.validators import DataRequired, ValidationError, URL, Length

class ReviewForm(FlaskForm):
  recipe_id = StringField('recipe_name', validators=[DataRequired()])
  content = StringField('content', validators=[DataRequired()])
  rating = IntegerField('rating', validators=[DataRequired()])
  imgUrl = StringField('image_url', validators=[DataRequired(), URL()])

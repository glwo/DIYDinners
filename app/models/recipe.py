from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Recipe(db.Model):
  __tablename__ = 'recipes'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  recipe_name = db.Column(db.String, nullable=False)
  recipe_type = db.Column(db.String, nullable=False)
  description = db.Column(db.String, nullable=False)
  ingredients = db.Column(db.String, nullable=False)
  avg_rating = db.Column(db.Numeric(2, 1), nullable=False)
  num_reviews = db.Column(db.Integer, nullable=False)
  step_one = db.Column(db.String, nullable=False)
  step_two = db.Column(db.String, nullable=False)
  step_three = db.Column(db.String, nullable=False)
  step_four = db.Column(db.String, nullable=False)
  created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
  updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
  recipe_images = db.relationship("RecipeImage", back_populates="recipe")
  reviews = db.relationship("Review", back_populates="recipe")

  def to_dict(self):
    if len([review.rating for review in self.reviews]) == 0:
      avg = 0
    else:
      avg = sum([review.rating for review in self.reviews]) / len([review.rating for review in self.reviews]),

    return {
      "id": self.id,
      "user_id": self.user_id,
      "recipe_name": self.recipe_name,
      "recipe_type": self.recipe_type,
      "description": self.description,
      "ingredients": self.ingredients,
      "avg_rating": avg,
      "num_reviews": len([review.to_dict() for review in self.reviews]),
      "step_one": self.step_one,
      "step_two": self.step_two,
      "step_three": self.step_three,
      "step_four": self.step_four,
      "recipe_images": [image.to_dict() for image in self.recipe_images],
      "review": [review.to_dict() for review in self.reviews]
    }

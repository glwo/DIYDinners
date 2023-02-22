from app.models import db, RecipeImage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_recipeImages():
    Masala_image1 = RecipeImage(
    image_url="https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
    preview=True,
    recipe_id=1
  )
    Masala_image2 = RecipeImage(
    image_url="https://www.recipetineats.com/wp-content/uploads/2018/04/Chicken-Tikka-Masala_0-SQ.jpg",
    preview=True,
    recipe_id=1
  )
    lemon_image1 = RecipeImage(
    image_url="https://www.saltandlavender.com/wp-content/uploads/2020/12/lemon-pepper-chicken-recipe-1.jpg",
    preview=True,
    recipe_id=2
  )
    lemon_image2 = RecipeImage(
    image_url="https://www.budgetbytes.com/wp-content/uploads/2021/03/Easy-Lemon-Pepper-Chicken-skillet-500x500.jpg",
    preview=True,
    recipe_id=2
  )
    tamarind_image1 = RecipeImage(
    image_url="https://static01.nyt.com/images/2019/04/24/dining/19apperex-pie/merlin_153515910_2b07d427-6b14-4eba-bda8-d0812ddc4ffd-threeByTwoMediumAt2X.jpg",
    preview=True,
    recipe_id=3
  )
    tamarind_image2 = RecipeImage(
    image_url="http://www.gratednutmeg.com/wp-content/uploads/2014/02/AT2.png",
    preview=True,
    recipe_id=3
  )
    lemon2_image1 = RecipeImage(
    image_url="https://cheftini.com/wp-content/uploads/2015/10/IMG_0117-1.jpg",
    preview=True,
    recipe_id=4
  )
    lemon2_image2 = RecipeImage(
    image_url="https://littlespicejar.com/wp-content/uploads/2021/09/Parmesan-Chicken-Cutlets-in-Lemon-Butter-Sauce-4.jpg",
    preview=True,
    recipe_id=4
  )
    blkshrimp_image1 = RecipeImage(
    image_url="https://littlespicejar.com/wp-content/uploads/2019/08/Blackened-Shrimp-Tacos-with-Slaw-6-1-scaled-735x1102.jpg",
    preview=True,
    recipe_id=5
  )
    blkshrimp_image2 = RecipeImage(
    image_url="https://www.budgetbytes.com/wp-content/uploads/2017/06/Blackened-Shrimp-Tacos-V4.jpg",
    preview=True,
    recipe_id=5
  )

    db.session.add(Masala_image1)
    db.session.add(Masala_image2)
    db.session.add(lemon_image1)
    db.session.add(lemon_image2)
    db.session.add(tamarind_image1)
    db.session.add(tamarind_image2)
    db.session.add(lemon2_image1)
    db.session.add(lemon2_image2)
    db.session.add(blkshrimp_image1)
    db.session.add(blkshrimp_image2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_recipeImages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.recipe_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM recipe_images")

    db.session.commit()

from app.models import db, RecipeImage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_recipeImages():
    Masala_image1 = RecipeImage(
    image_url="https://www.recipetineats.com/wp-content/uploads/2018/04/Chicken-Tikka-Masala_0-SQ.jpg",
    preview=True,
    recipe_id=1
  )
    Masala_image2 = RecipeImage(
    image_url="https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
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
    caciopepe_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/G8a2qggmL9wBgAk8g509Khvc1IA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegan-Cacio-Pepe-LEAD-04-485610c2226a4bc6b18a2eab7ca59114.jpg",
    preview=True,
    recipe_id=6
  )
    chickenSausage_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/uVmnrHHl9oaDmb_PDcgQ0OvS3Yw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__10__2016-10-10-ChickenSkilletPasta-9-fb2870c7d6f9463db6551c2a71778b62.jpg",
    preview=True,
    recipe_id=7
  )
    porkChops_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/YrdEGOazNo5RooizxoFWdz55jrY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-Pork-Chops-LEAD-6-7e236fa0245944a293a75b0ad371f6e8.jpg",
    preview=True,
    recipe_id=8
  )
    sloppyJoes_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/MxCffTlfoqoPfSxid2AamuubuA0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Philly-Cheesesteak-Sloppy-Joes-LEAD-01-7e49dd9506eb4c6c88db188313be4c36.jpg",
    preview=True,
    recipe_id=9
  )
    bananaBread_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/JHTjq5fNnskXjfCrz7Q9ufAk_pM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes_Brownie-Banana-Bread-LEAD-01-55d2ae802d764b1bae14a60021f831fd.jpg",
    preview=True,
    recipe_id=10
  )
    smores_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/VWnIRYDxVHgqpMpqCYQaVgoimss=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Smores-Bars-LEAD-1-e5227b82e04342e7a33981e7e774bda7.jpg",
    preview=True,
    recipe_id=11
  )
    carrot_image1 = RecipeImage(
    image_url="https://static01.nyt.com/images/2021/04/07/dining/05Nafasrex2/merlin_185308044_d86614f1-5f30-4124-9d83-85da702bbed9-superJumbo.jpg",
    preview=True,
    recipe_id=12
  )
    reuben_image1 = RecipeImage(
    image_url="https://static01.nyt.com/images/2023/03/14/multimedia/as-vegetarian-reuben-pwzv/as-vegetarian-reuben-pwzv-superJumbo.jpg",
    preview=True,
    recipe_id=13
  )
    spag_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/PvWQycvTKbrMtlfKZis9tlCy4uw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spaghetti-And-Meatballs-METHOD-6-7e3400378ab94a0fb9fc21039f4a4add.jpg",
    preview=True,
    recipe_id=14
  )
    pork_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/ls8WBSbOai4VPhHBWKDRJ2GCf70=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__05__grilled-pork-tenderloin-orange-marmalade-vertical-a-1600-784c460b393f4b638c168f6581971ba0.jpg",
    preview=True,
    recipe_id=15
  )
    bihon_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/zZhvuethnoJtA1PQHVUMZHKP8ck=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pancit-Bihon-Bowls-METHOD-12-49f23801ac364e44acf8ad8bcbab3ca6.jpg",
    preview=True,
    recipe_id=16
  )
    pad_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/2cohLcyORnWvNCCERGjZKWsixA0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegetarian-Pad-Thai-METHOD-5b-10ede0dfe7104461bdb1591c4123c073.jpg",
    preview=True,
    recipe_id=17
  )
    chorizo_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/WREWFcQKVqMcTE8lDbbrgEBH0Yo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Shrimp-Chorizo-Chowder-LEAD-03-9e71f26b6a7143b293162ba5deda721a.jpg",
    preview=True,
    recipe_id=18
  )
    dirt_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/a4N4AMcOlwGTrv73-7n-kj-LeHA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Dirt-Cake-Lead-01-be85a66fe317433bbcbb92174a792142.jpg",
    preview=True,
    recipe_id=19
  )
    lemonbar_image1 = RecipeImage(
    image_url="https://www.simplyrecipes.com/thmb/aTkDukbaTKmKKsMpe8q50cX7yqA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Lemon-Bars-LEAD-09-531f9985a5d04e8aa94822a7b4bdd045.jpg",
    preview=True,
    recipe_id=20
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
    db.session.add(caciopepe_image1)
    db.session.add(chickenSausage_image1)
    db.session.add(porkChops_image1)
    db.session.add(sloppyJoes_image1)
    db.session.add(bananaBread_image1)
    db.session.add(smores_image1)
    db.session.add(carrot_image1)
    db.session.add(reuben_image1)
    db.session.add(spag_image1)
    db.session.add(pork_image1)
    db.session.add(bihon_image1)
    db.session.add(pad_image1)
    db.session.add(chorizo_image1)
    db.session.add(dirt_image1)
    db.session.add(lemonbar_image1)
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

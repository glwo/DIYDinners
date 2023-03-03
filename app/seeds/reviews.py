from app.models import db, Review, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    bhindi1 = Review(
        recipe_id=1,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="This recipe was a great take on Okra and provides a nice vegetarian Masala for any weeknight",
        rating=5,
        imgUrl="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/bhindi-masala-recipe.jpg"
    )
    bhindi2 = Review(
        recipe_id=1,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="This is a delicious recipe. However, typically Indian okra is often cooked dry without ginger and tomoatos, and pan roasted with onions and spices.",
        rating=2,
        imgUrl="https://www.whiskaffair.com/wp-content/uploads/2020/11/Bhindi-Masala-2-3.jpg"
    )
    lemoncb1 = Review(
        recipe_id=2,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="What's not to love? Delicious, easy to make with inexpensive pantry ingredients. Five stars, two thumbs up! We will make again, soon.",
        rating=5,
        imgUrl="https://www.culinaryhill.com/wp-content/uploads/2020/04/Lemon-Pepper-Chicken-Recipe-Culinary-Hill-LR-07SQ.jpg"
    )
    lemoncc2 = Review(
        recipe_id=2,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="I made these last night with chicken tenders, and did not pound them out. Came out perfect! I served with braised white beans & greens with parmesano (NYT recipe too) and a butter leaf soft salad with a lemon vinaigrette.",
        rating=4,
        imgUrl="https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/2048x1152/hd-aspect-1504195270-lemon-pepper-chicken.jpg"
    )
    tamarind1 = Review(
        recipe_id=3,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="I've been sort of jonesing for a Key Lime pie, but I think I'll try this instead. Ginger snaps instead of graham crackers make a good crumb crust and would probably work nicely here.",
        rating=4,
        imgUrl="https://ediblereflections.files.wordpress.com/2014/09/wpid-img_20140911_193402.jpg"
    )
    tamarind2 = Review(
        recipe_id=3,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Made this pie. Delicious. I used Tamicon, which I had on hand, next time I'll add more lime juice as it was not quite tart enough for my taste.",
        rating=4,
        imgUrl="https://farm6.static.flickr.com/5241/5363997931_c1411e0750_z.jpg"
    )
    cutlets1 = Review(
        recipe_id=4,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="This was incredibly delicious. The chicken was moist and tender and the sauce was a zippy difference maker. I used dill and parsley in the sauce. Everyone ate it up but the younger set thought it too lemony.",
        rating=4,
        imgUrl="https://www.jennycancook.com/wp-content/uploads/2015/05/lemon_chicken_cutlets_600.jpg"
    )
    cutlets2 = Review(
        recipe_id=4,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="This was the best recipe I've ever made from the Times. So crispy and delicious. I love lemon, so that's part of it, and had some Meyer lemons still on the tree. So delicious. Served with mashed baby reds and sautéed spinach.",
        rating=5,
        imgUrl="https://lilluna.com/wp-content/uploads/2020/02/Garlic-Lemon-Chicken-4.jpg"
    )
    blkshrimp1 = Review(
        recipe_id=5,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="The shrimp were excellent with the rub!  Loved the cole slaw recipe.  I did make the lime sauce.  We decided it was not necessary with the shrimp.  Too much Mayo, cole slaw & sauce. I will make this again, better than going to a high priced restaurant!!!!",
        rating=4,
        imgUrl="https://www.freshoffthegrid.com/wp-content/uploads/Cajun-Shrimp-Tacos-Camping-Recipe-4.jpg"
    )
    blkshrimp2 = Review(
        recipe_id=5,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Loved the blackened shrimp. I didn’t have coleslaw ingredients so I did a Korean inspired taco with kimchi, spicy mayo, green onion, and sesame seeds.",
        rating=5,
        imgUrl="https://www.budgetbytes.com/wp-content/uploads/2017/06/Blackened-Shrimp-Tacos-H-500x500.jpg"
    )
    cacio1 = Review(
        recipe_id=6,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="This recipe is honestly even easier than making cacio e pepe! Surprisingly delicious and crowd-pleasing. I'll add peas next time, and maybe some artichoke hearts, to make it a meal.",
        rating=4,
        imgUrl="https://www.simplyrecipes.com/thmb/0UXKYfpwBmiftQAiZosP2dmCArY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegan-Cacio-Pepe-LEAD-07-bfea83247da444d2a52b1f4b65d63c5e.jpg"
    )
    cacio2 = Review(
        recipe_id=6,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="I loved this! I made it with sunflower seeds instead of cashews and the substitution worked great. Fast and easy and so flavorful. Will make again for sure.",
        rating=5,
        imgUrl="https://www.simplyrecipes.com/thmb/tVuKutIjwkvkOICMZF16HhrSpzA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegan-Cacio-Pepe-METHOD-04-d4d8d869b05c49089d9b6a2192e998b8.jpg"
    )
    Cpasta1 = Review(
        recipe_id=7,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Very good, added Romano.",
        rating=4,
        imgUrl="https://www.simplyrecipes.com/thmb/pmg9NJ3wrDTvJidBBBOo1NxqDaE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__10__2016-10-10-ChickenSkilletPasta-7-6d43a71eb35e44099af68b4e1f88669c.jpg"
    )
    Cpasta2 = Review(
        recipe_id=7,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="I used pork sausage; this added a little spice to the dish and gave it a kick. I used gluten free fusilli from Bionaturae, our favorite kind. Thanks for a great addition to our repertoire!",
        rating=5,
        imgUrl="https://www.simplyrecipes.com/thmb/P_zxptiPR5qLEEy8z7PqevlG11k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__10__pasta-skillet-chicken-sausage-vertical-b-1600-05c44df4e14048949c726469b9048c4f.jpg"
    )
    pchops1 = Review(
        recipe_id=8,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="Loved this recipe, will definitely make again. I added some red pepper flakes to provide depth.",
        rating=2,
        imgUrl="https://www.simplyrecipes.com/thmb/iDYPBXp-NRS7tk4du6hKz9jI8xM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-Pork-Chops-LEAD-5-4c152f2f3de040039ef4122741a5009a.jpg"
    )
    pchops2 = Review(
        recipe_id=8,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="5 out of 5 I’ve made these several times now, it’s my favorite way to eat pork chops!!!",
        rating=3,
        imgUrl="https://www.simplyrecipes.com/thmb/fhE696SUl0TfMnACCTr3wJPoiZY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-Pork-Chops-LEAD-2-f3dae1ed11a24bcea68359f35fec82be.jpg"
    )
    slop1 = Review(
        recipe_id=9,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="Easy to make , grandkids loved these!",
        rating=5,
        imgUrl="https://www.simplyrecipes.com/thmb/vkdZjLysDcKpRBj8cuejJVH7QiA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Philly-Cheesesteak-Sloppy-Joes-LEAD-05-a62c83ed44ce46c5aac2b4856137254e.jpg"
    )
    slop2 = Review(
        recipe_id=9,
        user_id=5,
        firstName="Alex",
        lastInitial="G",
        content="Easy, fast, and oh so tasty.  Make these to serve alongside a warm bowl of soup.",
        rating=4,
        imgUrl="https://www.budgetbytes.com/wp-content/uploads/2022/07/Classic-Sloppy-Joes-plate.jpg"
    )
    bbb1 = Review(
        recipe_id=10,
        user_id=2,
        firstName="Marnie",
        lastInitial="H",
        content="WARNING. There s a huge problem with this recipe. You will be sad if you don’t double it!!!! It is fantastic. I made it for the sole purpose of creating French toast the following morning. Unfortunately, it didn’t make it to that stage as it was eaten rather quickly. Making again today only doubling. Thank you so much for this delightful, easy recipe.",
        rating=5,
        imgUrl="https://www.simplyrecipes.com/thmb/Wnn8u7MSUJTTHzMz4tP068JLHis=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes_Brownie-Banana-Bread-LEAD-06-adca125610bc4deea1405b256c150fc3.jpg"
    )
    bbb2 = Review(
        recipe_id=10,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="Amazing! The most delicious I’ve ever eaten. Make it beautiful by doubling the recipe and baking in a bunt cake pan and drizzle a little vanilla icing.",
        rating=4,
        imgUrl="https://www.simplyrecipes.com/thmb/xCNwdE_9ngSBhgtjfHKCQMhBZi0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes_Brownie-Banana-Bread-METHOD-13-215875858472402899dc5b79bc984332.jpg"
    )
    cereal1 = Review(
        recipe_id=11,
        user_id=3,
        firstName="Bobbie",
        lastInitial="C",
        content="I wonder if you could just put it under the broiler for a short while to toast the marshmallows if you don’t have a torch? Hmm…",
        rating=3,
        imgUrl="https://www.simplyrecipes.com/thmb/ICZcrqb1SWhtzB_YqNfhKgQFjQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Smores-Bars-METHOD-4c-328d5ad900ed4197a99262368f7c1a12.jpg"
    )
    cereal2 = Review(
        recipe_id=11,
        user_id=4,
        firstName="Austin",
        lastInitial="S",
        content="It is amazing and really good with the flavor texture of the melted marshmallows.",
        rating=5,
        imgUrl="https://www.simplyrecipes.com/thmb/tdo5UFdH1BEpVq4WvbWpDPlNVvg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Smores-Bars-METHOD-3-b3864d131db54e559f5e6ba268a4d0fa.jpg"
    )

    db.session.add(bhindi1)
    db.session.add(bhindi2)
    db.session.add(lemoncb1)
    db.session.add(lemoncc2)
    db.session.add(tamarind1)
    db.session.add(tamarind2)
    db.session.add(cutlets1)
    db.session.add(cutlets2)
    db.session.add(blkshrimp1)
    db.session.add(blkshrimp2)
    db.session.add(cacio1)
    db.session.add(cacio2)
    db.session.add(Cpasta1)
    db.session.add(Cpasta2)
    db.session.add(pchops1)
    db.session.add(pchops2)
    db.session.add(slop1)
    db.session.add(slop2)
    db.session.add(bbb1)
    db.session.add(bbb2)
    db.session.add(cereal1)
    db.session.add(cereal2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()

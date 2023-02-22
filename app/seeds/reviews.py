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
        imgUrl="https://littlespicejar.com/wp-content/uploads/2019/08/Blackened-Shrimp-Tacos-with-Slaw-6-1-scaled-735x1102.jpg"
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
